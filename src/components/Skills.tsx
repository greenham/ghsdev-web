import { Alert, Col, Container, ListGroup, Row } from "react-bootstrap";

function Skills({ id }: { id: string }) {
  const skills = [
    {
      title: "Languages",
      icon: "fa-solid fa-language",
      items: ["(Java|Type)Script", "Python", "C#", "PHP"],
    },
    {
      title: "Frontend",
      icon: "fa-solid fa-gamepad",
      items: ["React(+Native)", "Vue.js", "Expo", "Tailwind", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: "fa-solid fa-server",
      items: ["ASP.NET", "NestJS", "Express.js", "Koa", "Laravel"],
    },
    {
      title: "Data",
      icon: "fa-solid fa-database",
      items: ["(My/MS/Postgre)SQL", "MongoDB", "Neo4j", "Redis", "RabbitMQ"],
    },
    {
      title: "CI/CD",
      icon: "fa-solid fa-truck-fast",
      items: [
        "Docker",
        "GitHub+Actions",
        "BitBucket+Pipelines",
        "Jest",
        "Cypress",
        "Playwright",
        "Selenium",
        "Jenkins"
      ],
    },
    {
      title: "AWS",
      icon: "fa-brands fa-aws",
      items: [
        "CDK",
        "Lambda",
        "ECS",
        "Fargate",
        "EC2",
        "RDS",
        "SQS",
        "S3",
        "CloudWatch",
        "Amplify",
        "CloudFront",
        "Lightsail",
      ],
    },
    {
      title: "Tools",
      icon: "fa-solid fa-toolbox",
      items: ["Jira", "Confluence", "Google Suite", "Figma", "Mermaid"],
    },
    {
      title: "Other",
      icon: "",
      items: ["Wordpress", "Google Analytics", "Odoo", "HubSpot"],
    },
  ];

  return (
    <Container id={id} className="my-5">
      <h1 className="display-1">
        <i className="fa-regular fa-rectangle-list px-2"></i>Skills
      </h1>
      <Alert variant="info">
        <i className="fa-solid fa-pencil px-2"></i>
        <strong>Note</strong> - My best skills are{" "}
        <strong>adaptability and resourcefulness</strong>. With my strong
        foundation and broad experience, I have the ability to pick up and learn
        new technologies quickly.
      </Alert>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 pb-5">
        {skills.map((skill, skillIndex) => {
          return (
            <Col key={skillIndex}>
              <div>
                <h3 className="fw-bold mb-2 fs-4 text-body-emphasis">
                  <i className={`fa-solid ${skill.icon} px-2`}></i>
                  {skill.title}
                </h3>
                <ListGroup>
                  {skill.items.map((item, itemIndex) => {
                    return (
                      <ListGroup.Item key={itemIndex}>
                        <i className="fa-regular fa-square-check px-2"></i>
                        {item}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Skills;
