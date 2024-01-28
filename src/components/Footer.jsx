import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // specify the duration of the scroll animation
      smooth: "easeInOutQuart", // specify the easing function
    });
  };

  return (
    <>
      <footer className="flex flex-col items-center justify-center p-3 space-y-10 bg-gray-800 text-white">
        <section className="flex flex-col items-center justify-center">
          <img src="/am-logo2.png" alt="Logo" className="" width="70px" />
          <h1 className="text-center text-2xl font-medium tracking-[0.3em]">
            ARGEL MALIHAN
          </h1>
        </section>
        <section>
          <ul className="flex gap-5">
            <li className="flex flex-col items-center p-2 hover:bg-gray-900 hover:rounded-md duration-300">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/material-rounded/48/ffffff/facebook-new.png"
                alt="facebook-new"
              />
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-900 hover:rounded-md duration-300">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/material-rounded/48/ffffff/new-post.png"
                alt="new-post"
              />
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-900 hover:rounded-md duration-300">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/material-rounded/48/ffffff/github.png"
                alt="github"
              />
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-900 hover:rounded-md duration-300">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/material-rounded/48/ffffff/discord-logo.png"
                alt="discord-logo"
              />
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-900 hover:rounded-md duration-300">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/material-rounded/48/ffffff/linkedin--v1.png"
                alt="linkedin--v1"
              />
            </li>
          </ul>
        </section>
        <hr className="w-full border-t-teal-300" />
        <button
          className="px-3 py-2 rounded-full bg-gray-900 hover:bg-gray-950"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
        <section className="flex flex-col md:flex-row items-center justify-center gap-5 p-3">
          <p>© 2024 Argel Malihan</p>
          <p className="hidden md:block">|</p>
          <p>Built with React.js and Tailwind CSS</p>
          <p className="hidden md:block">|</p>
          <p>
            Icon by <a href="https://icons8.com">Icons8</a>
          </p>
        </section>
      </footer>
    </>
  );
}

export default Footer;
