import React from 'react';

import FeatureImage from '../assets/feature_img.png';

const Feature: React.FC = () => {
    return (
        <section className="feature box-border w-screen px-4 mt-8 md:px-8 lg:px-10 lg:mt-16 xl:px-28 xl:mt-20" id="openAI">
            <div className="flex flex-col justify-between items-center gap-y-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="left flex flex-col gap-y-4">
                    <h3 className="title text-gradient font-extrabold text-xl md:w-3/5 xl:text-3xl xl:leading-10">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h3>
                    <p className="text-sm font-medium text-[#FF8A71]">Request Early Access to Get Started</p>
                </div>

                <div className="right flex flex-col gap-y-6">
                    <div className="feature1 md:flex md:justify-between md:items-start">
                        <h1 className="about-title font-medium md:w-1/5 lg:mb-6 xl:text-lg 2xl:mb-8">Improving end distrusts instantly</h1>
                        <p className="text-[#81AFDD] font-medium text-sm leading-6 md:w-3/5 xl:text-base">From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
                    </div>

                    <div className="feature2 md:flex md:justify-between md:items-start">
                        <h1 className="about-title font-medium md:w-1/5 lg:mb-6 xl:text-lg 2xl:mb-8">Become the tended active</h1>
                        <p className="text-[#81AFDD] font-medium text-sm leading-6 md:w-3/5 xl:text-base">Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
                    </div>

                    <div className="feature3 md:flex md:justify-between md:items-start">
                        <h1 className="about-title font-medium md:w-1/5 lg:mb-6 xl:text-lg 2xl:mb-8">Message or am nothing</h1>
                        <p className="text-[#81AFDD] font-medium text-sm leading-6 md:w-3/5 xl:text-base">Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
                    </div>

                    <div className="feature4 md:flex md:justify-between md:items-start">
                        <h1 className="about-title font-medium md:w-1/5 lg:mb-6 xl:text-lg 2xl:mb-8">Really boy law county</h1>
                        <p className="text-[#81AFDD] font-medium text-sm leading-6 md:w-3/5 xl:text-base">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-y-10 mt-10 md:flex-row md:items-end md:px-10 md:gap-x-4 lg:justify-center">
                <img src={FeatureImage} alt="feature" className="md:w-[55%] lg:w-[45%]" />

                <div className="content flex flex-col gap-y-4 md:w-[45%] xl:gap-y-6">
                    <h1 className="font-medium">Request Early Access to Get Started</h1>

                    <h3 className="title text-gradient font-extrabold text-xl xl:text-3xl xl:leading-10">The possibilities are beyond your imagination</h3>

                    <p className="text-[#81AFDD] font-medium text-sm leading-6 xl:text-base">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

                    <p className="text-sm font-medium text-[#FF8A71]">Request Early Access to Get Started</p>
                </div>
            </div>

            <div className="banner rounded-[10px] p-8 mt-10 flex flex-col items-center bg-gradient-to-r from-[#AE67FA] to-[#83F467] gap-y-4 md:flex-row md:justify-between md:items-center md:mt-16 lg:mt-24 xl:mt-28">
                <div className="flex flex-col items-center gap-y-2 md:items-start">
                    <p className="font-medium text-xs text-[#0E0E0E]">Request Early Access to Get Started</p>
                    <p className="text-center text-[#000000] font-extrabold md:text-left xl:text-lg">Register today & start exploring the endless possiblities.</p>
                </div>

                <button className="bg-[#000000] text-[#FFF] text-sm px-6 py-3 font-bold w-fit rounded-3xl xl:px-8 xl:py-4 lg:hover:bg-[#FFF] lg:hover:text-[#000]">Get Started</button>
            </div>
        </section>
    );
};

export default Feature;