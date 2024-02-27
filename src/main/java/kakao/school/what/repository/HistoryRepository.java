package kakao.school.what.repository;

import kakao.school.what.domain.History;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoryRepository extends JpaRepository<History, Long> {
    // 국가 id에 따라 history를 page로 불러옴
    Page<History> findAllByCountryId(Long countryId, Pageable pageable);
}
