package blog.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import blog.backend.entity.TagMap;

public interface ProjectHashTagRepository extends JpaRepository<TagMap, Long>  {

    @Modifying
    @Query("INSERT INTO TagMap (tag, project) VALUES (:tagId, :projectId)")
    void saveTagProject(@Param("tagId") Long tag, @Param("projectId") Long project);
}
