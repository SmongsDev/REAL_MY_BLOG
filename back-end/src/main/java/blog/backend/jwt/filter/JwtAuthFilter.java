package blog.backend.jwt.filter;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import blog.backend.dto.ResponseDto;
import blog.backend.jwt.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    @Override
    // HTTP 요청이 오면 WAS(tomcat)가 HttpServletRequest, HttpServletResponse 객체를 만들어 줍니다.
    // 만든 인자 값을 받아옵니다.
    // 요청이 들어오면 diFilterInternal 이 딱 한번 실행된다.
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // WebSecurityConfig 에서 보았던 UsernamePasswordAuthenticationFilter 보다 먼저 동작을 하게 됩니다.

        // Access / Refresh 헤더에서 토큰을 가져옴.
        String accessToken = jwtUtil.getHeaderToken(request, "Access");
        String refreshToken = jwtUtil.getHeaderToken(request, "Refresh");

        if(accessToken != null) {
            // 어세스 토큰값이 유효하다면 setAuthentication를 통해
            // security context에 인증 정보저장
            if(jwtUtil.tokenValidation(accessToken)){
                setAuthentication(jwtUtil.getEmailFromToken(accessToken));
            }
            // 어세스 토큰이 만료된 상황 && 리프레시 토큰 또한 존재하는 상황
            else if (refreshToken != null) {
                // 리프레시 토큰 검증 && 리프레시 토큰 DB에서  토큰 존재유무 확인
                boolean isRefreshToken = jwtUtil.refreshTokenValidation(refreshToken);
                // 리프레시 토큰이 유효하고 리프레시 토큰이 DB와 비교했을때 똑같다면
                if (isRefreshToken) {
                    // 리프레시 토큰으로 아이디 정보 가져오기
                    String loginId = jwtUtil.getEmailFromToken(refreshToken);
                    // 새로운 어세스 토큰 발급
                    String newAccessToken = jwtUtil.createToken(loginId, "Access");
                    // 헤더에 어세스 토큰 추가
                    jwtUtil.setHeaderAccessToken(response, newAccessToken);
                    // Security context에 인증 정보 넣기
                    setAuthentication(jwtUtil.getEmailFromToken(newAccessToken));
                }
                // 리프레시 토큰이 만료 || 리프레시 토큰이 DB와 비교했을때 똑같지 않다면
                else {
                    jwtExceptionHandler(response, "RefreshToken Expired", HttpStatus.BAD_REQUEST);
                    return;
                }
            }
        }

        filterChain.doFilter(request,response);
    }

    // SecurityContext 에 Authentication 객체를 저장합니다.
    public void setAuthentication(String email) {
        Authentication authentication = jwtUtil.createAuthentication(email);
        // security가 만들어주는 securityContextHolder 그 안에 authentication을 넣어줍니다.
        // security가 securitycontextholder에서 인증 객체를 확인하는데
        // jwtAuthfilter에서 authentication을 넣어주면 UsernamePasswordAuthenticationFilter 내부에서 인증이 된 것을 확인하고 추가적인 작업을 진행하지 않습니다.
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    // Jwt 예외처리
    public void jwtExceptionHandler(HttpServletResponse response, String msg, HttpStatus status) {
        response.setStatus(status.value());
        response.setContentType("application/json");
        try {
            String json = new ObjectMapper().writeValueAsString(new ResponseDto<>(status.value(), msg));
            response.getWriter().write(json);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
    }
}