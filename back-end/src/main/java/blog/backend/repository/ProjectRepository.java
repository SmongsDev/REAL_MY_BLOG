package blog.backend.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Modifying;
// import org.springframework.data.jpa.repository.Query;

import blog.backend.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long>{

    // @Modifying
    // @Query("update Project p set p.hits = p.hits + 1 where p.id = :id")
    // void updateHits(Long id);

    List<Project> findByTagsName(String tagName);

    Page<Project> findAllByCategory(String category, Pageable pageable);
}
