import React from 'react';

import Logo from '../assets/logo.png';

const Footer: React.FC = () => {
    return (
        <div className="footer-container bg-[#031B34] flex flex-col gap-y-6 pt-10 md:items-center mt-10 px-4 md:mt-16 md:px-8 lg:mt-24 lg:px-10 xl:mt-28 xl:px-28 xl:pt-24 xl:gap-y-10" id="library">
            <h1 className="text-3xl font-extrabold text-center leading-snug text-gradient md:w-1/2 xl:text-[2.75rem] xl:leading-tight 2xl:leading-[1.3] 2xl:text-6xl">Do you want to step in to the future before others</h1>

            <button className="border-[1px] text-sm border-[#FFF] w-fit mx-auto block px-4 py-2 xl:text-base xl:py-4">Request Early Access</button>

            <footer className="footer text-sm mt-10 xl:mt-24">
                <div className="footer-links flex flex-col gap-y-4 md:flex-row md:gap-x-8 lg:gap-x-12 xl:gap-x-36 2xl:gap-x-48">
                    <div className="website-logo md:w-2/5">
                        <img src={Logo} alt="logo" />
                        <p className="mt-4 xl:mt-8">Crechterwoord K12 182 DK Alknjkcb,<br></br> All Rights Reserved</p>
                    </div>

                    <div className="nav-links">
                        <p className="font-extrabold">Links</p>

                        <div className="mt-4 flex flex-col gap-y-2 font-light xl:gap-y-4 xl:mt-8">
                            <p>Overons</p>
                            <p>Social Media</p>
                            <p>Counters</p>
                            <p>Contact</p>
                        </div>
                    </div>

                    <div className="company">
                        <p className="font-extrabold">Company</p>

                        <div className="mt-4 flex flex-col gap-y-2 font-light xl:gap-y-4 xl:mt-8">
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Contact</p>
                        </div>
                    </div>

                    <div className="get-in-touch">
                        <p className="font-extrabold">Get in touch</p>

                        <div className="mt-4 flex flex-col gap-y-2 font-light xl:gap-y-4 xl:mt-8">
                            <p>Crechterwoord K12<br></br> 182 DK Alknjkcb</p>
                            <p>085-132567</p>
                            <p>info@gpt.com</p>
                        </div>
                    </div>
                </div>

                <div className="text-xs text-center flex flex-col gap-y-1 py-4 md:pt-10 lg:pt-16 xl:pb-8 xl:gap-y-3">
                    <p className="">©2023 GPT3. All rights reserved.</p>
                    <p className="">Made with ♥ by <span className="font-bold">Jainam Shah</span></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;