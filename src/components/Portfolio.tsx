import {
  Alert,
  Badge,
  Card,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";
import arcadePitScheduler from "../assets/arcade-pit-scheduler.png";
import fgfmThumbnail from "../assets/fgfm.png";
import helpaThumbnail from "../assets/helpa.png";
import v2wThumbnail from "../assets/v2w.png";

function Portfolio({ id }: { id: string }) {
  const portfolio = [
    {
      title: "Arcade Pit Scheduler",
      url: "https://schedule.arcadep.it",
      imageUrl: arcadePitScheduler,
      tags: ["React", "Koa", "MongoDB", "Twitch OAuth"],
      description: (
        <p>
          A web app that allows contestants to log in via Twitch and apply to be
          a guest on the virtual game show <em>ArcadePit</em>,{" "}
          <a
            href="https://twitch.tv/smight"
            target="_blank"
            rel="noopener noreferrer"
          >
            broadcast weekly on Twitch
          </a>
          . Also provides an admin panel to manage selections and scheduling.
        </p>
      ),
    },
    {
      title: "ForeverGrind.fm",
      url: "https://forevergrind.fm",
      imageUrl: fgfmThumbnail,
      tags: [
        "React",
        "Redux",
        "Koa",
        "Socket.io",
        "OBS Studio",
        "Twitch OAuth",
      ],
      description: (
        <p>
          An automated, continuous stream of video content and music, streaming
          to Twitch via OBS Studio and controlled by a custom bot using Node.js.
          Also provides chat and web interfaces for users to browse+request
          videos on-demand and an admin panel for easy remote management.
        </p>
      ),
    },
    {
      title: "HelpasaurKing",
      url: "https://helpasaur.com",
      imageUrl: helpaThumbnail,
      tags: [
        "Docker",
        "React",
        "GitHub Actions",
        "Discord.js",
        "IRC",
        "MongoDB",
      ],
      description: (
        <p>
          Used by the <em>The Legend of Zelda: A Link to the Past</em>{" "}
          speedrunning community, this Discord+Twitch bot provides a repository
          of helpful links, alerts for when ALttP streams go live, and
          automation to assist with various tasks like creating race rooms.
          Includes a web-based admin panel to manage commands and configuration.
        </p>
      ),
      links: {
        href: "https://github.com/greenham/helpasaur-king",
        label: "View on GitHub",
      },
    },
    {
      title: "v2w.app",
      url: "https://v2w.app",
      imageUrl: v2wThumbnail,
      tags: ["React", "TypeScript", "Vite", "GitHub Pages"],
      description: (
        <p>
          A free web app for chefs and home cooks alike that supports converting
          imprecise volumetric measurements of ingredients to weight. By
          providing a simple interface for inputting several ingredients and
          volumes to convert to weight, the goal of this app is to make the
          transition to cooking-by-weight easy and accessible to everyone.
        </p>
      ),
      links: {
        href: "https://github.com/greenham/v2w.app",
        label: "View on GitHub",
      },
    },
  ];

  return (
    <Container id={id} className="my-5">
      <h1 className="display-1">
        <i className="fa-solid fa-swatchbook px-2"></i>Portfolio
      </h1>
      <Alert variant="info">
        <i className="fa-solid fa-pencil px-2"></i>
        <strong>Note</strong> - This list is not comprehensive. I can't share
        every project I've worked on for NDA and privacy reasons, but the
        following are a few that I'm particularly proud of.
      </Alert>
      <Row xs={1} md={2} lg={2} className="g-4">
        {portfolio.map((item, itemIndex) => {
          return (
            <Col key={itemIndex}>
              <Card className="rounded h-100">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Card.Img
                    variant="top"
                    src={item.imageUrl}
                    className="img-fluid"
                  />
                </a>
                <Card.Body className="flex-grow-1 py-5">
                  <Card.Title>
                    <Card.Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h4>{item.title}</h4>
                    </Card.Link>
                  </Card.Title>
                  <Card.Text as="div">
                    <div className="lead">{item.description}</div>
                  </Card.Text>
                  {item.links && (
                    <Card.Link
                      href={item.links.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.links.label}
                    </Card.Link>
                  )}
                </Card.Body>
                <Card.Footer>
                  <Stack
                    direction="horizontal"
                    gap={1}
                    className="font-monospace flex-wrap"
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
