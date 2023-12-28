import { Container } from "react-bootstrap";

function Contact({ id }: { id: string }) {
  return (
    <Container id={id}>
      <h1>Contact</h1>
    </Container>
  );
}

export default Contact;
