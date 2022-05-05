import { Modal, Button, show } from "react-bootstrap";
import React, { useState } from "react";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);
  const releaseYear = release_date.split('-')[0];

  return (
    <div className="card text-center mb-3">
      <div className="card-body">
        <img
          className="card-img-top"
          src={API_IMG + poster_path} alt="movie card"/>
        <div className="card-body">
          <button type="button" className="btn btn-dark" onClick={() => setShow(true)}>View More</button>
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="card-img-top"
                style={{ width: "14rem" }}
                src={API_IMG + poster_path}
                alt="movie card"
              />
              <h2>{title}</h2>
              <h3>Release date {releaseYear}</h3>
              <h4>Rating {vote_average}</h4>
              <br></br>
              <h4>Plot</h4>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
