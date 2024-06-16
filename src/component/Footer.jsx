import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light  ">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Ayush's Personal Project
        </p>
        <p className="mb-0">Designed and developed with ❤️ by Ayush</p>
      </div>
    </footer>
  );
};

export default Footer;
