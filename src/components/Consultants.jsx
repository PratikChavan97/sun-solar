import { Col, Container, Row } from "react-bootstrap";
import "./module.Consultants.css";

function Consultants() {
  return (
    <Container fluid>
      <div className="consultants">
        <div>
          <h4>process and the solutions we can provide</h4>
          <h2>what you can expect from our sustainability consultants</h2>
        </div>
        <Row>
          <Col xs={12} lg="4" md="6">
            <div className="consultation-card">
              <div className="consulation-header">
                <h3>Book a free consultation</h3>
                <p className="consultation-number">1</p>
              </div>
              <p>
                Our mission is to provide clear, high quality and affordable
                ecological advice and services to public.
              </p>
            </div>
          </Col>
          <Col xs={12} lg="4" md="6">
            <div className="consultation-card">
              <div className="consulation-header">
                <h3>Estimate the Calculation</h3>
                <p className="consultation-number">2</p>
              </div>
              <p>
                Our mission is to provide clear, high quality and affordable
                ecological advice and services to public.
              </p>
            </div>
          </Col>
          <Col xs={12} lg="4" md="6">
            <div className="consultation-card">
              <div className="consulation-header">
                <h3>Hire us for Your Projects</h3>
                <p className="consultation-number">3</p>
              </div>
              <p>
                Our mission is to provide clear, high quality and affordable
                ecological advice and services to public.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Consultants;
