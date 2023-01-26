import React from "react";
import randompassword from "../assets/portfolio/randompassword.png";
import timedcodequiz from "../assets/portfolio/timedcodequiz.png";
import workday from "../assets/portfolio/workday.png";
import passwrodtracker from "../assets/portfolio/passwordtracker.png";
import notetaker from "../assets/portfolio/notetaker.png";
import booksearch from "../assets/portfolio/booksearch.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: randompassword,
      href: "https://github.com/connorcho66/random-password",
    },
    {
      id: 2,
      src: timedcodequiz,
      href: "https://github.com/connorcho66/timed-code-quiz",
    },
    {
      id: 3,
      src: workday,
      href: "https://github.com/connorcho66/work-day-scheduler",
    },
    {
      id: 4,
      src: passwrodtracker,
      href: "https://github.com/connorcho66/password-tracker-fork",
    },
    {
      id: 5,
      src: notetaker,
      href: "https://github.com/connorcho66/note-taker",
    },
    {
      id: 6,
      src: booksearch,
      href: "https://github.com/connorcho66/nytimes-googlecalendar",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Repo
                </a>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
