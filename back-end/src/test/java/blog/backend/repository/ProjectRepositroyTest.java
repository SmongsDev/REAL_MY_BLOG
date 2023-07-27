package blog.backend.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import blog.backend.entity.Project;

import java.util.stream.IntStream;

import org.junit.jupiter.api.Test;

@SpringBootTest
public class ProjectRepositroyTest {

    @Autowired
    private ProjectRepository projectRepository;
    
    @Test
    public void createProject(){
        IntStream.rangeClosed(1, 5).forEach(i -> {
            Project project = Project.builder()
                .title("test" + i)
                .content("test_content" + i)
                .build();
            projectRepository.save(project);
        });
    }
}
