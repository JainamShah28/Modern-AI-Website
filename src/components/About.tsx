import React from 'react'

const About: React.FC = () => {
    return (
        <section id="about" className="about-section bg-[#031B34] about-bg m-4 p-8 md:m-6 md:p-10 lg:mx-10 lg:mt-6 xl:mx-28 xl:mt-10 xl:p-14">
            <div className="top flex flex-col md:flex-row md:justify-between md:items-start">
                <h1 className="about-title md:w-1/5">What is GPT-3</h1>
                <p className="text-[#81AFDD] font-medium text-sm leading-6 md:w-3/4 xl:text-base xl:leading-8">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>

            <div className="mid flex flex-col my-6 md:my-10 md:flex-row md:justify-between md:items-center xl:my-16 2xl:my-20">
                <h1 className="text-gradient font-extrabold text-xl md:w-2/5 xl:text-3xl xl:leading-10">The possibilities are beyond your imagination</h1>
                <p className="text-sm font-medium text-[#FF8A71] mt-2 md:mt-0">Explore The Library</p>
            </div>

            <div className="bottom flex flex-col gap-y-6 lg:flex-row lg:justify-between">
                <div className="feature1 lg:w-[30%]">
                    <h1 className="about-title lg:mb-6 2xl:mb-8">Chatbots</h1>
                    <p className="text-[#81AFDD] font-medium text-sm leading-6 xl:text-base xl:leading-8">We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
                </div>

                <div className="feature2 lg:w-[30%]">
                    <h1 className="about-title lg:mb-6 2xl:mb-8">Knowledgebase</h1>
                    <p className="text-[#81AFDD] font-medium text-sm leading-6 xl:text-base xl:leading-8">At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
                </div>

                <div className="feature3 lg:w-[30%]">
                    <h1 className="about-title lg:mb-6 2xl:mb-8">Education</h1>
                    <p className="text-[#81AFDD] font-medium text-sm leading-6 xl:text-base xl:leading-8">At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
                </div>
            </div>
        </section>
    )
}

export default About