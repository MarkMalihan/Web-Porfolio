import React from "react";
import ProjectCards from "../components/ProjectCards";

function Projects() {
  return (
    <>
      <section className="mx-auto container ">
        <h1 className="text-3xl text-black/80 font-bold m-5 text-blue-200">
          Projects
        </h1>
        <ProjectCards />
        <hr className="my-14 mx-auto border-t-teal-300" />
      </section>
    </>
  );
}

export default Projects;
