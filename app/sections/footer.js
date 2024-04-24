import React from "react";
import config from "../data.json";

const Footer = () => {
  const footer = config.footer;

  return (
    <div className="footer px-8 py-16 flex justify-center align-center flex-col bg-neutral-800">
      <div className="mx-auto text-3xl text-neutral-400 mb-8 space-x-10">
        <a rel="noreferrer" href={footer.twitter} target="_blank">
          <i className="devicon-twitter-original"></i>
        </a>
        <a rel="noreferrer" href={footer.linkedin} target="_blank">
          <i className="devicon-linkedin-plain"></i>
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/brandon-tran8"
          target="_blank"
        >
          <img
            src="./images/gitlogo.png"
            alt="GitHub"
            className="social-icon"
            style={{ width: "50px", height: "50px" }}
          />
        </a>
      </div>
      <span className="text-sm text-center text-neutral-600">
        © 2024 Brandon Tran™
      </span>
    </div>
  );
};

export default Footer;

//<a href="https://github.com/brandon-tran8">Github</a>
