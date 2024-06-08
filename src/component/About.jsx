import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="my-5">
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
                    React: A popular JavaScript library for building user
                    interfaces, allowing for dynamic and responsive frontend
                    development.
                  </li>
                  <li>
                    Bootstrap: A front-end framework for designing responsive
                    and visually appealing web pages.
                  </li>
                  <li>
                    Spring Boot: Provides a robust framework for building and
                    deploying Java-based applications with ease.
                  </li>
                  <li>MySql: </li>
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
