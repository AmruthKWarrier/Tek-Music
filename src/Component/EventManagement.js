import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbarc from "./Navbarc";
import BackgroundSlider from "./BackgroundSlider";
import image1 from "../Assets/Images/slider7.jpg";
import "../index.css";

const EventManagement = () => {
  return (
    <>
      <div className="talent">
        <Navbarc />
        <BackgroundSlider images={[image1]} duration={3600} blur={9} />
        <div style={{ display: "block" }}>
          <div className="bgslider2">
            <div className="justify-content-md-center maincontent2">
              <font style={{ color: "gold" }}>Event Management Wing</font>
            </div>
            <div className="justify-content-md-center maincontent2">
              <font style={{ color: "gold" }}>General Instructions</font>
            </div>
          </div>
          <div className="bgslider3">
            <div className="maincontent3">
              <font>
                <li>All years are open to apply</li>
              </font>
            </div>

            <div className="maincontent3">
              <font>
                <li>
                  Send us your portfolios! Your portfolio must include a brief
                  summary of your past work and a concise list of skills you
                  think you are adept at, with reference to building a social
                  media presence for us.
                </li>
              </font>
            </div>
            <div className="maincontent3">
              <font>
                <li>You can upload up to 5 files each of size 100 MB.</li>
              </font>
            </div>
            <div className="maincontent3">
              <font>
                <li>
                  Include images, videos, or other media that showcase your past
                  contributions to events.
                </li>
              </font>
            </div>
            <div className="maincontent3">
              <font>
                <li>
                  If you wish to share more files, upload them to a google drive
                  and share the drive with editor access to whoever has the
                  link. The drive will not be shared outside the club.
                </li>
              </font>
            </div>
            <div className="maincontent3">
              <font>
                <li>
                  Paste the link in a google doc and upload that document as a
                  PDF or a document, so that we can redirect ourselves to your
                  drive from that document.
                </li>
              </font>
            </div>
          </div>
          <div className="bgslider4">
            <Row xs={1} md={1} className="g-4">
              <Col>
                <Card
                  border="light"
                  style={{ background: "none", borderRadius: "25px" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <div className="maincontent3t">Event Management</div>
                    </Card.Title>
                    <Card.Text>
                      <div
                        className="maincontent3"
                        style={{
                          paddingTop: "0.4rem",
                          padddingBottom: "0.4rem",
                        }}
                      >
                        <font>Saran +91 70105 81741</font>
                      </div>
                      <div
                        className="maincontent3"
                        style={{
                          paddingTop: "0.4rem",
                          padddingBottom: "0.4rem",
                        }}
                      >
                        <font>Amruth +91 94882 00354</font>
                      </div>
                      <div
                        className="maincontent3"
                        style={{
                          paddingTop: "0.4rem",
                          padddingBottom: "0.4rem",
                        }}
                      >
                        <font>Vijhay +91 63792 76849</font>
                      </div>
                    </Card.Text>
                    <a
                      href="https://forms.gle/LvLabR9HqZToJYfo6"
                      target="__blank"
                      className="fontjoin"
                    >
                      <button className="button text-bt-2">
                        Register for Event Management
                      </button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <div style={{ display: "block" }}>
            <div className="bgslider2" style={{ marginTop: "1rem" }}>
              <div className="justify-content-md-center maincontent2">
                <font>Other categories</font>
              </div>

              <Link to="/Talenthunt/Classical" className="fontjoin">
                <button className="button text-bt-2">Classical Wing</button>
              </Link>
              <Link to="/Talenthunt/Light&Western" className="fontjoin">
                <button className="button text-bt-2">
                  Light and Western Wing
                </button>
              </Link>
              <Link to="/Talenthunt/Mixing" className="fontjoin">
                <button className="button text-bt-2">Mixing Wing</button>
              </Link>
              <Link to="/Talenthunt/Media" className="fontjoin">
                <button className="button text-bt-2">Media Wing</button>
              </Link>
              <Link to="/Talenthunt/otherInstruments" className="fontjoin">
                <button className="button text-bt-2">Other Instruments</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bgslider2" style={{ marginTop: "1rem" }}>
          <div className="maincontent3">
            <font>For any other queries, contact:</font>
          </div>
          <div className="maincontent3">
            <font>Amruth K Warrier +91 94882 00354</font>
          </div>
          <div className="maincontent3">
            <font>Dharsha Durai +91 94873 19226</font>
          </div>
        </div>
        <div className="bgslider2" style={{ marginTop: "4rem" }} />
      </div>
    </>
  );
};

export default EventManagement;
