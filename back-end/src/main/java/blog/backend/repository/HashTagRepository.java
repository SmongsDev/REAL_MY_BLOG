package blog.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Modifying;
// import org.springframework.data.jpa.repository.Query;

import blog.backend.entity.Tag;

public interface HashTagRepository extends JpaRepository<Tag, Long> {

    // @Modifying
    // @Query("update Tag t set t.cnt = t.cnt + 1 where t.id = :id")
    // void addTagCount(Long id);

    Optional<Tag> findByName(String name);
    
    List<Tag> findByNameIn(List<String> tagNames);
}
