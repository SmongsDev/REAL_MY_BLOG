package blog.backend.service;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import blog.backend.dto.AccountReqDto;
import blog.backend.dto.LoginReqDto;
import blog.backend.dto.ResponseDto;
import blog.backend.jwt.dto.TokenDto;
import blog.backend.entity.Account;
import blog.backend.entity.RefreshToken;
import blog.backend.jwt.util.JwtUtil;
import blog.backend.repository.AccountRepository;
import blog.backend.repository.RefreshTokenRepository;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;
    private final AccountRepository accountRepository;
    private final RefreshTokenRepository refreshTokenRepository;

    @Transactional
    public ResponseDto<String> signup(AccountReqDto accountReqDto) {
        // nickname 중복검사
        if(accountRepository.findByEmail(accountReqDto.getEmail()).isPresent()){
            throw new RuntimeException("Overlap Check");
        }
        
        // 패스워드 암호화
        accountReqDto.setEncodePwd(passwordEncoder.encode(accountReqDto.getPassword()));
        Account account = new Account(accountReqDto);
        
        // 회원가입 성공
        accountRepository.save(account);
        return new ResponseDto<>(HttpStatus.OK.value(),"Success signup");
    }

    @Transactional
    public ResponseDto<String> login(LoginReqDto loginReqDto, HttpServletResponse response) {
        
        // 아이디 검사
        Account account = accountRepository.findByEmail(loginReqDto.getEmail()).orElseThrow(
                () -> new RuntimeException("Not found Account")
        );
        
        // 비밀번호 검사
        if(!passwordEncoder.matches(loginReqDto.getPassword(), account.getPassword())) {
            throw new RuntimeException("Not matches Password");
        }
        
        // 아이디 정보로 Token생성
        TokenDto tokenDto = jwtUtil.createAllToken(loginReqDto.getEmail());
        
        // Refresh토큰 있는지 확인 
        Optional<RefreshToken> refreshToken = refreshTokenRepository.findByAccountEmail(loginReqDto.getEmail());
        
        // 있다면 새토큰 발급후 업데이트
        // 없다면 새로 만들고 디비 저장
        if(refreshToken.isPresent()) {
            refreshTokenRepository.save(refreshToken.get().updateToken(tokenDto.getRefreshToken()));
        }else {
            RefreshToken newToken = new RefreshToken(tokenDto.getRefreshToken(), loginReqDto.getEmail());
            refreshTokenRepository.save(newToken);
        }
        
        // response 헤더에 Access Token / Refresh Token 넣음
        setHeader(response, tokenDto);

        return new ResponseDto<>(HttpStatus.OK.value(),"Success Login");

    }

    private void setHeader(HttpServletResponse response, TokenDto tokenDto) {
        response.addHeader(JwtUtil.ACCESS_TOKEN, tokenDto.getAccessToken());
        response.addHeader(JwtUtil.REFRESH_TOKEN, tokenDto.getRefreshToken());
    }
}