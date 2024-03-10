// MovieCard.js
import React from "react";
import Moovie from "./Movie";
import Fade from "react-reveal/Fade";

const MovieCard = () => {
  return (
    <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3 mb-10">
      <Fade bottom delay={500}>
        <Moovie name="태극기휘날리며" src="태극기휘날리며.jpg" />
        <Moovie name="태극기휘날리며" src="태극기휘날리며.jpg" />
        <Moovie name="태극기휘날리며" src="태극기휘날리며.jpg" />        
      </Fade>
    </div>
  );
};

export default MovieCard;
