package kakao.school.what.service;

import kakao.school.what.domain.History;
import kakao.school.what.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class HistoryService {
    @Autowired
    private HistoryRepository historyRepository;

    // 국가 id에 따라 history를 page로 불러옴
    public Page<History> listHistoryByCountryId(Long countryId, Pageable pageable) {
        return historyRepository.findAllByCountryId(countryId, pageable);
    }
}
