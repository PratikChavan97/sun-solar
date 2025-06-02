import { Col, Container, Row } from "react-bootstrap";
import "./module.Pricing.css";

function Pricing() {
  return (
    <div className="pricing">
      <Container fluid>
        <div className="pricing-intro">
          <h4>Pricing Plans</h4>
          <h2>Effective & Flexible Pricing</h2>
        </div>
        <Row>
          <Col xs={12} lg="4" md="6">
            <div className="pricing-outline"></div>
            <div className="pricing-card">
              <img
                src="src/assets/pricing/pricing-plans-1.png"
                alt="pricing-1"
              />
              <div>
                <h4>Solar Energy</h4>
                <p>
                  <span className="currency">$</span>{" "}
                  <span className="price">90</span>{" "}
                  <span className="duration">/Month</span>
                </p>
                <p>The perfect plan for your business</p>
              </div>
              <div>
                <ul>
                  <li>Built using n-type mono</li>
                  <li>Crystalline cell materials</li>
                  <li>Reliability and performance</li>
                </ul>
              </div>
              <button>Purchase Now</button>
            </div>
          </Col>
          <Col xs={12} lg="4" md="6">
            <div className="pricing-outline"></div>
            <div className="pricing-card">
              <img
                src="src/assets/pricing/pricing-plans-1.png"
                alt="pricing-1"
              />
              <div>
                <h4>Solar Energy</h4>
                <p>
                  <span className="currency">$</span>{" "}
                  <span className="price">90</span>{" "}
                  <span className="duration">/Month</span>
                </p>
                <p>The perfect plan for your business</p>
              </div>
              <div>
                <ul>
                  <li>Built using n-type mono</li>
                  <li>Crystalline cell materials</li>
                  <li>Reliability and performance</li>
                </ul>
              </div>
              <button>Purchase Now</button>
            </div>
          </Col>
          <Col xs={12} lg="4" md="6">
            <div className="pricing-outline"></div>
            <div className="pricing-card">
              <img
                src="src/assets/pricing/pricing-plans-1.png"
                alt="pricing-1"
              />
              <div>
                <h4>Solar Energy</h4>
                <p>
                  <span className="currency">$</span>{" "}
                  <span className="price">90</span>{" "}
                  <span className="duration">/Month</span>
                </p>
                <p>The perfect plan for your business</p>
              </div>
              <div>
                <ul>
                  <li>Built using n-type mono</li>
                  <li>Crystalline cell materials</li>
                  <li>Reliability and performance</li>
                </ul>
              </div>
              <button>Purchase Now</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Pricing;
