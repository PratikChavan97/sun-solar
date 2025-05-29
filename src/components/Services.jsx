import { Card, Col, Container, Row } from "react-bootstrap";

import "./module.Services.css";

function Services() {
  return (
    <div className="services">
      <Container fluid>
        <Row className="gy-4">
          <Col xs={12} lg="6" md="6" sm="12">
            <div className="domestic installation">
              <h3>Domestic Installation</h3>
              <p>
                Solar PV, Battery Storage, Heat Recovery Ventilation Systems &
                EV Charging
              </p>
            </div>
          </Col>
          <Col xs={12} lg="6" md="6" sm="12">
            <div className="commercial installation">
              <h3>Commercial Installation</h3>
              <p>
                Solar PV, Battery Storage, Heat Recovery Ventilation Systems &
                EV Charging
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
