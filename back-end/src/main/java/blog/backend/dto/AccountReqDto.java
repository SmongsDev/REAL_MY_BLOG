package blog.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AccountReqDto {

    @NotBlank
    private String nickname;

    @NotBlank
    private String email;

    @NotBlank
    private String password;

    private String passwordCheck;

    public AccountReqDto(String email, String password, String passwordCheck) {
        this.email = email;
        this.password = password;
        this.passwordCheck = passwordCheck;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public void setEncodePwd(String encodePwd) {
        this.password = encodePwd;
    }
}