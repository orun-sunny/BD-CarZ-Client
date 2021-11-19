import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";

const Oponion = (props) => {
  const { name, address, description, rating } = props.oponion;
  return (
    <Card style={{ minHeight: "150px" }} className="my-5">

      <Card.Body className="text-center">
        <h5>
          {name} <hr />
          <span>{address}</span>
          <hr />
        </h5>
        <h6>
          Rating:
          <Rating
            className="text-black"
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            initialRating={rating}
            readonly
          />{" "}
          {rating}
        </h6>
        <br />
        <Card.Text>{description?.slice(0, 10)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Oponion;
