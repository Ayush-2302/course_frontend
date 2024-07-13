import React, { useContext } from "react";
import CreContext from "../context/creContext";
import { toast } from "react-toastify";
import { CardBody, Card, CardTitle, CardText, Button } from "reactstrap";

const Cards = ({ course, handleModel }) => {
  const { deleteCourse } = useContext(CreContext);

  const handleDelete = () => {
    toast.success("Successfully deleted !");
    deleteCourse(course.id);
    console.log(course);
  };

  return (
    <div className="my-3">
      <Card style={{ width: "auto", height: "24rem" }}>
        <img
          alt="Course"
          src="https://picsum.photos/seed/programmer/300/200"
          className="card-img-top"
          style={{ maxHeight: "200px", objectFit: "cover" }}
        />
        <CardBody style={{ maxHeight: "200px", overflowY: "auto" }}>
          <CardTitle tag="h5" className="mb-3 text-capitalize">
            {course.title}
          </CardTitle>
          <CardText className=" text-capitalize">{course.description}</CardText>
        </CardBody>
        <div className="card-footer d-flex justify-content-between">
          <Button color="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button color="warning" onClick={() => handleModel(course)}>
            Edit
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
