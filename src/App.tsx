import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Feature from './components/Feature';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="App relative">
            <Navbar />
            <Hero />
            <Clients />
            <About />
            <Feature />
            <Blogs />
            <Footer />
        </div>
    );
};

export default App;