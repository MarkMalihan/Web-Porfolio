import React from "react";

function Timeline() {
  return (
    <>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        <div>
          <div className="p-3 border rounded-md space-y-3 hover:scale-105 duration-300">
            <h1 className="text-2xl text-white font-bold">April 2023</h1>
            <hr />
            <p className="text-gray-300">
              Nag OJT sa Polytechnic University of the Philippines - Lopez
              Branch as Front-End Dev.
            </p>
          </div>
        </div>

        <div>
          <div className="p-3 border rounded-md space-y-3 hover:scale-105 duration-300">
            <h1 className="text-2xl text-white font-bold">October 2023</h1>
            <hr />
            <ul className="list-disc list-inside space-y-3">
              <li className="text-gray-300">
                Grumaduate na may kursong BSIT sa Polytechnic University of the
                Philippines - Lopez Branch.
              </li>
              <li className="text-gray-300">
                Front-End Developer sa isang Private Startup Company sa Metro
                Manila.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
