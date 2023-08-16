package blog.backend.entity;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Entity
@Table(name = "tag")
public class Tag{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @ColumnDefault("0")
    @Column(name = "tag_count")
    private int cnt;

    public static TagBuilder builder(String name) {
        return new TagBuilder().name(name);
    }

    // TagBuilder 클래스 정의
    public static class TagBuilder {
        private String name;

        public TagBuilder name(String name) {
            this.name = name;
            return this;
        }

        public Tag build() {
            Tag tag = new Tag();
            tag.setName(name);
            return tag;
        }
    }
}