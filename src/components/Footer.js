import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import "./../assets/css/footer.css";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footerSection">
        <Container>
          <Row>
            <Col md={4} xs={12} xl={4} >
              <Zoom right>
                <div className="footerRecentPosts">
                  <h3>Recent Posts</h3>
                  <Link>About us</Link>
                  <Link>services</Link>
                  <Link>Gallery </Link>
                  <Link>How to Live</Link>
                  <Link>mission</Link>
                </div>
              </Zoom>
            </Col>
            <Col md={4} xs={12} xl={4}>
              <Zoom left>
                <div className="footerRecentPosts">
                  <h3>Categories</h3>
                  <Link>Guide</Link>
                  <Link>Health Insurance</Link>

                  <Link>Motivation</Link>
                </div>
              </Zoom>
            </Col>
            <Col md={4} xs={12} xl={4}>
              <div className="footerAbout">
                <h3>Car Portal</h3>
                <p>"Being here is a kind of spiritual surrender   </p>
              </div>
            </Col>
            <Col md={12} className="d-flex justify-content-between">
              <Zoom left>
                <div className="text-center">
                  <i class="fab fa-instagram mx-2"></i>
                  <i class="fab fa-facebook-square mx-2 "></i>
                  <i class="fab fa-facebook-messenger mx-2"></i>
                  <i class="fab fa-linkedin mx-2"></i>
                  <i class="fab fa-youtube mx-2"></i>
                  <i class="fab fa-twitter-square mx-2"></i>
                </div>
              </Zoom>
            </Col>
          </Row>
        </Container>
        <p
          style={{ background: "#000099" }}
          className="m-0 fw-bold py-3  text-white text-center"
        >
          Copyright &copy; All Reserved by{" "}
          <a
            className="text-decoration-none"
            style={{ color: "#ff136f" }}
            target="orun-sunny.github.io"
            rel="noreFerrer"
            href="orun-sunny.github.io"
          >
            orun-sunny
          </a>{" "}
          in 2021
        </p>
      </div >





    </>
  );
};

export default Footer;
