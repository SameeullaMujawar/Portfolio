import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import th from "../../Assets/Projects/th (7).jpeg";
import photo from "../../Assets/Projects/pictures-icon-png-14.jpg";
import invent from "../../Assets/Projects/inventory_management_image50.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={th}
              isBlog={false}
              title="Todo"
              description="To-Do Project typically refers to a simple task management application that allows users to create, read, update, and delete (CRUD) their tasks. It’s a common beginner project in software development because it covers essential programming concepts such as user interaction, state management, and data persistence."
              ghLink="https://github.com/SameeullaMujawar/Todo"
            />
          </Col>
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={photo}
              isBlog={false}
              title="Photo Gallery"
              description="This project includes full-stack development, deployment, and testing of a scalable photo gallery platform."
              ghLink="https://github.com/SameeullaMujawar/Photo-Gallery"
            />
          </Col>
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={invent}
              isBlog={false}
              title="Inventory"
              description="The Inventory Management System is a software solution designed to help businesses efficiently track, manage, and control inventory across one or multiple locations. It provides real-time visibility into stock levels, automates reordering processes, and reduces the risk of overstocking or stockouts."
              ghLink="https://github.com/SameeullaMujawar/Inventory"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
