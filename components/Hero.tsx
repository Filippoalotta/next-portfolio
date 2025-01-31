import Image from "next/image";
import React from "react";
import Profile from "@/public/images/profile.png";

const Hero = () => {
  const skills = [
    "HTML",
    "CSS",
    "Sass",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "Angular",
    "React",
    "Next.js",
    "Git",
    "GitKraken",
  ];

  return (
    <section className="flex flex-col-reverse md:flex-row gap-6 items-center justify-around px-7">
      <div className="flex flex-col flex-1 text-center md:text-left justify-start items-center md:items-start gap-4 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold">Front-end Developer</h1>
        <p className="max-w-96">
          Hi, I&apos;m Filippo Alotta, a Front-end Developer based in Rome.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 items-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-base border border-gray-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="flex">
        <Image
          src={Profile}
          alt="profile image"
          className="border-2 rounded-[40%_60%_30%_40%] border-black "
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Hero;
