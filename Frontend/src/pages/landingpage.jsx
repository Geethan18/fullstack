import React from 'react';
import "../assets/css/landing.css";
import background from "../assets/videos/background.mp4";

const Landing = () => {
    return (
        <div className="landing-container">
            <video src={background} autoPlay loop muted className="background-video" />
            <div className="content">
                <h1 className="logo">EveLy</h1>
                <br/><br/><br/>
                <p className="slogan">Discover the Beauty</p>
                <p className="description">Evely is your ultimate destination to explore and experience the wonders of the world. 
                From breathtaking landscapes to vibrant cultures, discover it all with Evely. 
                Whether you're seeking adventure in the great outdoors, 
                immersing yourself in the rich history of ancient civilizations, or indulging in the diverse cuisines of different cultures, 
                Evely offers unparalleled opportunities for discovery and exploration. 
                Join us on a journey to uncover the hidden gems of our planet and create memories that will last a lifetime.</p>
                <br/>
                <div className="buttons">
                    <a href="/login" className="login-button">Login</a>
                    <a href="/signup" className="signup-button">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Landing;
