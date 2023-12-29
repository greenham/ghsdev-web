import { Col, Container, ListGroup, Row } from "react-bootstrap";

function Skills({ id }: { id: string }) {
  const skills = [
    {
      title: "Languages",
      icon: "fa-solid fa-language",
      items: ["(Java|Type)Script", "Python", "C#", "PHP", "HTML+CSS"],
    },
    {
      title: "Frontend",
      icon: "fa-solid fa-gamepad",
      items: ["Vue.js", "React", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: "fa-solid fa-server",
      items: ["Express.js", ".NET", "Koa", "Laravel", "CodeIgniter"],
    },
    {
      title: "Data Storage",
      icon: "fa-solid fa-database",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Memcache"],
    },
    {
      title: "DevOps",
      icon: "fa-solid fa-truck-fast",
      items: [
        "Docker",
        "Git",
        "GitHub+Actions",
        "BitBucket",
        "Jest",
        "Cypress",
        "Selenium",
        "Jenkins",
        "Nagios",
      ],
    },
    {
      title: "AWS",
      icon: "fa-brands fa-aws",
      items: [
        "Amplify",
        "EC2",
        "S3",
        "Lightsail",
        "CloudFront",
        "CloudWatch",
        "Lambda",
        "CDK",
      ],
    },
    {
      title: "Software/Tools",
      icon: "fa-solid fa-toolbox",
      items: ["Jira", "Confluence", "Google Suite", "Figma"],
    },
    {
      title: "Other",
      icon: "",
      items: ["Wordpress", "Google Analytics (UA, GA4)", "Odoo", "HubSpot"],
    },
  ];

  return (
    <Container id={id} className="my-5">
      <h1 className="display-1">Skills</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 py-5">
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
