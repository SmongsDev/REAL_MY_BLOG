package blog.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import blog.backend.dto.project.ProjectRequestDto;
import blog.backend.dto.project.ProjectResponseDto;
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

    @Transactional(readOnly = true)
    public Page<Project> projectList(Pageable pageable){
        return projectRepository.findAll(pageable);
    }    
    
    @Transactional(readOnly = true)
    public Page<ProjectResponseDto> projectListByCategory(Pageable pageable, String category){
        Page<Project> projects = projectRepository.findAllByCategory(category, pageable);
        return projects.map(ProjectResponseDto::new);
    }

    @Transactional
    public Project getProject(Long id){
        Project project = projectRepository.findById(id).get();
        project.increaseCount();
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
                    Tag newTag = Tag.builder().name(tagName).build();
                    newTag.setCnt(1);
                    tagRepository.save(newTag);
                    return newTag;
            });
            tags.add(tag);
        }
        Project project = Project.builder()
                .title(requestDto.getTitle())
                .content(requestDto.getContent())
                .tags(tags)
                .category(requestDto.getCategory())
                .build();
        projectRepository.save(project);
        return "성공";
    }

    @Transactional
    public String deleteP(Long id){
        Project project = projectRepository.findById(id)
            .orElseThrow(()->{
                return new IllegalArgumentException("글 찾기 실패 : 아이디를 찾을 수 없습니다.");
            });

        // 게시글에 연결된 태그들도 삭제
        for (Tag tag : project.getTags()) {
            tag.decreaseCount();
        }

        projectRepository.delete(project);
        return "삭제 성공";
    }

    @Transactional
    public String updateP(Long id, ProjectRequestDto requestDto){
        Project project = projectRepository.findById(id)
        .orElseThrow(()->{
            return new IllegalArgumentException("글 찾기 실패 : 아이디를 찾을 수 없습니다.");
        });
        List<Tag> updatedTags = hashTagService.updateOrCreateTags(requestDto.getTags());

        for (Tag tag : project.getTags()) {
            if (!updatedTags.contains(tag)) {
                tag.decreaseCount();
            }
        }
        for (Tag tag : updatedTags) {
            if (!project.getTags().contains(tag)) {
                tag.increaseCount();
            }
        }

        project.setTitle(requestDto.getTitle());
        project.setContent(requestDto.getContent());
        project.setTags(updatedTags);
        project.setCategory(requestDto.getCategory());
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
                project.getHits(),
                project.getCategory(),
                tagNames,
                project.getCreatedAt()
            );
            
            projectWithTagsDtos.add(dto);
        }
        
        return projectWithTagsDtos;
    }
}
