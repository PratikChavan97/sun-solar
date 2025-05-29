import { Card, Col, Container, Image, Row } from "react-bootstrap";

function Gallery() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} lg="6" md="6">
            <Row>
              <Col>
                <Card>
                  <Card.Img
                    src="src/assets/gallery/battery-storage-1.jpg"
                    alt="battery-storage-1"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>Battery Storage</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Card.Img
                    src="src/assets/gallery/battery-storage-2.jpg"
                    alt="battery-storage-2"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>Inverter</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    src="src/assets/gallery/battery-storage-3.jpg"
                    alt="battery-storage-3"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>Wind Kinetic</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col>
            <Card>
              <Card.Img
                src="src/assets/gallery/battery-storage-4.jpg"
                alt="battery-storage-4"
              />
              <Card.ImgOverlay>
                {/* <Image src="src/assets/gallery/battery-storage-4-icon.jpg" /> */}
                <div>
                  <Card.Title>Renewable Energy</Card.Title>
                  <Card.Text></Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Gallery;
