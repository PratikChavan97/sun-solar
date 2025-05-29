import { Container } from "react-bootstrap";
import "./module.Header.css";

function Header() {
  return (
    <header>
      <Container fluid>
        <div className="top-header">
          <div className="top-header-left">
            <div className="top-header-links">Facebook</div>
            <div className="top-header-links">Twitter</div>
            <div className="top-header-links">Instagram</div>
          </div>
          <div className="top-header-right">
            <div className="top-header-links">info@example.com</div>
            <div>12/7 new town, 245x street, United State</div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
