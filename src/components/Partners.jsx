import { Container } from "react-bootstrap";
import "./module.Partners.css";

function Partners() {
  return (
    <div className="sponsers">
      <div className="partners">
        <Container fluid className="text-center">
          <h3
            style={{
              textDecoration: "underline",
            }}
          >
            Partners and Sponsers
          </h3>

          <div className="partners-gallery">
            <img src="src/assets/partners/sponsor-1.jpg" alt="sponsor-1" />
            <img src="src/assets/partners/sponsor-2.jpg" alt="sponsor-2" />
            <img src="src/assets/partners/sponsor-3.jpg" alt="sponsor-3" />
            <img src="src/assets/partners/sponsor-4.jpg" alt="sponsor-4" />
            <img src="src/assets/partners/sponsor-5.jpg" alt="sponsor-5" />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Partners;
