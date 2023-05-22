import Carousel from 'react-bootstrap/Carousel';
import React from 'react';


function Movie(props) {
  let movie = props.movies;
  return (

    <Carousel style={{ marginBottom: '20px', marginRight: '20px', height: '10%', width: '40%'}}>
      {Array.isArray(movie) && movie.map(element => {
        return (
          <Carousel.Item key={element.id}>
            <img
              className="d-block w-100"
              src={element.poster_path}
              alt={element.title}
            />
            <Carousel.Caption style={{opacity: '0.5'}}>
              <h3>{element.title}</h3>
              <p>{element.popularity}, {element.release_date}, {element.vote_average}, {element.overview} </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}

    </Carousel >

  )


}
export default Movie; 