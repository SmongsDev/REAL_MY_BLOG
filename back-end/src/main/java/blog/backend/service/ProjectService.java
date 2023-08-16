package blog.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import blog.backend.dto.project.ProjectRequestDto;
import blog.backend.dto.project.ProjectWithTagsDto;
import blog.backend.entity.Project;
import blog.backend.entity.Tag;
import blog.backend.repository.HashTagRepository;
import blog.backend.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ProjectService {

    private final HashTagService hashTagService;
    private final ProjectRepository projectRepository;
    private final HashTagRepository tagRepository;
    // private final ProjectHashTagRepository projectHashTagRepository;

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
        List<Tag> tags = new ArrayList<>();
        for (String tagName : requestDto.getTags()) {
            Tag tag = tagRepository.findByName(tagName)
                .map(existingTag -> {
                    existingTag.setCnt(existingTag.getCnt() + 1);
                    return existingTag;
                })
                .orElseGet(() -> {
                    Tag newTag = Tag.builder(tagName).build();
                    newTag.setCnt(1);
                    return newTag;
            });
            tags.add(tag);
        }
        Project project = Project.builder()
                .title(requestDto.getTitle())
                .content(requestDto.getContent())
                .tags(tags)
                .build();
        projectRepository.save(project);
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

    @Transactional(readOnly = true)
    public List<ProjectWithTagsDto> getProjectsByTagName(String tagName) {
        List<Project> projects = projectRepository.findByTagsName(tagName);
        
        List<ProjectWithTagsDto> projectWithTagsDtos = new ArrayList<>();
        for (Project project : projects) {
            List<String> tagNames = project.getTags().stream()
                .map(Tag::getName)
                .collect(Collectors.toList());
            
            ProjectWithTagsDto dto = new ProjectWithTagsDto(
                project.getId(),
                project.getTitle(),
                project.getContent(),
                tagNames,
                project.getHits(),
                project.getCreatedAt()
            );
            
            projectWithTagsDtos.add(dto);
        }
        
        return projectWithTagsDtos;
    }
}
