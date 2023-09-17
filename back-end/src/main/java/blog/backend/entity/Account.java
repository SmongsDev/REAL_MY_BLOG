package blog.backend.entity;

import blog.backend.dto.AccountReqDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountId;

    @NotBlank
    private String nickname;

    @NotBlank
    private String email;

    @NotBlank
    private String password;
    
    public Account(AccountReqDto accountReqDto) {
        this.nickname = accountReqDto.getNickname();
        this.email = accountReqDto.getEmail();
        this.password = accountReqDto.getPassword();
    }
}