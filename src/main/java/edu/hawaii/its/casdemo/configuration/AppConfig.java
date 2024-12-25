package edu.hawaii.its.casdemo.configuration;

import jakarta.annotation.PostConstruct;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@ComponentScan(basePackages = "edu.hawaii.its.casdemo")
@EnableJpaRepositories(basePackages = { "edu.hawaii.its.casdemo.repository" })
public class AppConfig implements WebMvcConfigurer {
    private Log logger = LogFactory.getLog(AppConfig.class);

    @PostConstruct
    public void init() {
        logger.info("AppConfig init");
    }
}
