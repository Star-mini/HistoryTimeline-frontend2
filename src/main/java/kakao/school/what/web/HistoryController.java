package kakao.school.what.web;

import io.swagger.v3.oas.annotations.tags.Tag;
import kakao.school.what.domain.History;
import kakao.school.what.service.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Tag(name = "HistoryController", description = "History 관련 Controller")
public class HistoryController {
    @Autowired
    private HistoryService historyService;

    // 국가 id, 페이지 번호, 페이지 당 개수를 입력으로 받아 history를 반환합니다.
    @GetMapping("/history")
    public Page<History> getHistoryListByCountryId(
            @RequestParam(value = "countryId", required = false) Long countryId,
            @RequestParam(value = "page") int page,
            @RequestParam(value = "pageSize", required = false, defaultValue = "10") int pageSize
    ) {
        Pageable pageable = PageRequest.of(page, pageSize, Sort.by(Sort.Direction.DESC, "createdAt"));
        return historyService.listHistoryByCountryId(countryId, pageable);
    }
}
