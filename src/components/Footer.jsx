import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import SocialMedia from "./SocialMedia";

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
        <SocialMedia />
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
