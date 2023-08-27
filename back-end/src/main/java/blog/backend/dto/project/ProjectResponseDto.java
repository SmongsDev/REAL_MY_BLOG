package blog.backend.dto.project;

import java.sql.Timestamp;
import java.util.List;

import blog.backend.entity.Project;
import blog.backend.entity.Tag;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectResponseDto {

    private Long id;
    
    private String title;

    private String content;

    private int hits;

    private String category;

    private List<Tag> hashTag;

    private Timestamp createdAt;

    public ProjectResponseDto(Project project) {
        this.id = project.getId();
        this.title = project.getTitle();
        this.content = project.getContent();
        this.hits = project.getHits();
        this.category = project.getCategory();
        this.hashTag = project.getTags();
        this.createdAt = project.getCreatedAt();
    }
}
