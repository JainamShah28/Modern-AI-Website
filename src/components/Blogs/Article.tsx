import React from 'react';

interface ArticleProps {
    image: string,
    date: string,
    title: string
};

const Article: React.FC<ArticleProps> = (props) => {
    return (
        <div className="article-container w-full h-full flex flex-col">
            <div className="article-image w-full h-full">
                <img src={props.image} alt="post" className="w-full h-full" />
            </div>

            <div className="article-content bg-[#042C54] h-full p-4 flex flex-col justify-between md:p-8">
                <div className="flex flex-col gap-y-2">
                    <p className="text-xs font-bold">{props.date}</p>
                    <p className="font-extrabold mb-20 md:text-lg">{props.title}</p>
                </div>

                <p className="text-xs font-bold cursor-pointer">Read Full Article</p>
            </div>
        </div>
    );
};

export default Article;