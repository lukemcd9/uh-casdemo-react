package edu.hawaii.its.casdemo.controller;

import edu.hawaii.its.casdemo.access.User;
import edu.hawaii.its.casdemo.access.UserContextService;
import edu.hawaii.its.casdemo.service.MessageService;
import edu.hawaii.its.casdemo.type.Message;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@Controller
public class HomeController {

    private static final Log logger = LogFactory.getLog(HomeController.class);
    @Value("${app.url.frontend}")
    private String frontendUrl;

    private MessageService messageService;
    private UserContextService userContextService;

    public HomeController(MessageService messageService, UserContextService userContextService) {
        this.messageService = messageService;
        this.userContextService = userContextService;
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/login")
    public void test(HttpServletResponse response) throws IOException {
        logger.info("Logged in");
        response.sendRedirect(frontendUrl + "/auth");
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/api/user")
    public ResponseEntity<User> user() {
        logger.info("At User: " + userContextService.getCurrentUser());
        return ResponseEntity.ok(this.userContextService.getCurrentUser());
    }

    @GetMapping("/api/message/{id}")
    public ResponseEntity<Message> message(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(messageService.findMessage(id));
    }

}
