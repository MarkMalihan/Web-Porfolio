import React from "react";

function SocialMedia() {
  return (
    <>
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
    </>
  );
}

export default SocialMedia;
