import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbarc from "./Component/Navbarc.js";
import BackgroundSlider from "./Component/BackgroundSlider";
import "./index.css";
import image1 from "./Assets/Images/slider7.jpg";

function Lightwestern() {
  return (
    <div className="talent">
      <Navbarc />
      <BackgroundSlider images={[image1]} duration={3600} blur={9} />
      <div style={{ display: "block" }}>
        <div className="bgslider2">
          <div className="justify-content-md-center maincontent2">
            <font style={{ color: "gold" }}>Light and Western Wing</font>
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
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card
                border="light"
                style={{ background: "none", borderRadius: "25px" }}
              >
                <Card.Body>
                  <Card.Title>
                    <div className="maincontent3t">Light Vocals</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="maincontent3">
                      <font>For queries, Contact: </font>
                    </div>
                    <div className="maincontent3">
                      <font>Shiva +91-9487333689</font>
                    </div>
                    <div className="maincontent3">
                      <font>Dharsha Durai +91 94873 19226</font>
                    </div>
                  </Card.Text>
                  <a
                    href="https://forms.gle/ZvzDGJgw8nXAfeju7"
                    target="__blank"
                    className="fontjoin"
                  >
                    <button className="button text-bt-2">
                      Register for Light Vocals
                    </button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                border="light"
                style={{ background: "none", borderRadius: "25px" }}
              >
                <Card.Body>
                  <Card.Title>
                    <div className="maincontent3t">Western Vocals</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="maincontent3">
                      <font>For queries, Contact: </font>
                    </div>
                    <div className="maincontent3">
                      <font>Gaurav Vishnu +91 96773 96783</font>
                    </div>
                    <div className="maincontent3">
                      <font>Kadeeja Farha +91 77364 72231</font>
                    </div>
                  </Card.Text>
                  <a
                    href="https://forms.gle/fFgquev5dB3DvyP78"
                    target="__blank"
                    className="fontjoin"
                  >
                    <button className="button text-bt-2">
                      Register for Western Vocals
                    </button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="bgslider4">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card
                border="light"
                style={{ background: "none", borderRadius: "25px" }}
              >
                <Card.Body>
                  <Card.Title>
                    <div className="maincontent3t">Rap</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="maincontent3">
                      <font>For queries, Contact: </font>
                    </div>
                    <div className="maincontent3">
                      <font>Gaurav +91-9677396783</font>
                    </div>
                  </Card.Text>
                  <a
                    href="https://forms.gle/csCWDLS3fyXpYxDV7"
                    target="__blank"
                    className="fontjoin"
                  >
                    <button className="button text-bt-2">
                      Register for Rap
                    </button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                border="light"
                style={{ background: "none", borderRadius: "25px" }}
              >
                <Card.Body>
                  <Card.Title>
                    <div className="maincontent3t">Flute</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="maincontent3">
                      <font>For queries, Contact: </font>
                    </div>
                    <div className="maincontent3">
                      <font>Shiva +91-9487333689</font>
                    </div>
                  </Card.Text>
                  <a
                    href="https://forms.gle/oDsk3T13DW1f1D879"
                    target="__blank"
                    className="fontjoin"
                  >
                    <button className="button text-bt-2">
                      Register for Flute
                    </button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="bgslider4">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card
                border="light"
                style={{ background: "none", borderRadius: "25px" }}
              >
                <Card.Body>
                  <Card.Title>
                    <div className="maincontent3t">Keyboard</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="maincontent3">
                      <font>For queries, Contact: </font>
                    </div>
                    <div className="maincontent3">
                      <font>Saran +91-7010581741</font>
                    </div>
                    <div className="maincontent3">
                      <font>Vijeyasri +91 99943 05501</font>
                    </div>
                  </Card.Text>
                  <a
                    href="https://forms.gle/M3WmPVhujDtdWeYVA"
                    target="__blank"
                    className="fontjoin"
                  >
                    <button className="button text-bt-2">
                      Register for Keyboard
                    </button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                border="light"
                style={{ background: "none", borderRadius: "25px" }}
              >
                <Card.Body>
                  <Card.Title>
                    <div className="maincontent3t">Guitar</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="maincontent3">
                      <font>For queries, Contact: </font>
                    </div>
                    <div className="maincontent3">
                      <font>Amruth +91-9488200354</font>
                    </div>
                    <div className="maincontent3">
                      <font>Odayappan +91 73970 47703</font>
                    </div>
                  </Card.Text>
                  <a
                    href="https://forms.gle/QMtK9SmtXAQxd4Yu8"
                    target="__blank"
                    className="fontjoin"
                  >
                    <button className="button text-bt-2">
                      Register for Guitar
                    </button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="bgslider4">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card
                border="light"
                style={{ background: "none", borderRadius: "25px" }}
              >
                <Card.Body>
                  <Card.Title>
                    <div className="maincontent3t">Violin</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="maincontent3">
                      <font>For queries, Contact: </font>
                    </div>
                    <div className="maincontent3">
                      <font>Vishal +91-6360530676</font>
                    </div>
                  </Card.Text>
                  <a
                    href="https://forms.gle/z95pBB62kBJYun678"
                    target="__blank"
                    className="fontjoin"
                  >
                    <button className="button text-bt-2">
                      Register for Violin
                    </button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                border="light"
                style={{ background: "none", borderRadius: "25px" }}
              >
                <Card.Body>
                  <Card.Title>
                    <div className="maincontent3t">Drums</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="maincontent3">
                      <font>For queries, Contact: </font>
                    </div>
                    <div className="maincontent3">
                      <font>Vijhay +91-6379276849</font>
                    </div>
                    <div className="maincontent3">
                      <font>Harshavarthan +91 70101 91648</font>
                    </div>
                  </Card.Text>
                  <a
                    href="https://forms.gle/cTQhCd4mwUZfw98p8"
                    target="__blank"
                    className="fontjoin"
                  >
                    <button className="button text-bt-2">
                      Register for Drums
                    </button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="bgslider4">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card
                border="light"
                style={{ background: "none", borderRadius: "25px" }}
              >
                <Card.Body>
                  <Card.Title>
                    <div className="maincontent3t">Beatboxing</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="maincontent3">
                      <font>For queries, Contact: </font>
                    </div>
                    <div className="maincontent3">
                      <font>Shiva +91-9487333689</font>
                    </div>
                  </Card.Text>
                  <a
                    href="https://forms.gle/pu9CWVEdwX9zBNrA9"
                    target="__blank"
                    className="fontjoin"
                  >
                    <button className="button text-bt-2">
                      Register for Beatboxing
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
            <Link to="/Talenthunt/Media" className="fontjoin">
              <button className="button text-bt-2">Media Wing</button>
            </Link>
            <Link to="/Talenthunt/Mixing" className="fontjoin">
              <button className="button text-bt-2">Mixing Wing</button>
            </Link>
            <Link to="/Talenthunt/EventManagement" className="fontjoin">
              <button className="button text-bt-2">
                Event Management Wing
              </button>
            </Link>
            <Link to="/Talenthunt/otherInstruments" className="fontjoin">
              <button className="button text-bt-2">Other Instruments</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bgslider2" style={{ marginTop: "1rem" }}>
        <div className="maincontent3t">
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

export default Lightwestern;
