import { Col, Container, Row } from "react-bootstrap";

import "./module.Welcome.css";
function Welcome() {
  return (
    <div className="welcome">
      <Container fluid>
        <Row className="gx-5">
          <Col xs={12} lg="6" md="6">
            <h4>Welcome to Solar Power Save Energy</h4>
            <h1 className="text-capitalize">
              Taking the effort out of business energy
            </h1>
          </Col>
          <Col xs={12} lg="6" md="6">
            <p>
              leading renewable energy solutions provider that is
              revolutionising and redefining the way sustainable energy sources
              are harnessed across the world. Present in 18 countries across
              Asia, Australia, Europe Africa and the Americas, Veztaz is
              powering.
            </p>
            <div>
              <img
                src="src/assets/sign/alines-jannie-sign.png"
                alt="alines-jannie-sign"
              />
              <h3>Alines Jannie</h3>
              <p className="designation">Director of Renewable Group</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Welcome;
