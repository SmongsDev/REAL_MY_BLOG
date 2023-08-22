package blog.backend.config;

import java.util.Arrays;

import org.springframework.boot.autoconfigure.security.reactive.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

// @EnableWebFluxSecurity
// @EnableReactiveMethodSecurity
@Configuration
public class SecurityConfig {

    // @Bean
    // public WebSecurityCustomizer webSecurityCustomizer() {
    //     return (web) -> web.ignoring().requestMatchers("/write");
    // }

    // @Bean
    // void configure(HttpSecurity httpSecurity) throws Exception {
    //     httpSecurity.httpBasic().disable()
    //         .cors().disable();
    // }

    // @Bean
    // SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
    //     http
    //         .cors(cors -> cors.disable());
    //         // .authorizeRequests()
    //         //     .requestMatchers(request -> request
    //         //         .dispatcherType(DispatcherType.FORWARD).permitAll()
    //         //     )
    //         //     .anyRequest().permitAll();
            
    //     return http.build();
    // }
    
    // @Bean
    // SecurityWebFilterChain filterChain(ServerHttpSecurity http) {
    //     return http
    //         .cors(cors -> cors.disable())
    //         .authorizeExchange()
    //         .matchers(PathRequest.toStaticResources().atCommonLocations()).permitAll()
    //         .anyExchange()
    //         .authenticated().and()
    //         .oauth2Login().and()
    //         // disable the local user login prompt
    //         // but OAuth2 login is prompted at /login
    //         .formLogin().disable()
    //         .build();
    // }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf().disable()
            .cors().disable()
            .httpBasic().disable()
            .build();
        // configure HTTP security...
     
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("https://javascriptkr-curly-space-rotary-phone-j76j6qjgwq72jj66-3000.app.github.dev"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST"));
		configuration.setAllowedHeaders(Arrays.asList("*"));
		configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
    
    // private String FRONT_URL = "https://javascriptkr-curly-space-rotary-phone-j76j6qjgwq72jj66-3000.app.github.dev";

    // @Override
    // public void addCorsMappings(CorsRegistry registry) {
    //     registry.addMapping("/**")
    //         .allowedOrigins(FRONT_URL)
    //         .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD", "TRACE")
    //         .allowedHeaders("*")
    //         .allowCredentials(true)
    //         .maxAge(3600);
    // }
}