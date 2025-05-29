import { Card, Container, Row, Col, CardBody } from "react-bootstrap";

import "./module.News.css";

function News() {
  return (
    <div className="news">
      <div className="news-head">
        <h4>Blogs & Updates</h4>
        <h2>Recent News</h2>
      </div>
      <Container fluid>
        <Row>
          <Col xs={12} lg="4" md="4">
            <Card>
              <Card.Img
                variant="top"
                src="src/assets/news/blog-1.jpg"
                rounded
              />
              <Card.ImgOverlay>
                <div className="card-date">
                  <span>December 12, 2024</span>
                </div>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Text>
                  <div>
                    <p className="text-decoration-underline">Design Process</p>
                  </div>
                </Card.Text>
                <Card.Title>Solar Energy's Exceptional Synergies</Card.Title>
                <Card.Text>
                  <div className="card-foot">
                    <div>
                      <img src="src/assets/news/admin.jpg" alt="user" />
                      <p>By Thomas Walker</p>
                    </div>
                    <div>
                      <span>Logo</span>
                      <p>14 Comments</p>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg="4" md="4">
            <Card>
              <Card.Img
                variant="top"
                src="src/assets/news/blog-1.jpg"
                rounded
              />
              <Card.ImgOverlay>
                <div className="card-date">
                  <span>December 12, 2024</span>
                </div>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Text>
                  <div>
                    <p className="text-decoration-underline">Design Process</p>
                  </div>
                </Card.Text>
                <Card.Title>Solar Energy's Exceptional Synergies</Card.Title>
                <Card.Text>
                  <div className="card-foot">
                    <div>
                      <img src="src/assets/news/admin.jpg" alt="user" />
                      <p>By Thomas Walker</p>
                    </div>
                    <div>
                      <span>Logo</span>
                      <p>14 Comments</p>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg="4" md="4">
            <Card>
              <Card.Img
                variant="top"
                src="src/assets/news/blog-1.jpg"
                rounded
              />
              <Card.ImgOverlay>
                <div className="card-date">
                  <span>December 12, 2024</span>
                </div>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Text>
                  <div>
                    <p className="text-decoration-underline">Design Process</p>
                  </div>
                </Card.Text>
                <Card.Title>Solar Energy's Exceptional Synergies</Card.Title>
                <Card.Text>
                  <div className="card-foot">
                    <div>
                      <img src="src/assets/news/admin.jpg" alt="user" />
                      <p>By Thomas Walker</p>
                    </div>
                    <div>
                      <span>Logo</span>
                      <p>14 Comments</p>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default News;
