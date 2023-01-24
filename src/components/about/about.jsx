import React from 'react';
import './about.scss';

const About = () => {
    return (
        <div className="about-page-container">
            <header className="about-header">
                <h1>Our Company</h1>
            </header>
            <main className="about-main">
                <h3>Our Team</h3>
                <ul type={'square'}>
                    <li>Nikhil Goel - BCA V semester</li>
                    <li>Deepak Negi - BCA V semester</li>
                </ul>
                <h3>project created using</h3>
                <ul type={'square'}>
                    <li>Mongo DB</li>
                    <li>Express JS</li>
                    <li>React JS</li>
                    <li>Node JS</li>
                </ul>
            </main>
        </div>
    );
}

export default About;
