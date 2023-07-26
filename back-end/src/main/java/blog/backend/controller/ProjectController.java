package blog.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import blog.backend.dto.ResponseDto;

@RestController
public class ProjectController {
    
    @GetMapping("/api/project")
    public ResponseDto<Integer> readProject(){
        return new ResponseDto<Integer>(false, false, 1);
    }
}
