package blog.backend.dto.project;

import java.sql.Timestamp;

import blog.backend.entity.Project;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectRequestDto {
    
    private String title;

    private String content;

    private int hits;

    private Timestamp createdAt;

    public Project toEntity(){
        return Project.builder()
            .title(title)
            .content(content)
            .build();
    }
}
