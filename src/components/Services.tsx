import { Container } from "react-bootstrap";

function Services({ id }: { id: string }) {
  return (
    <Container id={id} className="my-5">
      <h1 className="display-1">Services</h1>
    </Container>
  );
}

export default Services;
