import '../../../styles/contents/content.css';

function Content(props) {
    // className prop을 추가하여 외부에서 전달받은 클래스를 적용
    const { src, name, className } = props; // 구조 분해 할당을 사용하여 props를 추출

    console.log(src);

    return (
        <div className={`movie card movie-specific movie-background ${className}`}>
          <img
            src={src}
            className="card-img-top" 
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          </div>
        </div>
    );
}

export default Content;
