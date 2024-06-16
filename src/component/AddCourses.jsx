import React, { useContext, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Container,
  Row,
  Col,
} from "reactstrap";
import CreContext from "../context/creContext";
import { FcHome } from "react-icons/fc";

const AddCourses = () => {
  const { addCourse } = useContext(CreContext);
  const [course, setCourse] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCourse(course);
    setCourse({
      title: "",
      description: "",
    });
  };

  const onchange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  return (
    <div className=" py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="text-center mb-4">
              <FcHome size="4em" />
              <h1 className="display-4">Add New Course</h1>
            </div>
            <Form
              onSubmit={handleSubmit}
              className="bg-white p-4 rounded shadow-sm"
            >
              <FormGroup>
                <Label for="title">Course Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter Course title"
                  type="text"
                  required
                  value={course.title}
                  onChange={onchange}
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">CouCourserse Description</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Enter Course description"
                  type="textarea"
                  required
                  value={course.description}
                  onChange={onchange}
                  className="form-control"
                />
              </FormGroup>
              <div className="text-center">
                <Button color="primary" type="submit" className="me-2">
                  Submit
                </Button>
                <Button
                  color="secondary"
                  onClick={() => setCourse({ title: "", description: "" })}
                >
                  Clear
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddCourses;
