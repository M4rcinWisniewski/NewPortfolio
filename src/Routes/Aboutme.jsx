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
        <Box style={{display:'flex', alignItems:'center', height: '100vh', justifyContent: 'center', gap: '10vw' }}>
            <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems:'center'}}>
            <h1 className="fade-in"  style={{width: '40vw', textAlign: 'center', fontSize: '2.5rem',}}>I'm a programer, chess player and    <mark style={{ backgroundColor: color, transition: '1s' }}>
                boxer
                </mark>
            </h1>
                <IconButton className={`fade-in-p`} sx={{ '&:hover': { transform: 'translate(0px, 15px)', transition: '.5s ease-in-out' } }}>
                    <ArrowDownwardIcon />
                </IconButton>
            </div>
            <img className="fade-in" src={prof} alt="" style={{width: '25vw'}} />
        </Box>
    )
}

export default AboutMe