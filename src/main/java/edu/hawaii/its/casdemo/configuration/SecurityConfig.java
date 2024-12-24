package edu.hawaii.its.casdemo.configuration;

import edu.hawaii.its.casdemo.access.CasUserDetailsService;
import edu.hawaii.its.casdemo.access.DelegatingAuthenticationFailureHandler;
import edu.hawaii.its.casdemo.access.UserBuilder;
import jakarta.annotation.PostConstruct;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apereo.cas.client.proxy.ProxyGrantingTicketStorage;
import org.apereo.cas.client.proxy.ProxyGrantingTicketStorageImpl;
import org.apereo.cas.client.session.SingleSignOutFilter;
import org.apereo.cas.client.validation.Saml11TicketValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.cas.ServiceProperties;
import org.springframework.security.cas.authentication.CasAssertionAuthenticationToken;
import org.springframework.security.cas.authentication.CasAuthenticationProvider;
import org.springframework.security.cas.web.CasAuthenticationEntryPoint;
import org.springframework.security.cas.web.CasAuthenticationFilter;
import org.springframework.security.cas.web.authentication.ServiceAuthenticationDetailsSource;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.AuthenticationUserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutFilter;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.util.Assert;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.io.IOException;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private static final Log logger = LogFactory.getLog(SecurityConfig.class);

    @Value("${app.url.base}")
    private String appUrlBase;

    @Value("${app.url.home}")
    private String appUrlHome;

    @Value("${app.url.error-login}")
    private String appUrlError;

    @Value("${cas.login.url}")
    private String casLoginUrl;

    @Value("${cas.mainUrl}")
    private String casMainUrl;

    @Value("${app.url.frontend}")
    private String frontendUrl;

    @Value("${app.url.frontend-host}")
    private String frontendHost;


    @Autowired
    private AuthenticationConfiguration authenticationConfiguration;

    @Autowired
    private UserBuilder userBuilder;

    @PostConstruct
    public void init() {
        logger.info("SecurityConfig starting...");

        logger.info("   appUrlHome: " + appUrlHome);
        logger.info("   appUrlBase: " + appUrlBase);
        logger.info("  appUrlError: " + appUrlError);
        logger.info("  frontendUrl: " + frontendUrl);
        logger.info("   casMainUrl: " + casMainUrl);
        logger.info("  casLoginUrl: " + casLoginUrl);
        logger.info("  userBuilder: " + userBuilder);

        Assert.hasLength(appUrlHome, "property 'appUrlHome' is required");
        Assert.hasLength(appUrlBase, "property 'appUrlBase' is required");
        Assert.hasLength(appUrlError, "property 'appUrlError' is required");
        Assert.hasLength(frontendUrl, "property 'frontendUrl' is required");
        Assert.hasLength(casMainUrl, "property 'casMainUrl' is required");
        Assert.hasLength(casLoginUrl, "property 'casLoginUrl' is required");

        logger.info("SecurityConfig started.");
    }

    @Bean
    public ProxyGrantingTicketStorage proxyGrantingTicketStorage() {
        return new ProxyGrantingTicketStorageImpl();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    @ConfigurationProperties(prefix = "cas")
    public ServiceProperties serviceProperties() {
        return new ServiceProperties();
    }

    @Bean
    @ConfigurationProperties(prefix = "cas.saml")
    public Saml11TicketValidator saml11TicketValidator() {
        return new Saml11TicketValidator(casMainUrl);
    }

    @Bean
    public CasAuthenticationEntryPoint casAuthenticationEntryPoint() {
        CasAuthenticationEntryPoint entryPoint = new CasAuthenticationEntryPoint();
        entryPoint.setLoginUrl(casLoginUrl);
        entryPoint.setServiceProperties(serviceProperties());
        return entryPoint;
    }

    @Bean
    public SingleSignOutFilter singleSignOutFilter() {
        return new SingleSignOutFilter();
    }

    @Bean
    public CasAuthenticationProvider casAuthenticationProvider() {
        CasAuthenticationProvider provider = new CasAuthenticationProvider();
        provider.setKey("an_id_for_this_auth_provider_only");
        provider.setAuthenticationUserDetailsService(authenticationUserDetailsService());
        provider.setServiceProperties(serviceProperties());
        provider.setTicketValidator(saml11TicketValidator());
        return provider;
    }

    @Bean
    public AuthenticationUserDetailsService<CasAssertionAuthenticationToken> authenticationUserDetailsService() {
        return new CasUserDetailsService(userBuilder);
    }

    @Bean
    public CasAuthenticationFilter casAuthenticationFilter() throws Exception {
        CasAuthenticationFilter filter = new CasAuthenticationFilter();
        filter.setAuthenticationManager(authenticationManager(authenticationConfiguration));

        filter.setProxyAuthenticationFailureHandler(authenticationFailureHandler());
        filter.setAuthenticationFailureHandler(authenticationFailureHandler());

        filter.setAuthenticationSuccessHandler(authenticationSuccessHandler());

        ServiceAuthenticationDetailsSource authenticationDetailsSource =
                new ServiceAuthenticationDetailsSource(serviceProperties());
        filter.setAuthenticationDetailsSource(authenticationDetailsSource);

        filter.setProxyGrantingTicketStorage(proxyGrantingTicketStorage());
        filter.setProxyReceptorUrl("/receptor");
        filter.setServiceProperties(serviceProperties());

        return filter;
    }

    @Bean
    public AuthenticationSuccessHandler authenticationSuccessHandler() {
        SavedRequestAwareAuthenticationSuccessHandler authenticationSuccessHandler =
                new SavedRequestAwareAuthenticationSuccessHandler();
        authenticationSuccessHandler.setAlwaysUseDefaultTargetUrl(false);
        authenticationSuccessHandler.setDefaultTargetUrl(appUrlHome);
        return authenticationSuccessHandler;
    }

    @Bean
    public AuthenticationFailureHandler authenticationFailureHandler() {
        return new DelegatingAuthenticationFailureHandler(appUrlError);
    }

    @Bean
    public SecurityContextLogoutHandler securityContextLogoutHandler() {
        return new SecurityContextLogoutHandler();
    }

    @Bean
    public LogoutFilter logoutFilter() {
        return new LogoutFilter(appUrlHome, securityContextLogoutHandler());
    }


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests((authorizeRequests) -> {
            authorizeRequests.requestMatchers("/").permitAll();
            authorizeRequests.requestMatchers("/index.html").permitAll();
            authorizeRequests.requestMatchers("/logout").permitAll();
            authorizeRequests.requestMatchers("/protected").authenticated();
            authorizeRequests.requestMatchers("/api/**").authenticated();
            authorizeRequests.anyRequest().authenticated();
        });
//        http.sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        http.logout((httpSecurity) -> {
            httpSecurity.invalidateHttpSession(true);
            httpSecurity.deleteCookies("JSESSIONID");
            httpSecurity.logoutUrl("/logout");
            httpSecurity.logoutSuccessUrl(frontendUrl);
        });
        http.addFilter(casAuthenticationFilter());
        http.addFilterBefore(singleSignOutFilter(), CasAuthenticationFilter.class);
        http.exceptionHandling((exception) -> exception.authenticationEntryPoint(casAuthenticationEntryPoint()));

        http.cors(Customizer.withDefaults());
        http.csrf(AbstractHttpConfigurer::disable);
        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedOrigins(List.of(frontendHost));
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
        corsConfiguration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);
        return source;
    }
}
