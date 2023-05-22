import React from 'react';

import Client1 from '../assets/google.png'
import Client2 from '../assets/slack.png'
import Client3 from '../assets/atlassian.png'
import Client4 from '../assets/dropbox.png'
import Client5 from '../assets/shopify.png'

const Clients: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-6 py-4 md:flex-row md:gap-x-6 md:py-8 xl:gap-x-10">
            <img src={Client1} alt="client" className="w-16 xl:w-20" />
            <img src={Client2} alt="client" className="w-16 xl:w-20" />
            <img src={Client3} alt="client" className="w-16 xl:w-20" />
            <img src={Client4} alt="client" className="w-16 xl:w-20" />
            <img src={Client5} alt="client" className="w-16 xl:w-20" />
        </div>
    );
};

export default Clients;