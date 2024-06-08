import React, { useContext } from "react";
import CreContext from "../context/creContext";
import { toast } from "react-toastify";
import {
  CardBody,
  Card,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
const Cards = ({ course, handleModel }) => {
  const { deleteCourse } = useContext(CreContext);
  // const { course } = useContext(CreContext);

  const handleDelete = () => {
    toast.success("Successfully deleted !");
    deleteCourse(course.id);
    console.log(course);
  };

  // console.log(course.id);


  return (
    <div>
      
      <Card
        style={{
          width: "24rem",
          // height: "24rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{course.title}</CardTitle>
          <CardText>{course.description}</CardText>
          <Button color="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button
            color="warning"
            onClick={() => {
              handleModel(course);
            }}
            className=" mx-2"
          >
            Edit
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
