package blog.backend.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import blog.backend.repository.ProjectRepository;

@SpringBootTest
public class ProjectServiceTest {

    @Autowired
    private ProjectRepository projectRepository;
    
    @Test
    public void postTest(){
        Pageable pageable = PageRequest.of(0,3);
        System.out.println(projectRepository.findAll(pageable));
    }
}
