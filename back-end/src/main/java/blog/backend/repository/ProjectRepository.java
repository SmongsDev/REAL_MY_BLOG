package blog.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import blog.backend.dto.project.ProjectCreateRequestDto;
import blog.backend.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long>{

    void save(ProjectCreateRequestDto requestDto);

    Page<Project> findAll(Pageable pageable);
}
