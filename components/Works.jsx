import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css'
import {guidelines} from "../utils/Constants";
import {fadeIn, slideIn, textVariant} from '../utils/motion';

const WorksCard = ({guideline}) => {

    return (
        <>
            <VerticalTimelineElement
      contentStyle={{background: '#013C38', color: '#fff'}}
      contentArrowStyle={{borderRight:'7px solid #232631'}}
      iconStyle={{background: guideline.iconBg,}}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
           src={guideline.icon}
           alt={guideline.title}
           className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{guideline.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{guideline.subtitle}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {guideline.description}
    </ul>
  </VerticalTimelineElement>
        </>
    );
}

const Works = () => {
    return(
        <>
        <div className="bg-gray-100 p-10">

     <motion.div variants={textVariant()}>
        <h2 className="text-primary text-center text-4xl font-bold">How it works</h2>
        <p className="text-center text-gray-600">A Simple Path to Better Mental Health</p>
      </motion.div>
          <div className="mt-20 flex flex-col">
            <VerticalTimeline>
              {guidelines.map((guideline, index) => (
                  <WorksCard key={index} guideline={guideline}/>
              ))}
            </VerticalTimeline>
          </div>        
        </div>

        </>
    );
}


export default Works;