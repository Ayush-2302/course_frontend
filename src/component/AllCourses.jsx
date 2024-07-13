import React, { useContext, useEffect, useState } from "react";
import CreContext from "../context/creContext";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
import Cards from "../layout/Cards";

const AllCourses = () => {
  const { course, getAllCourse, updateCourse } = useContext(CreContext);

  const [courses, setCourses] = useState({
    id: "",
    etitle: "",
    edescription: "",
  });

  const [modal, setModal] = useState(false);

  const handleModal = (currentCourse) => {
    setCourses({
      id: currentCourse.id,
      etitle: currentCourse.title,
      edescription: currentCourse.description,
    });
    setModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedCourse = await updateCourse(courses.id, {
      title: courses.etitle,
      description: courses.edescription,
    });
    setModal(false);
    setCourses({
      id: "",
      etitle: "",
      edescription: "",
    });
  };

  const handleChange = (e) => {
    setCourses({ ...courses, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getAllCourse();
  }, []);

  return (
    <div className="container full_height">
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)} className="text-black">Edit Course</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="etitle">Title</Label>
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
              <Label for="edescription">Description</Label>
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
            <Button color="primary" type="submit">Update</Button>
            <Button
              color="danger mx-2"
              onClick={() => {
                setModal(false);
                setCourses({
                  id: "",
                  etitle: "",
                  edescription: "",
                });
              }}
            >
              Cancel
            </Button>
          </Form>
        </ModalBody>
      </Modal>

      <h1 className="mt-4">All Courses</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
        {course.length > 0 ? (
          course.map((ele) => (
            <div key={ele.id} className="col">
              <Cards course={ele} handleModel={handleModal} />
            </div>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </div>
  );
};

export default AllCourses;
