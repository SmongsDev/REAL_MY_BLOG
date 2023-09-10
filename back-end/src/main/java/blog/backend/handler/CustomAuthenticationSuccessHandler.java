// package blog.backend.handler;

// import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
// import org.springframework.stereotype.Component;

// import io.jsonwebtoken.io.IOException;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;

// @Component
// public class CustomAuthenticationSuccessHandler {
//     @Override
// 	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
// 			Authentication authentication) throws IOException, ServletException {
// 		response.sendRedirect(request.getContextPath() + "/");
// 	}
// }
