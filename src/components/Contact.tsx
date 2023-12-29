import { Container } from "react-bootstrap";

function Contact({ id }: { id: string }) {
  return (
    <Container id={id} className="my-5">
      <h1 className="display-1">Contact</h1>
    </Container>
  );
}

export default Contact;
