import React from "react";
import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <div className="jumbotron container">
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">
        This simple app is designed to help users stay organized and prioritize
        their work. The app allows users to create tasks and todos.
      </p>
      <p>This is still a work in progress.</p>
      <NavLink className="btn btn-primary btn-lg" to="/" role="button">
        Let's get started
      </NavLink>
    </div>
  );
};
