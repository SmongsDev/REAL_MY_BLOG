// package blog.backend.config;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.EnableWebMvc;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// @EnableWebMvc
// public class WebConfig implements WebMvcConfigurer {
//     private String FRONT_URL = "https://javascriptkr-curly-space-rotary-phone-j76j6qjgwq72jj66-3000.preview.app.github.dev";

//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//         registry.addMapping("/**")
//             .allowedOrigins(FRONT_URL)
//             .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
//             .allowedHeaders("*")
//             .allowCredentials(false)
//             .maxAge(3000);
//     }
// }