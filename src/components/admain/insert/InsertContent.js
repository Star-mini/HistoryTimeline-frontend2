import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function InsertContent(props) {
    const navigate = useNavigate();
    const [content, setContent] = useState({
        title: "",
        contentType: "",
        tag: "",
        platform: "",
        imgUrl: "",
        history: "",
        detail: "",
    });
    const { title, contentType, tag, platform, imgUrl, history, detail } =
        content;
    const onChange = (event) => {
        const { value, name, type, checked } = event.target;

        if (type === "select-one") {
            setContent((prevContent) => ({
                ...prevContent,
                [name]: value,
            }));
        } else if (type === "checkbox") {
            const currentPlatforms = content.platform.split(",");
            const updatedPlatforms = checked
                ? [...currentPlatforms, name]
                : currentPlatforms.filter((platform) => platform !== name);

            setContent((prevContent) => ({
                ...prevContent,
                platform: updatedPlatforms.join(","),
            }));
        } else {
            setContent((prevContent) => ({
                ...prevContent,
                [name]: value.trim(),
            }));
        }
        console.log(content);
    };
    const save = async () => {
        await axios
            .post(`//localhost:8080/adminHistory`, content)
            .then((res) => {
                navigate("/adminHistory");
            });
    };
    const cancel = () => {
        navigate("/adminHistory");
    };
    return (
        <div className="col-md-5">
            <form>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span class="input-group-text justify-content-center">
                            제목
                        </span>
                    </div>
                    <input
                        className="form-control"
                        name="title"
                        type="text"
                        value={title}
                        onChange={onChange}
                    />
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span
                            class="input-group-text justify-content-center"
                            name="contentType"
                            value={contentType}
                            onChange={onChange}
                        >
                            타입
                        </span>
                    </div>

                    <select class="custom-select col-10 form-select">
                        <option value="" disabled>
                            콘텐츠 타입
                        </option>
                        <option value="영화">영화</option>
                        <option value="드라마">드라마</option>
                    </select>
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span class="input-group-text justify-content-center">
                            태그
                        </span>
                    </div>
                    <input
                        className="form-control"
                        name="tag"
                        type="tag"
                        value={tag}
                        onChange={onChange}
                    />
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span class="input-group-text justify-content-center">
                            플랫폼
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="netflixCheckbox"
                            name="넷플릭스"
                            checked={content.platform.split(',').includes('넷플릭스')}
                            onChange={onChange}
                        />
                        <label
                            className="custom-control-label"
                            htmlFor="netflixCheckbox"
                        >
                            넷플릭스
                        </label>

                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="waveCheckbox"
                            name="웨이브"
                            checked={content.platform.split(',').includes('웨이브')}
                            onChange={onChange}
                        />
                        <label
                            className="custom-control-label"
                            htmlFor="waveCheckbox"
                        >
                            웨이브
                        </label>
                    </div>
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span class="input-group-text justify-content-center">
                            이미지 링크
                        </span>
                    </div>
                    <input
                        className="form-control"
                        name="imgUrl"
                        type="text"
                        value={imgUrl}
                        onChange={onChange}
                    />
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span class="input-group-text justify-content-center">
                            관련 역사
                        </span>
                    </div>
                    <input
                        className="form-control"
                        name="history"
                        type="text"
                        value={history}
                        onChange={onChange}
                    />
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span class="input-group-text justify-content-center">
                            상세 설명
                        </span>
                    </div>
                    <textarea
                        className="col-10 form-control"
                        name="detail"
                        value={detail}
                        onChange={onChange}
                        rows="5"
                    ></textarea>
                </div>
            </form>
            <div class="input-group mb-4 justify-content-end">
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

export default InsertContent;
