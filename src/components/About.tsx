import { Button, Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";

function About({ id }: { id: string }) {
  return (
    <Container id={id} className="my-5">
      <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <Col lg={7} className="p-3 p-lg-5 pt-lg-3">
          <h2>👋 Hello!</h2>
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            I am a multi-stack web developer with over 20 years of experience
          </h1>
          <hr />
          <p className="lead">
            I design and implement elegant software solutions for unique
            applications across the web.
            <br />
            <br />I ran my own web development and consulting business{" "}
            <strong>for over a decade</strong> and have worked with and for a
            wide variety of companies from mortgage lead generation to EV
            manufacturing.
            <br />
            <br />
            My experience has taught me the value of smart, organized work,
            given me invaluable insight into the industry, and instilled a great
            sense of pride in what I do.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <Button
              variant="success"
              size="lg"
              className="me-md-2 fw-bold"
              href="#portfolio"
            >
              <i className="fa-solid fa-timeline px-2"></i>See my work
            </Button>
            <Button
              variant="outline-secondary"
              size="lg"
              className="px-4"
              href="#contact"
            >
              <i className="fa-regular fa-comments px-2"></i>Contact me
            </Button>
          </div>
        </Col>
        <Col lg={4} className="offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src={logo} alt="" width="500" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
