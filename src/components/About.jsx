import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello! My name is Connor "Seong Yun" Cho and I am passionate to learn more in coding. I spend most of my time during the day in front of my computer doing either studying or play games with my friends. I am currently enrolled in uPenn LPS coding Boot Camp program and expect to graduate on February 6, 2023. My interest towards web development started back in early 2021. I was pastry chef before this but always wanted to learn coding because it looked cool and fun to me. As Covid-19 hit and lost my job, I decided to change my path towards software developer.
        </p>

        <br />

        <p className="text-xl">
          Fast-forward to today, I have decided to give Boot Camp a try instead of wasting my time on games and do nothing. The way through the program was hard and challenging. There were times when I wanted to quit and felt so stupid. However, I kept trying and made it this far. When I am done with my program I want to build another portfolio and some board games with my cousin who just graduated college as CS.
        </p>
      </div>
    </div>
  );
};

export default About;
