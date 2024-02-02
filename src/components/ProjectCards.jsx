import React from "react";

function ProjectCards() {
  const projects = [
    {
      img: "/am-logo2.png",
      name: "Argel Malihan Portfolio",
      description: "My Web Portfolio",
      tech: "ReactJS, Tailwind CSS",
      githubLink: "https://github.com/MarkMalihan/Web-Porfolio",
    },
  ];
  return (
    <>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {projects.map((project, index) => (
          <section
            key={index}
            className="p-5 border border-blue-600 bg-zinc-700/80 hover:scale-105 duration-300 rounded-md shadow-md"
          >
            <div className="flex items-center gap-5">
              <img
                width="48"
                height="48"
                src={project.img}
                alt={project.name}
              />
              <h1 className="text-xl text-gray-50 font-bold">{project.name}</h1>
            </div>

            <div className="w-full space-y-4">
              <p className="text-gray-200">{project.description}</p>
              <hr />
              <p className="text-gray-300">
                Technology:
                <span className="text-sky-300"> {project.tech}</span>
              </p>
              <hr />
              <p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="w-fit flex items-center gap-5 px-4 py-1 bg-gray-800 hover:bg-gray-900 text-white rounded-md"
                >
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/ffffff/github.png"
                    alt="github"
                  />
                  GitHub
                </a>
              </p>
            </div>
          </section>
        ))}
      </section>
    </>
  );
}

export default ProjectCards;
