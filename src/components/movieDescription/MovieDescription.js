import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";
import Popup from "reactjs-popup";
import { movies } from "../../data";
import "./MovieDescription.css";
import { FaPlayCircle } from "react-icons/fa";

const MovieDescription = () => {
  let idMovie = useParams().id;
  let navigate = useNavigate();

  return (
    <div className="movie-card">
      <div className="container">
        {movies
          // eslint-disable-next-line
          .filter((movie) => movie.id == idMovie)
          .map((selectedMovie, i) => (
            <div key={i}>
              <>
                <img
                  src={selectedMovie.posterUrl}
                  alt={selectedMovie.title}
                  className="cover"
                />
                <Popup
                  trigger={
                    <button className="play_trailer">
                      <FaPlayCircle size={75} />
                    </button>
                  }
                  modal
                >
                  {(close) => (
                    <div className="modale">
                      <div className="close" onClick={close}>
                        &times;
                      </div>
                      <div className="content">
                        <iframe
                          width="725"
                          height="400"
                          src={`https://www.youtube.com/embed/${selectedMovie.embedId}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </Popup>
                <div
                  className="hero"
                  style={{
                    backgroundImage: `url(${selectedMovie.backdropPath})`,
                  }}
                >
                  <div className="details">
                    <div className="title1">{selectedMovie.title}</div>

                    <fieldset className="rating">
                      <StarRatings
                        size={24}
                        rating={selectedMovie.average}
                        starRatedColor="yellow"
                        starDimension="24px"
                        starSpacing="0px"
                      />
                    </fieldset>
                  </div>
                </div>
                <div className="description">
                  <div className="column1">
                    <span className="tag">{selectedMovie.genre}</span>
                  </div>
                  <div className="column2">
                    <p>{selectedMovie.description}</p>
                  </div>
                </div>
                <div className="return" onClick={() => navigate("/")}>
                  <button>Return to home page</button>
                </div>
              </>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieDescription;
