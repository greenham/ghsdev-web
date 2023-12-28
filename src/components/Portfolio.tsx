import { Container } from "react-bootstrap";

function Portfolio({ id }: { id: string }) {
  return (
    <Container id={id}>
      <h1>Portfolio</h1>
    </Container>
  );
}

export default Portfolio;
