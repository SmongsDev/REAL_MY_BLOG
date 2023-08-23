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
@EnableWebSecurity
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
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors().configurationSource(corsConfigurationSource())
            .and()
            .csrf().disable()
            .httpBasic().disable();
        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*")); // 허용할 Origin 설정
        configuration.setAllowedMethods(Arrays.asList("*")); // 허용할 HTTP 메서드 설정
        configuration.setAllowedHeaders(Arrays.asList("*")); // 허용할 헤더 설정
        configuration.setAllowCredentials(true); // 인증 정보를 포함할 수 있도록 설정

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    // @Bean
    // public CorsFilter corsFilter() {
    //     UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    //     CorsConfiguration config = new CorsConfiguration();
    //     config.setAllowCredentials(true);
    //     config.addAllowedOrigin("*");
    //     config.addAllowedHeader("*");
    //     config.addAllowedMethod("*");
    //     source.registerCorsConfiguration("/**", config);
    //     return new CorsFilter(source);
    // }
    
}