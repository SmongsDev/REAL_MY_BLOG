package blog.backend.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import blog.backend.entity.Project;
import blog.backend.entity.Tag;

import java.util.Collections;
import java.util.stream.IntStream;

import org.junit.jupiter.api.Test;

@SpringBootTest
public class ProjectRepositroyTest {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private HashTagRepository tagRepository;
    
    @Test
    public void createProject(){
        IntStream.rangeClosed(1, 5).forEach(i -> {
            Tag tag = Tag.builder().name("name" + i).build();
            tagRepository.save(tag);
            Project project = Project.builder()
                .title("test" + i)
                .content("test_content" + i)
                .tags(Collections.singletonList(tag))
                .category("TIL")
                .build();
            projectRepository.save(project);
        });
    }
}
