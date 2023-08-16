package blog.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import blog.backend.entity.Project;
import blog.backend.entity.Tag;
import blog.backend.repository.HashTagRepository;
import blog.backend.repository.ProjectHashTagRepository;
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

    // @Transactional
    // public void createTags(Project data){
    //     System.out.println("-----------------");
    //     List<Tag> tags = new ArrayList<>();
    //     for (Tag tag2 : data.getTags()) {
    //         tags.add(tag2);
    //     }

    //     saveTag(tags, data.getId());
    // }

    // public void saveTag(List<Tag> tagList, Long projectId) {
    //     for (Tag tagName : tagList) {
    //         Tag findResult = hashTagRepository.findTagByName(tagName.getName());

    //         // 등록된 태그가 아니라면 태그부터 추가
    //         if (findResult == null) {
    //             hashTagRepository.save(tagName);
    //         }

    //         Tag findTag = hashTagRepository.findTagByName(tagName.getName());
    //         hashTagRepository.addTagCount(findTag.getId());
    //         projectHashTagRepository.saveTagProject(findTag.getId(), projectId);
    //     }
    // }

}
