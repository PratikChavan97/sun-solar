import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import "./module.NavBar.css";

function NavBar() {
  return (
    <nav>
      <Container fluid>
        <Navbar expand="lg" className="bg-white">
          <Container fluid>
            <Navbar.Brand href="#">Energix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="me-auto">
                <NavDropdown title="Home" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Home 1</NavDropdown.Item>
                  <NavDropdown.Item href="#">Home 2</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">About</Nav.Link>

                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Our Projects</NavDropdown.Item>
                  <NavDropdown.Item href="#">Projects Details</NavDropdown.Item>
                  <NavDropdown.Item href="#">Team Details</NavDropdown.Item>
                  <NavDropdown.Item href="#">Pricing Plans</NavDropdown.Item>
                  <NavDropdown.Item href="#">404 Errors</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Services</Nav.Link>
                <NavDropdown title="News" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Our Blog</NavDropdown.Item>
                  <NavDropdown.Item href="#">Blog Details</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Contacts</Nav.Link>
              </Nav>

              <div className="collapse-contacts">
                <div>02134 525 407 - 012345 525 407</div>
                <div>username@domainname.com</div>
              </div>

              <Button size="lg">Request A Quote</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </nav>
  );
}

export default NavBar;
