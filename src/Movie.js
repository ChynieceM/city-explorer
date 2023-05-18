import Carousel from 'react-bootstrap/Carousel';
import React from 'react';


function Movie(props) {
  let movie = props.movies;
  return (

    <Carousel>
      {movie.map(element => {
        return (
          <Carousel.Item key={element.id}>
            <img
              className="d-block w-100"
              src={element.poster_path}
              alt={element.overview}
            />
            <Carousel.Caption>
              <h3>{element.title}</h3>
              <p>{element.popularity}</p>
              <p>{element.release_date}</p>
              <p>{element.vote_average}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}

    </Carousel >

  )


}
export default Movie; 