import React from "react";
import config from "../data.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section className="h-screen bg-white overflow-x-hidden">
      <div className="px-8 lg:px-32 flex flex-col justify-center align-between">
        <h1 className="text-6xl mt-64 font-bold tracking-wide">
          Hey, my name is
          <span className="ml-3 whitespace-nowrap bg-gradient-to-r from-red-400 via-gray-700 to-blue-300 bg-clip-text text-transparent">
            {hero.name.replace("'", "&apos;")}
          </span>
        </h1>
        <h1 className="text-6xl font-bold tracking-wide mt-4">
          {hero.subtitle}
        </h1>
        <h1 className="text-6xl font-bold tracking-wide mt-4">
          {hero.subtitle2}
        </h1>
        <a
          href="#About"
          className="text-2xl font-bold p-0.5 mt-6 w-44 bg-gradient-to-r from-rose-500 via-fuchsia-600 to-indigo-600"
        >
          <div className="bg-white">
            <span className="block text-center py-0.5 px-2 font-semibold bg-white font-bold bg-gradient-to-r from-red-400 via-gray-500 to-blue-500 bg-clip-text text-transparent">
              Know more
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
