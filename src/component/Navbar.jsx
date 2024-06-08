import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="  py-3 px-5  bg-body-tertiary">
      <div className=" gap-4">
        <Link
          className=" text-black text px-2 text-decoration-none   rounded-1"
          to="/"
        >
          {" "}
          Home
        </Link>
        <Link
          className=" text-black text px-2 text-decoration-none   rounded-1"
          to="/course"
        >
          Blogs
        </Link>
        <Link
          className=" text-black text px-2 text-decoration-none   rounded-1"
          to="/about"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
