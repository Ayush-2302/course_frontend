import React, { createContext, useState } from "react";
import CreContext from "./creContext";
import base_url from "./baseurl";
import axios from "axios";
import { toast } from "react-toastify";

const CourseContext = ({ children }) => {
  const initial = [];
  const [course, setCourse] = useState(initial);
  const getAllCourse = async () => {
    try {
      const response = await axios.get(`${base_url}/findallcourse`);
      setCourse(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCourse = async (data) => {
    try {
      const response = await axios.post(`${base_url}/addcourse`, data);
      console.log("success");
      toast.success("Course added successfully");
      return response;
    } catch (error) {
      console.log(error);
      toast.error("Failed to add course");
    }
  };

  const updateCourse = async (id, courses) => {
    try {
      console.log(courses, "hellow");
      const response = await axios.put(
        `${base_url}/updatecourse/${id}`,
        courses
      );
      toast.info("Course Updated Successfully");

      let newCourses = JSON.parse(JSON.stringify(course));

      // console.log(newCourses,"newcourse");
      for (let index = 0; index < newCourses.length; index++) {
        const element = newCourses[index];
        // console.log(element,"element");
        if (element._id === id) {
          newCourses[index].etitle = courses;
          break;
        }
      }
      setCourse(newCourses);
      console.log(response.data, "response data");
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteCourse = async (id) => {
    try {
      const response = await axios.delete(`${base_url}/deletecourse/${id}`);
      console.log("deleted");
      console.log(response);

      const newcourse = course.filter((console) => {
        return console.id !== id;
      });
      setCourse(newcourse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreContext.Provider
      value={{ course, getAllCourse, addCourse, deleteCourse, updateCourse }}
    >
      {children}
    </CreContext.Provider>
  );
};

export default CourseContext;
