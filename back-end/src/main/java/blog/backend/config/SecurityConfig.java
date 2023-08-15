// package blog.backend.config;

// import java.util.Arrays;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
// import org.springframework.security.config.web.server.ServerHttpSecurity;
// import org.springframework.security.web.server.SecurityWebFilterChain;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.CorsConfigurationSource;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
// // import org.springframework.web.servlet.config.annotation.CorsRegistry;
// // import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

//     @Bean
//     public WebSecurityCustomizer webSecurityCustomizer() {
//         return (web) -> web.ignoring().requestMatchers("/write");
//     }

//     @Bean
//     public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
//         http
//             .cors(cors -> cors.disable())
//             .authorizeRequests()
//                 .requestMatchers(request -> request
//                     .dispatcherType(DispatcherType.FORWARD).permitAll()
//                 )
//                 .anyRequest().permitAll();
            
//         return http.build();
//     }

//     @Bean
//     public CorsConfigurationSource corsConfigurationSource() {
//         CorsConfiguration configuration = new CorsConfiguration();
//         configuration.setAllowedOrigins(Arrays.asList("https://javascriptkr-curly-space-rotary-phone-j76j6qjgwq72jj66-3000.app.github.dev"));
//         configuration.setAllowedMethods(Arrays.asList("GET","POST"));
//         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//         source.registerCorsConfiguration("/**", configuration);
//         return source;
//     }
    
//     // private String FRONT_URL = "https://javascriptkr-curly-space-rotary-phone-j76j6qjgwq72jj66-3000.app.github.dev";

//     // @Override
//     // public void addCorsMappings(final CorsRegistry registry) {
//     //     registry.addMapping("/**")
//     //         .allowedOrigins(FRONT_URL)
//     //         .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD", "TRACE")
//     //         .allowedHeaders("*")
//     //         .allowCredentials(true)
//     //         .maxAge(3600);
//     // }
// }