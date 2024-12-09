import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbarc from "./Component/Navbarc.js";
import BackgroundSlider from "./Component/BackgroundSlider";
import "./index.css";
import image1 from "./Assets/Images/slider7.jpg";

function OtherInstruments() {
  return (
    <div className="talent">
      <Navbarc />
      <BackgroundSlider images={[image1]} duration={3600} blur={8} />
      <div style={{ display: "block" }}>
        <div className="bgslider2">
          <div className="justify-content-md-center maincontent2">
            <font style={{ color: "gold" }}>Other Instruments</font>
          </div>
          <div className="justify-content-md-center maincontent2">
            <font style={{ color: "gold" }}>General Instructions</font>
          </div>
        </div>
        <div className="bgslider3">
          <div className="maincontent3">
            <font>
              <li>
                Participants who wish to apply for multiple categories are
                encouraged to register for each category separately.
              </li>
            </font>
          </div>
          <div className="maincontent3">
            <font>
              <li>
                Please note that the number of categories applied to will not
                increase or decrease the chance of getting in.
              </li>
            </font>
          </div>
          <div className="maincontent3">
            <font>
              <li>All years are open to apply for the auditions.</li>
            </font>
          </div>
          <div className="maincontent3">
            <font>
              <li>
                It will be purely based on the skills of the applicant in the
                respective category.
              </li>
            </font>
          </div>
          <div className="maincontent3">
            <font>
              <li>
                Keep in mind that a well recorded video/audio will be easier to
                judge.
              </li>
            </font>
          </div>
          <div className="maincontent3">
            <font>
              <li>
                While uploading the audition clip, please make sure that you
                name the file you’re uploading in the specified format to avoid
                confusion “RollNumber_Category” (for eg: 23XX40_Keyboard)
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
                    <div className="maincontent3t">Other Instruments</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="maincontent3">
                      <font>For queries, Contact: </font>
                    </div>
                    <div className="maincontent3">
                      <font>Amruth K Warrier +91 94882 00354</font>
                    </div>
                    <div className="maincontent3">
                      <font>Saran +91 70105 81741</font>
                    </div>
                  </Card.Text>
                  <a
                    href="https://forms.gle/7fMcCA46LwmNn8zv8"
                    target="__blank"
                    className="fontjoin"
                  >
                    <button className="button text-bt-2">
                      Register for Other Instruments
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
            <Link to="/Talenthunt/EventManagement" className="fontjoin">
              <button className="button text-bt-2">
                Event Management Wing
              </button>
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
  );
}

export default OtherInstruments;
