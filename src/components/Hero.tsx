import React from 'react'

import HeroImage from '../assets/robot.png'
import User1 from '../assets/user1.png'
import User2 from '../assets/user2.png'
import User3 from '../assets/user3.png'
import User4 from '../assets/user4.png'
import User5 from '../assets/user5.png'
import User6 from '../assets/user6.png'

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero-section box-border w-screen flex-row-reverse justify-between items-center px-4 md:px-8 lg:px-10 lg:min-h-[90vh] lg:flex xl:px-28 xl:min-h-[92vh]">
            <div className="hero-image relative z-30 w-full flex justify-center items-center lg:w-[51%]">
                <img src={HeroImage} alt="robot" className="w-full md:w-4/5 lg:w-full"></img>
            </div>

            <div className="hero-content relative z-30 box-border w-full mt-4 lg:mt-0 lg:w-[49%]">
                <h1 className="hero-header text-3xl font-extrabold leading-snug text-gradient xl:text-[2.75rem] xl:leading-tight 2xl:leading-[1.3] 2xl:text-6xl">Let’s Build Something amazing with GPT-3 OpenAI</h1>

                <p className="hero-content box-border leading-6 text-text-secondary text-sm font-normal my-5 md:text-lg md:my-8 lg:pr-12 lg:my-6 xl:my-10">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

                <div className="w-full z-30 box-border justify-start items-center flex flex-col md:flex-row">
                    <input type="text" placeholder="Your Email Address" className="bg-secondary box-border w-full px-6 py-3 text-sm rounded-md focus:outline-none text-[#3D6184] placeholder:text-[#3D6184] md:w-[70%] md:rounded-l-md md:rounded-r-none md:py-4 lg:w-[60%] 2xl:w-[70%]"/>
                    <button className="btn-primary rounded-md text-sm font-medium mt-2 py-3 md:mt-0 md:rounded-none md:py-4 md:rounded-r-md">Get Started</button>
                </div>

                <div className="users-list flex flex-col justify-center items-center my-8 gap-y-4 md:flex-row md:items-center md:justify-start md:gap-x-4 lg:flex-col lg:items-start lg:justify-center 2xl:flex-row">
                    <div className="users-avatar-list flex -space-x-3">
                        <img src={User1} alt="user"></img>
                        <img src={User2} alt="user"></img>
                        <img src={User3} alt="user"></img>
                        <img src={User4} alt="user"></img>
                        <img src={User5} alt="user"></img>
                        <img src={User6} alt="user"></img>
                        <div className="rounded-full w-9 h-9 border-2 border-text-primary bg-[#13DED2] text-[#000000] text-[0.55rem] flex justify-center items-center font-bold">1.6k+</div>
                    </div>

                    <p className="text-center font-medium">1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
        </section>
    )
}

export default Hero 