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
      description:
        "A web app that allows contestants to apply to the virtual game show “ArcadePit”, broadcast weekly on Twitch, and provides an admin panel to manage selections and scheduling.",
      meta: [
        {
          icon: "fa-solid fa-calendar-day",
          value: <>2020</>,
        },
        {
          icon: "fa-brands fa-square-github",
          value: <></>,
        },
      ],
    },
    {
      title: "ForeverGrind.fm",
      url: "https://forevergrind.fm",
      imageUrl: fgfmThumbnail,
      tags: ["React", "Redux", "Koa", "Socket.io", "OBS Studio"],
      description:
        "An automated, continuous stream of video content and music, streaming to Twitch via OBS Studio (Open Broadcaster Software) and controlled by a custom bot using Node.js. Supports on-demand video requests, queuing, and automated start/stop controls through a variety of microservices. Also provides a web interface for users to browse+request videos and an admin panel for easy remote management.",
    },
    {
      title: "HelpasaurKing",
      url: "https://helpasaur.com",
      imageUrl: helpaThumbnail,
      tags: ["Docker", "Discord.js", "React", "MongoDB", "IRC"],
      description:
        "Intended for use by the The Legend of Zelda: A Link to the Past speedrunning community, this Discord+Twitch bot provides a repository of helpful links, alerts for when ALttP streams go live, and automation to assist with various tasks like creating race rooms. Includes a web-based admin panel to manage commands and configuration.",
    },
    {
      title: "volum.io",
      url: "https://v2w.app",
      imageUrl: "https://v2w.app/screenshot.png",
      tags: ["React", "TypeScript", "Vite", "GitHub Pages"],
      description:
        "A free web application for chefs and home cooks alike that supports converting imprecise volumetric measurements of ingredients to weight. The pint’s a pound the world around, but this only applies to 1 US fluid pint of water. By providing a simple interface for inputting several ingredients and volumes to convert to weight, the goal of this app is to make the transition to cooking-by-weight easy and accessible to everyone.",
    },
  ];

  return (
    <Container id={id} className="my-5">
      <h1 className="display-1">Portfolio</h1>
      <Row xs={1} md={2} lg={3} className="row-gap-5 col-gap-4">
        {portfolio.map((item, itemIndex) => {
          return (
            <Col key={itemIndex}>
              <Card className="rounded h-100">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src={item.imageUrl} />
                </a>
                <Card.Body className="flex-grow-1">
                  <Card.Title>
                    <h4>{item.title}</h4>
                    <p className="lead">{item.description}</p>
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Stack gap={1} className="font-monospace">
                    {item.meta?.map((m, mIndex) => (
                      <small key={mIndex}>
                        <i className={m.icon}></i> {m.value}
                      </small>
                    ))}
                    {/* <small>
                      <i className="fa-brand fa-github"></i> 0 viewers
                    </small>
                    <small>
                      <i className="fa-solid fa-stopwatch"></i> Started{" "}
                      <em>2023-12-20</em>
                    </small> */}
                    <Stack direction="horizontal" gap={1}>
                      {item.tags.map((t, i) => (
                        <Badge key={i}>{t}</Badge>
                      ))}
                    </Stack>
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
