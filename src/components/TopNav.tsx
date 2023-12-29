import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import logo from "../assets/logo.png";

function TopNav() {
  return (
    <Navbar expand="lg" className="bg-success" sticky="top">
      <Container>
        <Navbar.Brand href="#top">
          <Stack direction="horizontal" gap={2}>
            <img
              alt=""
              src={logo}
              width="48"
              height="48"
              className="d-inline-block align-top"
            />
            <Stack direction="vertical" gap={0}>
              <h4 className="mb-0 fw-bold">greenHam</h4>
              <small className="fs-6 text-muted">Senior Web Developer</small>
            </Stack>
          </Stack>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-nav" />
        <Navbar.Collapse id="top-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">
              <i className="fa-solid fa-user-tie px-2"></i>About Me
            </Nav.Link>
            <Nav.Link href="#portfolio">
              <i className="fa-solid fa-timeline px-2"></i>Portfolio
            </Nav.Link>
            <Nav.Link href="#skills">
              <i className="fa-regular fa-rectangle-list px-2"></i>Skills
            </Nav.Link>
            <Nav.Link href="#connect">
              <i className="fa-regular fa-handshake px-2"></i>Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar className="justify-content-end">
          <Nav.Link
            href="https://github.com/greenham"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github px-2"></i>GitHub
          </Nav.Link>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default TopNav;
