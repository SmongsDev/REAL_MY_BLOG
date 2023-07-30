package blog.backend.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import blog.backend.dto.project.ProjectRequestDto;
import blog.backend.entity.Project;
import blog.backend.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Transactional
    public Page<Project> projectList(Pageable pageable){
        return projectRepository.findAll(pageable);
    }    

    @Transactional
    public Project getProject(Long id){
        projectRepository.updateHits(id);
        Project project = projectRepository.findById(id).get();
        return project;
    }

    @Transactional
    public String createP(ProjectRequestDto requestDto){
        projectRepository.save(requestDto.toEntity());        
        return "성공";
    }

    @Transactional
    public String deleteP(Long id){
        projectRepository.deleteById(id);
        return "삭제 성공";
    }

    @Transactional
    public String updateP(Long id, Project project){
        Project findProject = projectRepository.findById(id)
        .orElseThrow(()->{
            return new IllegalArgumentException("글 찾기 실패 : 아이디를 찾을 수 없습니다.");
        });

        findProject.setTitle(project.getTitle());
        findProject.setContent(project.getContent());
        return "수정 성공";
    }
}
