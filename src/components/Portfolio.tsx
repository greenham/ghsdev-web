import { Badge, Card, Col, Container, Row, Stack } from "react-bootstrap";
import arcadePitScheduler from "../assets/arcade-pit-scheduler.png";
import fgfmThumbnail from "../assets/fgfm.png";
import helpaThumbnail from "../assets/helpa.png";

function Portfolio({ id }: { id: string }) {
  const portfolio = [
    {
      title: "Arcade Pit Scheduler",
      url: "https://schedule.arcadep.it",
      imageUrl: arcadePitScheduler,
      tags: ["React", "Koa", "MongoDB", "Twitch API"],
      description: (
        <>
          A web app that allows contestants to apply to the virtual game show{" "}
          <em>ArcadePit</em>,{" "}
          <a
            href="https://twitch.tv/smight"
            target="_blank"
            rel="noopener noreferrer"
          >
            broadcast weekly on Twitch
          </a>
          , and provides an admin panel to manage selections and scheduling.
        </>
      ),
    },
    {
      title: "ForeverGrind.fm",
      url: "https://forevergrind.fm",
      imageUrl: fgfmThumbnail,
      tags: ["React", "Redux", "Koa", "Socket.io", "OBS Studio"],
      description: (
        <>
          An automated, continuous stream of video content and music, streaming
          to Twitch via OBS Studio and controlled by a custom bot using Node.js.
          Also provides a web interface for users to browse+request videos
          on-demand and an admin panel for easy remote management.
        </>
      ),
    },
    {
      title: "HelpasaurKing",
      url: "https://helpasaur.com",
      imageUrl: helpaThumbnail,
      tags: ["Docker", "Discord.js", "React", "MongoDB", "IRC"],
      description: (
        <>
          Used by the <em>The Legend of Zelda: A Link to the Past</em>
          speedrunning community, this Discord+Twitch bot provides a repository
          of helpful links, alerts for when ALttP streams go live, and
          automation to assist with various tasks like creating race rooms.
          Includes a web-based admin panel to manage commands and configuration.
        </>
      ),
    },
    {
      title: "volum.io",
      url: "https://v2w.app",
      imageUrl: "https://v2w.app/screenshot.png",
      tags: ["React", "TypeScript", "Vite", "GitHub Pages"],
      description: (
        <>
          A free web application for chefs and home cooks alike that supports
          converting imprecise volumetric measurements of ingredients to weight.
          By providing a simple interface for inputting several ingredients and
          volumes to convert to weight, the goal of this app is to make the
          transition to cooking-by-weight easy and accessible to everyone.
        </>
      ),
    },
  ];

  return (
    <Container id={id} className="my-5">
      <h1 className="display-1">Portfolio</h1>
      <Row xs={1} md={2} lg={2} className="row-gap-5 col-gap-4">
        {portfolio.map((item, itemIndex) => {
          return (
            <Col key={itemIndex}>
              <Card className="rounded h-100">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Card.Img
                    variant="top"
                    src={item.imageUrl}
                    width="400"
                    height="300"
                  />
                </a>
                <Card.Body className="flex-grow-1">
                  <Card.Title>
                    <Card.Link href={item.url}>
                      <h4>{item.title}</h4>
                    </Card.Link>
                  </Card.Title>
                  <Card.Text>
                    <p className="lead">{item.description}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Stack
                    direction="horizontal"
                    gap={1}
                    className="font-monospace"
                  >
                    {item.tags.map((t, i) => (
                      <Badge bg="dark" key={i}>
                        {t}
                      </Badge>
                    ))}
                  </Stack>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Portfolio;
