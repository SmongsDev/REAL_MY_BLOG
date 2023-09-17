package blog.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import blog.backend.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
    Optional<Account> findByEmail(String email);

    // Optional<Account> findByNickname(String nickname);
}
