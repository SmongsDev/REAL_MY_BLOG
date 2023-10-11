package blog.backend.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import blog.backend.dto.ResponseDto;
import blog.backend.dto.project.ProjectRequestDto;
import blog.backend.dto.project.ProjectResponseDto;
import blog.backend.dto.project.ProjectWithTagsDto;
import blog.backend.entity.Project;
import blog.backend.service.ProjectService;
import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping("/projects")
    public ResponseDto<Page<Project>> allProject(@PageableDefault(sort = "id", direction = Sort.Direction.DESC, size = 3) Pageable pageable){
        Page<Project> data = projectService.projectList(pageable);
        return new ResponseDto<>(HttpStatus.OK.value(), data);
    }

    @GetMapping("/{category}/projects")
    public ResponseDto<Page<ProjectResponseDto>> allProjectsByCategory(@PageableDefault(sort = "id", direction = Sort.Direction.DESC, size = 3) Pageable pageable, @PathVariable String category){
        Page<ProjectResponseDto> data = projectService.projectListByCategory(pageable, category);
        return new ResponseDto<>(HttpStatus.OK.value(), data);
    }

    @GetMapping("/project/{id}")
    public ResponseDto<ProjectResponseDto> readProject(@PathVariable Long id){
        Project data = projectService.getProject(id);

        ProjectResponseDto dto = ProjectResponseDto.builder()
            .id(data.getId())
            .title(data.getTitle())
            .content(data.getContent())
            .createdAt(data.getCreatedAt())
            .hits(data.getHits())
            .category(data.getCategory())
            .hashTag(data.getTags())
            .build();

        return new ResponseDto<>(HttpStatus.OK.value(), dto);
    }
    
    @PostMapping("/project/create")
    public ResponseDto<String> createProject(@RequestBody ProjectRequestDto requestDto){
        String data = projectService.createP(requestDto);
        return new ResponseDto<>(HttpStatus.OK.value(), data);
    }

    @DeleteMapping("/project/{id}")
    public ResponseDto<String> deleteProject(@PathVariable Long id){
        String data = projectService.deleteP(id);
        return new ResponseDto<>(HttpStatus.OK.value(), data);
    }

    @PutMapping("/project/{id}")
    public ResponseDto<String> updateProject(@PathVariable Long id, @RequestBody ProjectRequestDto requestDto){
        String data = projectService.updateP(id, requestDto);
        return new ResponseDto<>(HttpStatus.OK.value(), data);
    }


    @GetMapping("/projects/{tagName}")
    public ResponseDto<List<ProjectWithTagsDto>> getProjectsByTagName(@PathVariable String tagName) {
        List<ProjectWithTagsDto> data = projectService.getProjectsByTagName(tagName);
        return new ResponseDto<>(HttpStatus.OK.value(), data);
    }
}
