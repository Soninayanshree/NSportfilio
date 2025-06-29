import { motion } from "framer-motion";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/js2.png";
import reactImg from "../assets/react.png";
import javaImg from "../assets/java.png";
import tailwindcssImg from "../assets/tailwind-css.png";
import viteImg from "../assets/vite.png";
import gitImg from "../assets/git2.png";
import githubImg from "../assets/github.png";

const skills = [
  { name: "HTML", level: 90, image: htmlImg },
  { name: "CSS", level: 85, image: cssImg },
  { name: "JavaScript", level: 70, image: jsImg },
  { name: "React", level: 75, image: reactImg },
  { name: "Java", level: 70, image: javaImg },
  { name: "tailwind CSS", level: 60, image: tailwindcssImg },
  { name: "Vite", level: 75, image: viteImg },
  { name: "Git", level: 50, image: gitImg },
  { name: "Github", level: 70, image: githubImg },
  
];

const SkillCircle = ({ skill }) => {
  const radius = 40;
  const stroke = 6;
  const normalized = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalized;
  const offset = circumference - (skill.level / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2 w-32">
      <div className="relative">
        <svg height={80} width={80} className="">
          <circle
            stroke="#333"
            fill="transparent"
            strokeWidth={stroke}
            r={normalized}
            cx={radius}
            cy={radius}
          />
          <motion.circle
            stroke="#58a4b0"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            r={normalized}
            cx={radius}
            cy={radius}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 2.5, ease: "easeOut",repeat:Infinity , repeatType:"mirror"}}
          />
        </svg>
        {/* Skill image in center */}
        <img
          src={skill.image}
          alt={skill.name}
          className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-[#1b1b1e]"
        />
      </div>
      {/* Percentage below circle */}
      <span className="text-sm text-[#a9bcd0] font-semibold">
        {skill.level}%
      </span>
      {/* Skill name below */}
      <p className="text-sm text-[#d8dbe2] font-medium">{skill.name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0f0f10] text-white py-16 px-4  ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#58a4b0] mb-12">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {skills.map((skill, i) => (
            <SkillCircle key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


