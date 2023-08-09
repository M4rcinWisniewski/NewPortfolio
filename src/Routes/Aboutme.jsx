import { Box } from "@mui/material"
import { useEffect, useState } from "react";
import prof from '../images/prof1.png'
import {IconButton} from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        if (i === 0) {
          color += '89ABCDEF'[Math.floor(Math.random() * 8)]; // Higher red component
        } else {
          color += letters[Math.floor(Math.random() * 16)];
        }
      }
    return color;
  };
const AboutMe = () => {
    const [color, setColor] = useState(getRandomColor());
    useEffect(() => {
        const intervalId = setInterval(() => {
          const newColor = getRandomColor();
          setColor(newColor);
        }, 3000);
        return () => clearInterval(intervalId);
      }, []);
    return (
        <Box style={{display:'flex', alignItems:'center', height: '100vh', justifyContent: 'center', flexWrap: 'wrap-reverse'}}>
            <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems:'center',  height: '90vh', marginLeft: '5vw', marginRight: '5vw'}}>
            <h1 className="fade-in"  style={{ textAlign: 'center', fontSize: '220%',}}>I'm a <mark style={{ backgroundColor: color, transition: '1s' }}>programer</mark>, chess player and    
                boxer
                
            </h1>
                <p className={`fade-in-icon`} style={{minWidth: '300px', width: '35vw', color: '#606060',}}>
                    I am a versatile individual with a passion for diverse pursuits. As an amateur boxer, 
                    i'm embrace the physical challenges of the sport and channel my determination into honing my skills within the ring. Beyond these endeavors, 
                    my semi-professional status as a chess player speaks to my strategic thinking and ability to foresee multiple moves ahead. 
                    The combination of my athletic pursuits, 
                    and strategic mindset paints a picture of a well-rounded individual who thrives on challenges in both the digital and physical realms</p>
                <IconButton className={`fade-in-icon`} sx={{ '&:hover': { transform: 'translate(0px, 15px)', transition: '.5s ease-in-out' } }}>
                    <ArrowDownwardIcon />
                </IconButton>
            </div>
            <img className="fade-in-p" src={prof} alt="" style={{width: '25vw', minWidth: '300px',}} />
        </Box>
    )
}

export default AboutMe