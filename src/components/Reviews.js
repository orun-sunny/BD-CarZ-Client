import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import toast from "react-hot-toast";
import swal from "sweetalert";
import "../../Home/Oponions/Oponions.css";




const Review = ({
  review: { name, description, address, _id },
  setEdit,
}) => {
  const handleDeleteReview = (id) => {
    swal({


      buttons: [true, "Yes"],
      dangerMode: true,
    }).then((wantDelete) => {
      if (wantDelete) {
        const loading = toast.loading("Deleting...Please wait!");
        axios
          .delete(`https://stormy-hamlet-70465.herokuapp.com/deleteReview/${id}`)
          .then((res) => {
            toast.dismiss(loading);
            if (res.data) {
              return (
                "ok"
              );
            }
            swal(
              "oops!",
              "error",

            );
          })
          .catch((err) => {
            toast.dismiss(loading);
            swal(
              "error",
              { dangerMode: true }
            );
          });
      }
    });
  };

  return (
    <section>
      <div
        className=""
        style={{ borderRadius: "15px", maxWidth: "16rem" }}
      >
        <div className="review-title pt-2 text-center">
          <h2>Reviews</h2>
        </div>
        <Card className="my-4 mx-auto " style={{ maxWidth: "25rem" }}>

          <Card.Body className="">
            <h5>
              {name} <br />
              <span>{address}</span>
            </h5>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
        <div className="text-center">
          <Button
            variant="outline-success"
            onClick={() => setEdit(true)}
            className="py-1 px-4"
          >
            Edit
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => handleDeleteReview(_id)}
            className="py-1 px-2 ml-4"
          >
            Delete
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Review;