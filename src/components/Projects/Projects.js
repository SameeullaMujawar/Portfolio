import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import th from "../../Assets/Projects/th (7).jpeg";
import Picture1 from "../../Assets/Projects/Picture1.jpg";

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
              imgPath={leaf}
              isBlog={false}
              title="Plant Disease Detection"
              description="Plant Disease is necessary for every farmer so we are created Plant disease detection using Deep learning. In which we are using convolutional Neural Network for classifying Leaf images into 39 Different Categories. The Convolutional Neural Code build in Pytorch Framework."
              ghLink="https://github.com/SameeullaMujawar/Plant-Disease-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Picture1}
              isBlog={false}
              title="HealthCure"
              description="is an all in one medical solution app which brings 7 Disease
            Detections like Covid Detection, Brain Tumor Detection, Breast Cancer Detection, Alzheimer Detection,
            Diabetes Detection, Pneumonia Detection, and Heart Disease Detection under one platform."
              ghLink="https://github.com/SameeullaMujawar/HealthCure"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={th}
              isBlog={false}
              title="Todo"
              description="To-Do Project typically refers to a simple task management application that allows users to create, read, update, and delete (CRUD) their tasks. It’s a common beginner project in software development because it covers essential programming concepts such as user interaction, state management, and data persistence."
              ghLink="https://github.com/SameeullaMujawar/Todo"
            />
          </Col>



          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
