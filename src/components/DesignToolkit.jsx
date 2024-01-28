import React from "react";

function DesignToolkit() {
  const designToolkit = [
    {
      img: "https://img.icons8.com/color/48/figma--v1.png",
      tech: "Figma",
      category: "Design/Prototyping Tool",
      year: "2023 - Present",
    },
  ];
  return (
    <>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {designToolkit.map((designs, index) => (
          <section
            key={index}
            className="flex items-center gap-10 p-5 bg-gray-100 hover:bg-teal-50 hover:scale-105 duration-300 rounded-md shadow-md"
          >
            <img width="48" height="48" src={designs.img} alt={designs.tech} />
            <div className="w-full space-y-3">
              <h1 className="text-xl text-black/80 font-bold">
                {designs.tech}
              </h1>
              <p className="text-gray-400">{designs.category}</p>
              <hr />
              <p className="text-gray-800">{designs.year}</p>
            </div>
          </section>
        ))}
      </section>
    </>
  );
}

export default DesignToolkit;
