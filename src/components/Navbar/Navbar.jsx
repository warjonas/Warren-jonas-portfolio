import React from 'react'
import './Navbar.scss'
import { images } from '../../constants';

import { HiMenuAlt4, HiX } from 'react-icons/hi'
import {motion} from 'framer-motion'
import { useState } from 'react';
import resume from '../../assets/WarrenJonasResume.pdf'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const onResumeClick = () => {
        fetch('WarrenJonasResume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Warren Jonas - Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <nav className='app__navbar'>
            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo" />
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skills','contact'].map((item) => (
                    <li key={`link-${item}`} className='app__flex p-text'>
                        <div/>
                            <a href={`#${item}`}>{item}</a> 
                        
                    </li>
                ))}
            </ul>

            <a className='app__navbar_resume' href={resume} target="_blank" >
                <p>Resume</p>

            </a>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                
                {
                    toggle && (
                        <motion.div                        
                            whileInView={{ x: [300, 0] }}
                            transition={{duration:0.85, ease: 'easeOut'}}                            
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul>
                               {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                <li key={item}>                                    
                                       <a href={`#${item}`} onClick={() => setToggle(false)}>
                                           {item}
                                       </a>                                    
                                </li>
                               ))}                                
                            </ul>
                            
                        </motion.div>
                    )
                }
            </div>
          
        </nav>
    
    );
}

export default Navbar
