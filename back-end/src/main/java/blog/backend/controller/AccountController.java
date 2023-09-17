package blog.backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import blog.backend.dto.AccountReqDto;
import blog.backend.dto.LoginReqDto;
import blog.backend.dto.ResponseDto;
import blog.backend.service.AccountService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AccountController {
    
    private final AccountService accountService;

    @PostMapping("/signup")
    public ResponseDto<String> signup(@RequestBody AccountReqDto requestDto) {
        return accountService.signup(requestDto);
    }

    @PostMapping("/login")
    public ResponseDto<String> login(@RequestBody LoginReqDto requestDto, HttpServletResponse response) {
        return accountService.login(requestDto, response);
    }
}
