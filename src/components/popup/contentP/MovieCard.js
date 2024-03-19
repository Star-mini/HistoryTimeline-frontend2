import React from "react";
import Moovie from "./Movie";
import Fade from "react-reveal/Fade";
import "../../../styles/contents/movieCard.css";

const MovieCard = () => {
  return (
    <div >
      <h3 className="video-title">비디오| 다른컨텐츠</h3>      
      <div className="row row-cols-1 row-cols-sm-5 row-cols-md-5 g-3 mb-10 movie-container">
      <Fade bottom delay={500}>
        <Moovie name="태극기휘날리며" src="태극기휘날리며.jpg" className="movie-left" />
      </Fade>
      <Fade bottom delay={500}>
        <Moovie name="태극기휘날리며" src="태극기휘날리며.jpg" />
      </Fade>
      <Fade bottom delay={500}>
        <Moovie name="태극기휘날리며" src="태극기휘날리며.jpg" className="movie-right" />
      </Fade>
      <Fade bottom delay={500}>
        <Moovie name="태극기휘날리며" src="태극기휘날리며.jpg" className="movie-right" />
      </Fade>
      <Fade bottom delay={500}>
        <Moovie name="태극기휘날리며" src="태극기휘날리며.jpg" className="movie-right" />
      </Fade>
    </div>
    </div>
  );
};

export default MovieCard;
