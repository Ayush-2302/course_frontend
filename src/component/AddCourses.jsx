import React, { useContext, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
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
    <div className=" container mt-4 addblog p-2">
      <div className=" fs-1 ">
        <FcHome />
      </div>
      <h1 className=" text-center">Add Blogs</h1>
      <Form className=" mt-4 p-5" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title" hidden>
            Title
          </Label>
          <Input
            id="title"
            name="title"
            placeholder="Title"
            type="text"
            required
            value={course.title}
            onChange={onchange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description" hidden>
            Password
          </Label>
          <Input
            id="description"
            name="description"
            placeholder="Description"
            type="text"
            required
            value={course.description}
            onChange={onchange}
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
        <Button
          color="danger mx-2"
          onClick={() => {
            setCourse({
              title: "",
              description: "",
            });
          }}
        >
          Clear
        </Button>
      </Form>
    </div>
  );
};

export default AddCourses;
