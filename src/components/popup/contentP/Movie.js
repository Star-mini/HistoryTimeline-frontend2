import '../../../styles/contents/movie.css';

function Movie(props) {
    return (
        <div class="movie card movie-specific movie-background">
          <img
            src={props.src}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
          </div>
        </div>
    );
  }

    export default Movie;