package blog.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import blog.backend.entity.Tag;
import blog.backend.repository.HashTagRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class HashTagService {
    
    private final HashTagRepository tagRepository;
    // private final ProjectHashTagRepository projectHashTagRepository;

    // @Transactional
    // public List<Tag> readTag(String name){
    //     return tagRepository.findByNameIn(name);
    // }

    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    @Transactional
    public List<Tag> updateOrCreateTags(List<String> tagNames) {
        List<Tag> updatedTags = new ArrayList<>();
        for (String tagName : tagNames) {
            Tag tag = tagRepository.findByName(tagName)
                .orElseGet(() -> tagRepository.save(Tag.builder().name(tagName).build()));
            updatedTags.add(tag);
        }
        return updatedTags;
    }

}
