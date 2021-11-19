import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "react-rating";

const Oponion = (props) => {
  const { name, address, description, rating, more } = props.oponion;
  return (
    <Card style={{ minHeight: "150px" }} className="my-5">

      <Card.Body className="text-center">
        <h5>
          {name}
          <hr />
          <h5>{address}</h5>
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
        <hr />
        <Card.Text>{description?.slice(0, 10)}</Card.Text>
        <Button>{more}</Button>
      </Card.Body>
    </Card>
  );
};

export default Oponion;