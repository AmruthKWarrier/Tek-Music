import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbarc from "./Component/Navbarc.js";
import BackgroundSlider from "./Component/BackgroundSlider";
import "./index.css";
import image1 from "./Assets/Images/slider7.jpg";

function Media() {
  return (
    <div className="talent">
      <Navbarc />
      <BackgroundSlider images={[image1]} duration={3600} blur={9} />
      <div style={{ display: "block" }}>
        <div className="bgslider2">
          <div className="justify-content-md-center maincontent2">
            <font style={{ color: "gold" }}>Media Wing</font>
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
                Send us your portfolios! Your portfolio must include a brief
                summary of your past work and a concise list of skills you think
                you are adept at, with reference to building a social media
                presence for us.
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
                Check out all the sub-verticals within this vertical and make
                sure you contribute appropriately to this wing!
              </li>
            </font>
          </div>
          <div className="maincontent3">
            <font>
              <li>
                If you wish to share more files, upload them to a google drive
                and share the drive with editor access to whoever has the link.
                The drive will not be shared outside the club.
              </li>
            </font>
          </div>
          <div className="maincontent3">
            <font>
              <li>
                Paste the link in a google doc and upload that document as a PDF
                or a document, so that we can redirect ourselves to your drive
                from that document.
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
                    <div className="maincontent3t">
                      Social Media and Content Creations
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <div
                      className="maincontent3t"
                      style={{
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                      }}
                    >
                      <font>Design</font>
                    </div>
                    <div className="maincontent3">
                      <font>Maanasa +91-9176918295</font>
                    </div>
                    <div className="maincontent3">
                      <font>Akshaya Mahesh +91 90423 01353</font>
                    </div>
                    <div className="maincontent3">
                      <font>Visalakshi +91 89038 10098</font>
                    </div>
                    <div
                      className="maincontent3t"
                      style={{
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                      }}
                    >
                      <font>Photography</font>
                    </div>
                    <div className="maincontent3">
                      <font>Mukul Prakash +91 86182 35136</font>
                    </div>
                  </Card.Text>
                  <a
                    href="https://forms.gle/SeRvBY6cH1CumEZFA"
                    target="__blank"
                    className="fontjoin"
                  >
                    <button className="button text-bt-2">
                      Register for Media
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

export default Media;
