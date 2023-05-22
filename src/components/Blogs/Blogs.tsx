import React from 'react';

import Article from './Article';

import BlogPost1 from '../../assets/post1.png';
import BlogPost2 from '../../assets/post2.png';
import BlogPost3 from '../../assets/post3.png';
import BlogPost4 from '../../assets/post4.png';
import BlogPost5 from '../../assets/post5.png';

const Blogs: React.FC = () => {
    return (
        <section className="blogs mt-10 px-4 md:mt-16 md:px-8 lg:mt-24 lg:px-10 xl:mt-28 xl:px-28" id="caseStudies">
            <h1 className="hero-header text-3xl w-full mb-10 font-extrabold leading-snug text-gradient lg:mb-24 xl:text-[2.75rem] xl:leading-tight xl:mb-28 2xl:leading-[1.3] 2xl:text-6xl">A lot is happening,<br></br>
                We are blogging about it.</h1>

            <div className="blog-container flex flex-col gap-y-4 md:gap-y-8 lg:flex-row lg:gap-x-8">
                <div className="blog-container-grpA flex-[0.75]">
                    <Article
                        image={BlogPost1}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                </div>

                <div className="blog-container-grpB flex-1 grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-8">
                    <Article
                        image={BlogPost2}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />

                    <Article
                        image={BlogPost3}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />

                    <Article
                        image={BlogPost4}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />

                    <Article
                        image={BlogPost5}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                </div>
            </div>
        </section>
    );
};

export default Blogs;