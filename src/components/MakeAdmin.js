import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert2";
import Bounce from 'react-reveal/Bounce';
import SectionBg from "./../assets/images/sectionBg.png";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .put("https://arcane-cove-15684.herokuapp.com/addAdmin", data)
      .then((res) => {
        if (res?.data?.modifiedCount) {
          reset();
          return (
            "Successfully Added",
            `${data.email} has been successfully added as an admin.`,
            "success"
          );
        } else if (res?.data?.matchedCount) {
          reset();
          swal.fire("Failed!", `${data.email} is already an admin.`, "error", {
            dangerMode: true,
          });
        } else {
          reset();
          swal.fire(
            "Failed!",
            `${data.email} is not registered yet!`,
            "error",
            {
              dangerMode: true,
            }
          );
        }
      })
      .catch((error) => {

      });
  };

  return (


    <section className="make-admin d-flex justify-content-center align-items-center " style={{
      height: "91vh",
      background: `url(${SectionBg})`,
      backgroundAttachment: "fixed",
    }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Bounce left>
          <h4 className="text-center text-secondary  ">Add a new admin</h4>
        </Bounce>
        <div className="p-2 mx-md-5 form-main d-flex justify-content-center">
          <div>
            <Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                {...register("email", { required: true })}
                placeholder="Email Address"
              />
            </Form.Label>

            <Button type="submit" className="rounded-0">
              Submit
            </Button>
          </div>

        </div>

      </Form>
    </section>
  );
};

export default MakeAdmin;
