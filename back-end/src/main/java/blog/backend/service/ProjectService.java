package blog.backend.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import blog.backend.dto.project.ProjectCreateRequestDto;
import blog.backend.entity.Project;
import blog.backend.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public Page<Project> projectList(Pageable page){
        Pageable pageable = PageRequest.of(0,3);
        return projectRepository.findAll(pageable);
    }
    
    public String createP(ProjectCreateRequestDto requestDto){
        projectRepository.save(requestDto);
        return "성공";
    }

    public Project getProjectList(Long id){
        return projectRepository.findById(id).get();
    }
}
