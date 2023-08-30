package blog.backend.dto.project;

import java.util.List;

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

    private List<String> tags;

    private String category;

}
