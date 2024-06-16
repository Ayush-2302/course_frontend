import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="my-5 ">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>
                Welcome to CRUD Operations Project with Spring Boot, React, and
                Bootstrap About the Project: Our project is an exemplary
                demonstration of CRUD (Create, Read, Update, Delete) operations
                utilizing the powerful combination of Spring Boot for the
                backend, React for the frontend, and Bootstrap for enhancing UI
                design and responsiveness.{" "}
              </Card.Text>
              <Card.Title>Our Technology Stack</Card.Title>
              <Card.Text>
                We specialize in building applications using the following
                technologies:
                <ul>
                  <li>
                    React: A powerful JavaScript library for building
                    interactive and dynamic user interfaces, widely used for
                    single-page applications and frontend development.
                  </li>
                  <li>
                    Bootstrap: A sleek, mobile-first front-end framework for
                    developing responsive and modern web projects with ease,
                    offering a rich set of UI components and utilities.
                  </li>
                  <li>
                    Spring Boot: A popular Java-based framework that simplifies
                    the development of robust, production-grade, and easily
                    deployable web applications, providing features like
                    auto-configuration and rapid development.
                  </li>
                  <li>
                    MySQL: An open-source relational database management system
                    known for its reliability, scalability, and performance,
                    widely used for storing and managing structured data.
                  </li>
                </ul>
                <h5>Why choose our project ? </h5>
                <ul>
                  <li>
                    Efficiency: Streamline your CRUD operations with our
                    efficient backend and user-friendly frontend.
                  </li>
                  <li>
                    Flexibility: Adapt our project to your specific requirements
                    with ease, thanks to its modular architecture.
                  </li>
                  <li>
                    Scalability: Easily scale your application as your business
                    needs grow, thanks to the scalability of Spring Boot and
                    React.
                  </li>
                </ul>
                <h5>Get start</h5>
                <ul>
                  <li>
                    Clone the Repository: Start by cloning our project
                    repository from GitHub.
                  </li>
                  <li>
                    Setup Backend: Configure and run the Spring Boot backend to
                    establish the server-side functionality.
                  </li>
                  <li>
                    Setup Frontend: Set up the React frontend to interact with
                    the backend APIs and provide an intuitive user interface.
                  </li>
                  <li>
                    Explore and Customize: Dive into the codebase, explore the
                    functionality, and customize it to fit your project
                    requirements.
                  </li>
                  <li>
                    Deploy: Once customized, deploy your application to your
                    preferred hosting environment and start leveraging its
                    capabilities.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
