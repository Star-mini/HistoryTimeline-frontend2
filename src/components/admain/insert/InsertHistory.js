import React, { useState, useEffect, useCallback } from "react";
import { cusomizedAxios as axios } from "../../../constants/customizedAxios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "../../../styles/admin/insertHistory.css";

/**
 * props에 데이터가 전달된다면 해당 값의 history 데이터가 표시된다.
 * /history/one?historyId=historyId | /historyDeatilPop/one?historyId=historyId
 * 나라 목록은 /countries에서 데이터를 얻어와 표시하였다.
 * 우선순위는 0과 1만 입력되도록 지정하였다.
 * 저장, 취소 시 확인 창을 표시하였다.
 */
function InsertHistory(props) {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [countries, setCountries] = useState([]);
    const [detail, setDetail] = useState({});

    const getData = useCallback(async () => {
        try {
            const responseCountry = await axios.get("/countries");
            setCountries(responseCountry.data);

            const response = await axios.get(
                "/history/one?historyId=" + props.postId
            );
            setData(response.data[0]);
            const responseDetail = await axios.get(
                "/historyDetail/one?historyId=" + props.postId
            );
            setDetail(responseDetail.data[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);

    const save = async () => {
        const confirmed = window.confirm("저장하시겠습니까?");
        if (confirmed) {
            try {
                const formData = {
                    title: data.title,
                    countryId: data.countryId,
                    year: data.year,
                    month: data.month,
                    day: data.day,
                    priority: data.priority,
                    imgUrl: data.imgUrl,
                    brief: data.brief,
                    detail: detail.detail,
                };
                await axios.post(`/saveHistory`, formData);
                props.setIsVisible(false);
                props.setPostId(null);
            } catch (error) {
                console.error("Error saving data:", error);
                window.confirm("다시한번 시도해보세요.");
            }
        } else {
            window.confirm("다시한번 시도해보세요.");
        }
    };

    const cancel = () => {
        const confirmed = window.confirm("취소하시겠습니까?");
        if (confirmed) {
            props.setIsVisible(false);
            props.setPostId(false);
        }
    };

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <div className="col-md-5">
            <form>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span className="input-group-text justify-content-center">
                            제목
                        </span>
                    </div>
                    <input
                        className="form-control"
                        name="title"
                        type="text"
                        value={data.title || ""}
                        onChange={(e) =>
                            setData({ ...data, title: e.target.value })
                        }
                        required
                    />
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span className="input-group-text justify-content-center">
                            국가
                        </span>
                    </div>
                    <select
                        className="custom-select col-10 form-select"
                        name="countryOption"
                        value={data.countryId || ""}
                        required
                        onChange={(e) =>
                            setData({ ...data, countryId: e.target.value })
                        }
                    >
                        <option value="" disabled>
                            국가 선택
                        </option>
                        {countries.map((country) => (
                            <option key={country.countryId} value={country.countryId} selected={country.countryId === data.countryId}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span className="input-group-text justify-content-center">
                            날짜
                        </span>
                    </div>
                    <input
                        className="form-control"
                        type="number"
                        placeholder="년"
                        value={data.year || ""}
                        onChange={(e) =>
                            setData({ ...data, year: e.target.value })
                        }
                        required
                    />
                    <input
                        className="form-control"
                        type="number"
                        placeholder="월"
                        value={data.month || ""}
                        onChange={(e) =>
                            setData({ ...data, month: e.target.value })
                        }
                    />
                    <input
                        className="form-control"
                        type="number"
                        placeholder="일"
                        value={data.day || ""}
                        onChange={(e) =>
                            setData({ ...data, day: e.target.value })
                        }
                    />
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span className="input-group-text justify-content-center">
                            우선순위
                        </span>
                    </div>
                    <input
                        className="form-control"
                        name="priority"
                        type="number"
                        min="0"
                        max="1"
                        step="1"
                        value={data.priority || ""}
                        onChange={(e) => {
                            let priorityValue = parseInt(e.target.value);
                            if (priorityValue > 1) {
                                priorityValue = 1; // 입력된 값이 1보다 크면 1로 설정
                            }
                            setData({
                                ...data,
                                priority: priorityValue.toString(),
                            });
                        }}
                    />
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span className="input-group-text justify-content-center">
                            이미지 링크
                        </span>
                    </div>
                    <input
                        className="form-control"
                        name="imgUrl"
                        type="text"
                        value={data.imgUrl || ""}
                        onChange={(e) =>
                            setData({ ...data, imgUrl: e.target.value })
                        }
                    />
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span className="input-group-text justify-content-center">
                            짧은 설명
                        </span>
                    </div>
                    <input
                        className="form-control"
                        name="brief"
                        type="text"
                        value={data.brief || ""}
                        onChange={(e) =>
                            setData({ ...data, brief: e.target.value })
                        }
                    />
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span className="input-group-text justify-content-center">
                            상세 설명
                        </span>
                    </div>
                    <textarea
                        className="col-10 form-control"
                        name="detail"
                        value={detail.detail || ""}
                        onChange={(e) =>
                            setDetail({ ...detail, detail: e.target.value })
                        }
                        rows="5"
                    ></textarea>
                </div>
            </form>
            <div className="input-group justify-content-end">
                <div className="input-group-append">
                    <Button className="btn btn-primary mb-2" onClick={save}>
                        저장
                    </Button>
                    &nbsp;
                    <Button className="btn btn-danger mb-2" onClick={cancel}>
                        취소
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InsertHistory;
