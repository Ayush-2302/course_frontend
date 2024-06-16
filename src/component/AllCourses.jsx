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
    setModel(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedCourse = await updateCourse(courses.id, {
        title: courses.etitle,
        description: courses.edescription,
      });
      toast.success("Course updated successfully");
      setModel(true);
      setCourses({
        id: "",
        etitle: "",
        edescription: "",
      });
    } catch (error) {
      toast.error("Failed to update course");
    }
  };

  const handleChange = (e) => {
    setCourses({ ...courses, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getAllCourse();
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className={`w-50 p-4 position-absolute z-3 bg-secondary mt-4 ${model ? "visually-hidden" : ""}`}>
          <h1 className="text-center">Edit Course</h1>
          <Form className="mt-4" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="etitle" hidden>Title</Label>
              <Input
                id="etitle"
                name="etitle"
                placeholder="Title"
                type="text"
                required
                value={courses.etitle}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="edescription" hidden>Description</Label>
              <Input
                id="edescription"
                name="edescription"
                required
                placeholder="Description"
                type="text"
                value={courses.edescription}
                onChange={handleChange}
              />
            </FormGroup>
            <Button color="primary">Update</Button>
            <Button
              color="danger mx-2"
              onClick={() => {
                setModel(true);
                setCourses({
                  id: "",
                  etitle: "",
                  edescription: "",
                });
              }}
            >
              Cancle
            </Button>
          </Form>
        </div>
      </div>

      <h1 className="mt-4">All Course</h1>
      <div className="mt-4">
        <div className="row gap-4">
          {course.length > 0 ? (
            course.map((ele, index) => (
              <div key={ele.id} className="col">
                <Cards course={ele} handleModel={handleModel} />
              </div>
            ))
          ) : (
            <p>No courses available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
