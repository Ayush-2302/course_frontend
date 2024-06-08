import React, { useContext, useEffect, useState } from "react";
import CreContext from "../context/creContext";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { toast } from "react-toastify";
import Cards from "../layout/Cards";

const AllCourses = () => {
  const { course, getAllCourse, updateCourse } = useContext(CreContext);

  const [courses, setCourses] = useState({
    id: "",
    etitle: "",
    edescription: "",
  });

  const [model, setModel] = useState(true);
  const handleModel = (currentCourse) => {
    setCourses({
      id: currentCourse.id,
      etitle: currentCourse.title,
      edescription: currentCourse.description,
    });
    setModel(!model);
  };

  // console.log(course, "id found");
  console.log(courses.id, "adding");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCourse(courses.id, courses);
    setModel(!model);
    setCourses({
      id: "",
      etitle: "",
      edescription: "",
    });
  };

  const onchange = (e) => {
    setCourses({ ...courses, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getAllCourse();
  }, []);

  return (
    <div className="container ">
      <div className="d-flex justify-content-center">
        <div
          className={` w-50   p-4 position-absolute z-3 bg-secondary mt-4 ${
            model ? "visually-hidden" : ""
          }`}
        >
          <h1 className=" text-center">Edit Blog</h1>
          <Form className=" mt-4" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="etitle" hidden>
                Title
              </Label>
              <Input
                id="etitle"
                name="etitle"
                placeholder="Title"
                type="text"
                required
                value={courses.etitle}
                onChange={onchange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="edescription" hidden>
                Description
              </Label>
              <Input
                id="edescription"
                name="edescription"
                required
                placeholder="Description"
                type="text"
                value={courses.edescription}
                onChange={onchange}
              />
            </FormGroup>
            <Button color="primary">Update</Button>
            <Button
              color="danger mx-2"
              onClick={() => {
                setCourses({
                  etitle: "",
                  edescription: "",
                });
              }}
            >
              Clear
            </Button>
          </Form>
        </div>
      </div>

      <h1 className=" mt-4">All Blog</h1>
      <div className="  mt-4">
        <div className=" row gap-4">
          {course.length > 0
            ? course.map((ele, target) => (
                <div key={target} className=" col  ">
                  <Cards course={ele} handleModel={handleModel} />
                </div>
              ))
            : "no course"}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
