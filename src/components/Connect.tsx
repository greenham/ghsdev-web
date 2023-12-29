import { Button, Container, Stack } from "react-bootstrap";

function Connect({ id }: { id: string }) {
  return (
    <Container id={id} className="my-5">
      <h1 className="display-1">Connect</h1>
      <div className="p-5 bg-body-tertiary rounded-3">
        <Stack direction="horizontal" gap={3}>
          <Button
            href="https://lnkd.in/svu8Eg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin fa-border fa-4x"></i>
          </Button>
          <Button
            href="https://github.com/greenham"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github fa-border fa-4x"></i>
          </Button>
          <Button href="mailto:connect@ghsdev.me">
            <i className="fa fa-envelope fa-border fa-4x"></i>
          </Button>
        </Stack>
      </div>
    </Container>
  );
}

export default Connect;
