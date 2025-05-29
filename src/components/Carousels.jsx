import { Container, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function Carousels() {
  return (
    <div>
      <Container fluid>
        <Carousel>
          <Carousel.Item interval={1000}>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img
              src="src/assets/gallery/battery-storage-1.jpg"
              alt="battery-storage-1"
              style={{
                width: "100%",
              }}
            />
            <Carousel.Caption>
              <h3>Shapehero Img Renewable Energy Solutions Deliver</h3>
              <p>
                Practical renewable energy technology that reduces costs and
                helps the environment
              </p>
              <button>Request A Quote</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            {/* <ExampleCarouselImage text="Second slide" />
             */}
            <img
              src="src/assets/gallery/battery-storage-2.jpg"
              alt="battery-storage-2"
              style={{
                width: "100vw",
              }}
            />
            <Carousel.Caption>
              <h3>Energize Society Using Sustainable & Reliable</h3>
              <p>
                Practical renewable energy technology that reduces costs and
                helps the environment
              </p>
              <button>Request A Quote</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img
              src="src/assets/gallery/battery-storage-3.jpg"
              alt="battery-storage-3"
              style={{
                width: "100%",
              }}
            />
            <Carousel.Caption>
              <h3>TInstallation And Maintenance Of Solap Panels</h3>
              <p>
                Practical renewable energy technology that reduces costs and
                helps the environment
              </p>
              <button>Request A Quote</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Carousels;
