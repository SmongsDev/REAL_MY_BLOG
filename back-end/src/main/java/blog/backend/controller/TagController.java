package blog.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import blog.backend.entity.Tag;
import blog.backend.service.HashTagService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class TagController {
    
    private final HashTagService tagService;

    @GetMapping("/tags")
    public ResponseEntity<List<Tag>> getAllTags(){
        List<Tag> tagList = tagService.getAllTags();
        return ResponseEntity.ok(tagList);
    }
}
