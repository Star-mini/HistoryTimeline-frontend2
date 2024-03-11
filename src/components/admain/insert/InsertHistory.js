import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function InsertHistory(props) {
    const navigate = useNavigate();
    const [board, setBoard] = useState({
        title: "",
        country: "",
        date: "",
        priority: "",
        imgUrl: "",
        brief: "",
        detail: "",
    });
    const { title, country, date, priority, imgUrl, brief, detail } = board;
    const onChange = (event) => {
        const { value, name, type } = event.target;

        setBoard((prevBoard) => ({
            ...prevBoard,
            [name]: type === "select-one" ? value : value.trim(), // Handle dropdown differently
        }));
    };
    const save = async () => {
        await axios.post(`//localhost:8080/adminHistory`, board).then((res) => {
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
                            name="country"
                            value={country}
                            onChange={onChange}
                        >
                            국가
                        </span>
                    </div>

                    <select class="custom-select col-10 form-select">
                        <option value="" disabled>
                            국가 선택
                        </option>
                        <option value="대한민국">한국</option>
                        <option value="미국">미국</option>
                        <option value="중국">중국</option>
                    </select>
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span class="input-group-text justify-content-center">
                            날짜
                        </span>
                    </div>
                    <input
                        className="form-control"
                        name="date"
                        type="date"
                        value={date}
                        onChange={onChange}
                    />
                </div>
                <div className="input-group mb-4">
                    <div className="col-2 input-group-prepend">
                        <span class="input-group-text justify-content-center">
                            우선순위
                        </span>
                    </div>
                    <input
                        className="form-control"
                        name="priority"
                        type="text"
                        value={priority}
                        onChange={onChange}
                    />
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
                            짧은 설명
                        </span>
                    </div>
                    <input
                        className="form-control"
                        name="brief"
                        type="text"
                        value={brief}
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

export default InsertHistory;
