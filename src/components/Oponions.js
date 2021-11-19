import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import Fade from "react-reveal/Fade";
import Oponion from "./Oponion.js";
import toast from "react-hot-toast";
import "./../assets/css/Oponions.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";

const Oponions = () => {
  SwiperCore.use([Pagination, Autoplay]);
  const [loading, setLoading] = useState(true);
  const [Reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://arcane-cove-15684.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, []);

  return (
    <section
      id="reviews"
      style={{ overflow: "hidden" }}
      className="oponions p-md-3 col-xs-12"
    >

      {/* swipper added */}
      <Fade bottom duration={500} distance="50px">
        <div className="my-5 py-4">
          <div className="review-title text-center">
            <span>What Our Customer oponion</span>

          </div>
          {loading ? (
            <div className="">
              <Spinner animation="grow" variant="primary" />
            </div>
          ) : (
            <Card className="mt-2">
              <Swiper
                loop={true}
                slidesPerView={3}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 2,
                  },
                  968: {
                    slidesPerView: 2,
                    spaceBetween: 1,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}

              //Reviews all details are here
              >
                {Reviews.map((oponion) => {
                  return (
                    <SwiperSlide key={oponion._id}>
                      <Oponion oponion={oponion} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Card>
          )}
        </div>
      </Fade>
    </section>
  );
};

export default Oponions;
