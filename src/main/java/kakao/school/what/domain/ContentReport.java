package kakao.school.what.domain;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class ContentReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "content_report_id")
    private Long ContentReportId;

    @Column(name = "user_id")
    private Long UserId;

    @Column(name = "report")
    private String Report;

    @Column(name = "created_at")
    @CreatedDate
    private LocalDateTime createdAt;

}
