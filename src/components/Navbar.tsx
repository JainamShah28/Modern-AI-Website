import React from 'react'

import Logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false),
        toggleOpen = () => {
            setIsOpen(isOpen => !isOpen);
        };

    return (
        <>
            <nav className="navbar backdrop-filter backdrop-blur-lg bg-opacity-30 z-[1000] sticky top-2 mx-4 flex justify-between items-center rounded-md h-[6vh] md:mx-8 lg:mx-10 lg:flex lg:h-[10vh] lg:top-4 xl:mx-28 xl:h-[8vh] xl:top-8">
                <div className="left-nav flex justify-start items-center lg:gap-x-8 xl:gap-x-12">
                    <a href="#hero" className="website-logo">
                        <img src={Logo} alt="gpt-3"></img>
                    </a>

                    <ul className="nav-list justify-start items-center hidden lg:flex lg:gap-x-8 xl:gap-x-10">
                        <li className="nav-list-item">
                            <a href="#hero" className="nav-link">Home</a>
                        </li>

                        <li className="nav-list-item">
                            <a href="#about" className="nav-link">What is GPT?</a>
                        </li>

                        <li className="nav-list-item">
                            <a href="#openAI" className="nav-link">Open AI</a>
                        </li>

                        <li className="nav-list-item">
                            <a href="#caseStudies" className="nav-link">Case Studies</a>
                        </li>

                        <li className="nav-list-item">
                            <a href="#library" className="nav-link">Library</a>
                        </li>
                    </ul>
                </div>

                <div className="left flex justify-start items-center gap-x-8">
                    <a href="#signIn" className="nav-link hidden lg:block">Sign in</a>

                    <a href="#signUp" className="btn-primary hidden lg:block">Sign up</a>
                </div>

                {
                    !isOpen ? <i className="uil uil-bars text-3xl cursor-pointer lg:hidden" onClick={toggleOpen}></i> :
                        <i className="uil uil-multiply text-2xl cursor-pointer lg:hidden" onClick={toggleOpen}></i>
                }
            </nav>

            <div className={`mobile-nav bg-[#002853] flex flex-col items-end gap-y-4 w-fit rounded-md p-8 fixed right-4 top-[calc(6vh+1rem)] z-[1000] transition-all duration-100 ease-linear ${!isOpen ? "scale-0" : "scale-100"} text-sm md:right-8 md:top-[calc(10vh+1rem) md:text-base md:gap-y-6 md:w-[240px]`}>
                <a href="#hero">Home</a>
                <a href="#about">What is GPT</a>
                <a href="#openAI">Open AI</a>
                <a href="#caseStudies">Case Studies</a>
                <a href="#library">Library</a>
            </div>
        </>
    )
}

export default Navbar; 