import { Alert, Button, Container, Stack } from "react-bootstrap";

function Connect({ id }: { id: string }) {
  return (
    <Container id={id} className="my-5">
      <h1 className="display-1">
        <i className="fa-regular fa-handshake px-2"></i>Connect
      </h1>
      <Alert variant="info">
        <i className="fa-solid fa-pencil px-2"></i>
        <strong>Note</strong> - I'm always open to discussing new opportunities
        and projects. Feel free to reach out to me on LinkedIn, GitHub, or via
        email.
      </Alert>
      <div className="p-5 bg-body-tertiary rounded-3">
        <Stack direction="horizontal" gap={3}>
          <Button
            href="https://lnkd.in/svu8Eg"
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
            className="p-4"
          >
            <i className="fa fa-linkedin fa-border fa-4x"></i>
          </Button>
          <Button
            href="https://github.com/greenham"
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
            className="p-4"
          >
            <i className="fa fa-github fa-border fa-4x"></i>
          </Button>
          <Button
            href="mailto:connect@ghsdev.me"
            variant="dark"
            className="p-4"
          >
            <i className="fa fa-envelope fa-border fa-4x"></i>
          </Button>
        </Stack>
      </div>
    </Container>
  );
}

export default Connect;
