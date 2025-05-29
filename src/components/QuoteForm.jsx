import { Col, Container, Row } from "react-bootstrap";

import "./module.QuoteForm.css";

function QuoteForm() {
  return (
    <div className="quote">
      <Container fluid>
        <div className="quote-container">
          <Row>
            <Col xs={12} lg="6" md="6">
              <div className="quote-intro">
                <h4>Request A Quote</h4>
                <h2>Talk About How We Can Help You Reduce Your Energy</h2>
                <p>
                  costs and successfully manage your carbon emissions with
                  investment free solar technologies.
                </p>
              </div>
            </Col>
            <Col xs={12} lg="6" md="6">
              <div className="quote-form">
                <form>
                  <input type="text" placeholder="Complete Name" />
                  <input type="email" placeholder="Email Addres" />
                  <input type="text" placeholder="Phone No." />
                  <textarea placeholder="Message" rows={4}></textarea>
                  <button>Send Message</button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default QuoteForm;
