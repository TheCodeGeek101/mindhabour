import React from "react";
import Image from 'next/image';

const Home = () => {

    return (
        <>
            <section className="py-5 bg-gray-100">
                <div className="flex container flex-wrap items-center mx-auto mt-10 justify-center md:px-12 md:flex-row">
                     <div className="mb-14 lg:w-1/2 lg:mb-0">
                        <h1 className="text-3xl font-bold text-center text-primary lg:text-left lg:max-w-md">
                            Welcome to MindHarbor: Your Safe Haven for Mental Wellness    
                        </h1>    
                        <p className="max-w-xl text-center text-black lg:text-left lg:max-w-md">
                            At MindHarbor, we believe in providing a sanctuary for your mental health journey. 
                            Our platform is designed to offer you personalized support, tools, and resources to navigate life's storms with confidence.
                            From expert-guided therapy sessions to self-care tools and community support, MindHarbor is here to anchor you to tranquility and growth.
                            Embark on your journey towards peace of mind and discover a community that sails with you towards a horizon of well-being.
                        </p>
                        <div className="flex justify-center mt-14 lg:justify-start">
                            <button type= "submit" className="text-white bg-primary font-medium rounded-lg px-5 py-4 text-center hover:opacity-70 hover:drop-shadow-md transition duration-300 ease-out">
                                learn more
                            </button>
                        </div>
                    </div>
                     <div className="lg:w-1/2">
                         <Image
                            className="ml-auto"
                            src="/healtcare.jpg"
                            width={500}
                            height={500}
                            alt="logo of the site"
                            /> 
                     </div>   
                </div>

            </section> 
        </>
    );

}

export default Home;