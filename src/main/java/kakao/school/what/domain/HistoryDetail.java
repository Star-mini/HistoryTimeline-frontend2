package kakao.school.what.domain;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Data
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class HistoryDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "history detail_id")
    private Integer historyDetailId;

    @Column(name = "history_id")
    private Long historyId;

    @Column(name = "deatil")
    private String detail;

}
