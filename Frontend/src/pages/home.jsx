import React from 'react';
import '../assets/css/home.css';
import CustomNavbar from '../components/Navbarcus';
import Gallery from '../components/gallery';
import Alleventcard from '../components/adminevent';
import Footers from '../components/footer';
import { motion, useScroll, useSpring } from "framer-motion";
export default function Homepage(){
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    return(
        <div className='home'>
            <header>

            <CustomNavbar/>
            </header>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <div className='firstdiv' style={{height:'800px'}}>
                <h1 className='h2class' style={{fontSize:'110px', padding:'150px'}}>
                    EveLy
                </h1>
                <p className='paraclass' style={{fontSize:'25px', padding:'10px', width:'750px', marginLeft:'200px'}}>
                Seamless Events, Exceptional Experiences: Your Ultimate Event Management Solution!
                </p>
            </div>
            <br/>
        <div className='seconddiv' style={{backgroundColor:'white'}}>
                <h1 className='newh1' style={{padding:'40px', color:'white', textAlign:'right', fontSize:'70px'}}>Overview</h1>
                <br/>
                <br/>
                <p style={{ padding:'40px',width:'700px', fontSize:'20px', textAlign:'justify'}}>
                Welcome to our cutting-edge Event Management Application, where seamless event planning meets intuitive organization! Elevate your event planning experience with our user-friendly platform designed to simplify every aspect of your event, from inception to execution. Whether you're organizing corporate conferences, weddings, or social gatherings, our application offers a comprehensive suite of tools to streamline tasks, manage guest lists, coordinate schedules, and track budgets effortlessly. With real-time collaboration features, you can ensure everyone involved is on the same page, making teamwork a breeze. From quick requirements assessment to dynamic event analysis and design, our application ensures a smooth journey from concept to celebration. Revolutionize your event planning process today – join us and turn your vision into a flawless reality. Sign up now for a trial and discover a new era of stress-free event management!
make it more catchy 
                </p>

        </div>
            <div className='gallery' style={{height:'800px', paddingTop:'40px'}}>
            <h1 style={{fontSize:'80px', textAlign:'center', color:'black'}}>Gallery</h1>
            <div>

            <Gallery/>
            </div>

            </div>
            {/* <footer > */}
        <div style={{marginTop:'300px'}}>
                <Footers />
                </div>
            {/* </footer> */}

            {/* <div className='eventslist'>
                <Alleventcard/>
            </div> */}
        </div>
    )
}