import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const BASE_DIR = "/images/skills/";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  skills,
}) => {
  return (
    <div className="h-max">
      <div className="rounded-xl relative group">
        <Image
          src={imgUrl}
          alt="Imagen proyecto"
          width={0}
          height={0}
          sizes="100vw"
          className="h-52 md:h-42 w-full rounded-t-xl object-cover object-center"
          priority
        />
        <div>
          <div className="text-white bg-[#181818] py-3 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
          </div>
          <div className="rounded-b-xl bg-[#181818] mb-2 px-4 text-left">
            <h5 className="text-xl font-semibold">Habilidades</h5>
            <div className="text-white py-6 flex flex-row flex-wrap justify-center gap-5">
              {skills.map((skill, index) => (
                <Image
                  key={index}
                  src={BASE_DIR + skill.icon}
                  title={skill.name}
                  alt="Icono habilidad proyecto"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-10 h-10 object-contain"
                  priority
                />
              ))}
            </div>
          </div>
        </div>
        <div className="overlay rounded-xl items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:flex-col group-hover:gap-5 group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            target="blank"
            className="border-2 border-[#88898A] rounded-xl p-5 flex items-center gap-2 text-[#88898A] hover:text-white hover:border-white"
            title="Ver en GitHub"
          >
            <CodeBracketIcon className="h-10 w-10 " />
            <span className="">Ver en GitHub</span>
          </Link>
          {previewUrl != undefined ? (
            <Link
              href={previewUrl}
              target="blank"
              className="border-2 border-[#88898A] rounded-xl p-5 flex items-center gap-2 text-[#88898A] hover:text-white hover:border-white"
              title="Ver proyecto"
            >
              <EyeIcon className="h-10 w-10 " />
              <span className="">Ver proyecto</span>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
