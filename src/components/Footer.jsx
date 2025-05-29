import { Container, Row, Col, Form } from "react-bootstrap";
import ButtonComponents from "./ButtonComponents";

import "./module.Footer.css";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#2C2B5B", color: "#fff" }}>
      <Container fluid>
        <Row>
          <Col xs={12} lg="4" md="6" sm="12">
            This is footer
          </Col>
          <Col xs={12} lg="4" md="6" sm="12">
            <Container fluid>
              <Row>
                <Col xs={12}>
                  <h3 className="h3">About Energix</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Solar energy’s exceptional synergies with energy storage,
                    electric vehicles and smart grids means the industry works
                    on the frontline of technology and system change to deliver.
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12} lg="4" md="12" sm="12">
            <Row>
              <Col xs={12}>
                <h3 className="h3">Subscribe to our newsletter</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div>
                  <Row>
                    <Col xs={12}>
                      <p>Subscribe email and get recent news and updates</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                          <ButtonComponents styling="primary">
                            Send
                          </ButtonComponents>
                          <Form.Text className="text-primary">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <div className="copyright">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <p>&copy; Copyright Energix 2022. All Right Reserved.</p>
            </div>
            <div className="footer-links col-lg-5 col-md-5 col-sm-12 col-12">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">About Us</a>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
