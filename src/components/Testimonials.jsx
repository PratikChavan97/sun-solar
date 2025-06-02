import { Container, Row, Col } from "react-bootstrap";
import "./module.Testimonials.css";

function Testimonials() {
  return (
    <Container fluid>
      <div className="testimonials">
        <Row>
          <Col xs={12} lg="6" md="6">
            <img src="src/assets/clients/union.jpg" alt="client-1" />
          </Col>
          <Col xs={12} lg="6" md="6">
            <div>
              <h3>Testimonials</h3>
              <h2>Client's Reviews</h2>
              <p className="review">
                Cut down on all your work by collaborating with our Launch Pad
                team to get the framework of your online business up running in
                no time.
              </p>
              <div className="client">
                <div>
                  <i class="fa-solid fa-comments"></i>
                </div>
                <div>
                  <p className="name">Thomas Walker</p>
                  <p className="designation">sustainable energy owner</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Testimonials;
