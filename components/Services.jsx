import React from "react";
import Image from "next/image";
import {services} from "../utils/Constants";
// import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {fadeIn, slideIn, textVariant} from '../utils/motion';


const Services = () => {
    return (
        <>

<div className="py-16 p-10 bg-gray-100">

    <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
       <motion.div variants={textVariant()}>
            <h1 className="font-semibold text-3xl p-7 mb-3 text-primary text-center">What type of services do you want?</h1>
       </motion.div>
       {/* <Tilt className="xs:w-[250px] w-full"> */}
         <motion.div
            variants={fadeIn("right","spring", 0.5 * 1, 0.75)}
            className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-4">
                {services.map((service,index) => (
                    <div key={index} className="bg-primary rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
                            <p className="mb-6 text-gray-400">{service.description}</p>
                            <a href={service.link} className="block font-medium text-white">Know more</a>
                        </div>
                        <Image src={service.image} 
                        className="w-2/3 ml-auto -mb-12" 
                        alt="illustration" 
                        width={900} 
                        height={600}/>
                    </div>
                    
                ))} 
         </motion.div>  
       {/* </Tilt> */}
    </div>
</div>
        </>
    );
}

export default Services;