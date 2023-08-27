package blog.backend.dto.project;

import java.sql.Timestamp;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjectWithTagsDto {
    private Long id;
    private String title;
    private String content;
    private int hits;
    private String category;
    private List<String> tags;
    private Timestamp createdAt;
}
