import React from "react";

function TechStack() {
  const techStack = [
    {
      img: "https://img.icons8.com/color/48/html-5--v1.png",
      tech: "HTML",
      category: "Front-End/Markup Language",
      year: "2021 - Present",
    },
    {
      img: "https://img.icons8.com/color/48/css3.png",
      tech: "CSS",
      category: "Front-End/Styling Language",
      year: "2021 - Present",
    },
    {
      img: "https://img.icons8.com/color/48/javascript--v1.png",
      tech: "JavaScript",
      category: "Front-End/Programming Language",
      year: "2022 - Present",
    },
    {
      img: "https://img.icons8.com/color/48/bootstrap--v2.png",
      tech: "Bootstrap 4",
      category: "Front-End/CSS Framework",
      year: "2023",
    },
    {
      img: "https://img.icons8.com/color/48/tailwindcss.png",
      tech: "Tailwind CSS",
      category: "Front-End/CSS Framework",
      year: "2023 - Present",
    },
    {
      img: "https://img.icons8.com/color/48/react-native.png",
      tech: "ReactJS",
      category: "Front-End/JavaScript Library",
      year: "Present",
    },
    {
      img: "https://img.icons8.com/color/48/vite.png",
      tech: "Vite",
      category: "Build Tools",
      year: "Present",
    },
  ];

  return (
    <>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {techStack.map((techs, index) => (
          <section
            key={index}
            className="flex items-center gap-5 p-5 space-y-3 bg-gray-100 hover:bg-teal-50 hover:scale-105 duration-300 rounded-md shadow-md"
          >
            <img width="48" height="48" src={techs.img} alt={techs.tech} />
            <div className="w-full space-y-3">
              <h1 className="text-xl text-black/80 font-bold">{techs.tech}</h1>
              <p className="text-gray-400">{techs.category}</p>
              <hr />
              <p className="text-gray-800">{techs.year}</p>
            </div>
          </section>
        ))}
      </section>
    </>
  );
}

export default TechStack;
