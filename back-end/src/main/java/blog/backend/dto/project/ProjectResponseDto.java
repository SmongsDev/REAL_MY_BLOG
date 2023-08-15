package blog.backend.dto.project;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectResponseDto {
    
    private String title;

    private String content;

    private int hits;

    private Timestamp createdAt;

}
