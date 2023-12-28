import { Container } from "react-bootstrap";

function Services({ id }: { id: string }) {
  return (
    <Container id={id}>
      <h1>Services</h1>
    </Container>
  );
}

export default Services;
