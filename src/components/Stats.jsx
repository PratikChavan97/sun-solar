import { Container, Row, Col } from "react-bootstrap";

import "./module.Stats.css";

function Stats() {
  return (
    <div className="stats">
      <Container fluid>
        <Row>
          <Col xs={12} lg="4" md="6">
            <div>
              <h3 className="h1">10,000,000+</h3>
              <p>Instances of fault activity captured on LV networks</p>
            </div>
          </Col>
          <Col xs={12} lg="4" md="6">
            <div>
              <h3 className="h1">3,500,000</h3>
              <p>Train pantographs inspected annually</p>
            </div>
          </Col>
          <Col xs={12} lg="4" md="12">
            <div>
              <h3 className="h1">20,000,000 +</h3>
              <p>Hours of LV circuit load profile data captured and analysed</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Stats;
