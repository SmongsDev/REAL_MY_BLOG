package blog.backend.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import blog.backend.dto.ResponseDto;
import blog.backend.dto.project.ProjectCreateRequestDto;
import blog.backend.entity.Project;
import blog.backend.service.ProjectService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping("/projects")
    public ResponseDto<Page<Project>> allProject(Pageable pageable){
        Page<Project> data = projectService.projectList(pageable);
        return new ResponseDto<Page<Project>>(HttpStatus.OK.value(), data);
    }

    @GetMapping("/project/{id}")
    public ResponseDto<Project> readProject(@PathVariable Long id){
        Project data = projectService.getProjectList(id);
        return new ResponseDto<Project>(HttpStatus.OK.value(), data);
    }

    @PostMapping("/createP")
    public ResponseDto<String> createProject(@RequestBody ProjectCreateRequestDto requestDto){
        String data = projectService.createP(requestDto);
        return new ResponseDto<String>(HttpStatus.OK.value(), data);
    }
}
