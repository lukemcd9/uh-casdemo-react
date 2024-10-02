package edu.hawaii.its.casdemo.access;

import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.LinkedHashMap;

public class DelegatingAuthenticationFailureHandler
        extends org.springframework.security.web.authentication.DelegatingAuthenticationFailureHandler {

    public DelegatingAuthenticationFailureHandler(String appUrlError) {
        super(new LinkedHashMap<>() {{
                  put(UsernameNotFoundException.class, new edu.hawaii.its.casdemo.access.AuthenticationFailureHandler(appUrlError));
                  put(AccountExpiredException.class, (request, response, e) -> response.sendRedirect(appUrlError));
              }},
                new AuthenticationFailureHandler(appUrlError));
    }
}
