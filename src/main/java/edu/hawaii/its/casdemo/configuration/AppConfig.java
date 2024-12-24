package edu.hawaii.its.casdemo.configuration;

import jakarta.annotation.PostConstruct;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class AppConfig implements WebMvcConfigurer {
    private Log logger = LogFactory.getLog(AppConfig.class);

    @PostConstruct
    public void init() {
        logger.info("AppConfig init");
    }
}
