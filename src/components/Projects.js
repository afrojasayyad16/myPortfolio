import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/extension.png";
import projImg2 from "../assets/img/saas.jpg";
import projImg3 from "../assets/img/clima.jpg";
import projImg4 from "../assets/img/currency.jpg";
import projImg5 from "../assets/img/password.jpg";
import projImg6 from "../assets/img/pong.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ConvenelQ",
      description: "AI-Powered meeting summary Generator",
      imgUrl: projImg1,
    },
    {
      title: "AInity",
      description: "AI-Powered SaaS Platform",
      imgUrl: projImg2,
    },
    {
      title: "CLIMA",
      description: "Weather Prediction App",
      imgUrl: projImg3,
    },
    {
      title: "Currency",
      description: "Currency Converter App",
      imgUrl: projImg4,
    },
    {
      title: "PassCode",
      description: "Password Generator",
      imgUrl: projImg5,
    },
    {
      title: "PingPong",
      description: "Distributed Web App",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below is a collection of my projects, showcasing practical applications of my skills.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
