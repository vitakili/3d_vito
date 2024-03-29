import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        ></img>
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bolt">{experience.title}</h3>
      <h4 className="text-secondary font-bold">{experience.company_name}</h4>
      <p className="text-secondary text-[16px] font-semibold">
        {experience.description}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[16px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work experience.</h2>
      </motion.div>
      <div className="mt-20 fle flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
