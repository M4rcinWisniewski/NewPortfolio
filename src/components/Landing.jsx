import { Box, IconButton } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React, { useEffect,  useState } from 'react';
import { Link } from 'react-scroll';
import '../App.css'; // Import your animation CSS

export const getRandomColor = () => {
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
const Landing = () => {
  const [color, setColor] = useState(getRandomColor());
  

  const styleh = {
    margin: '0',
    fontSize: '4rem',
    textAlign: 'center'
    
}
const stylep = {
    color: '#606060',
    fontSize: '1.5rem'
    
}

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColor = getRandomColor();
      setColor(newColor);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      justifyContent:' center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      fontFamily: 'Work Sans, sans-serif',
      
      
  }}>
      <h1 className={`fade-in`} style={styleh}>
        <mark style={{ backgroundColor: color, transition: '1s' }}>Hello</mark>, i'm
      </h1>
      <h1 className={`fade-in`} style={styleh}>Marcin Wiśniewski</h1>
      <p className={`fade-in-p`} style={stylep}>A freelance front-end developer</p>
      <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={1000}>
        <IconButton className={`fade-in-icon`} sx={{ '&:hover': { transform: 'translate(0px, 15px)', transition: '.5s ease-in-out' } }}>
          <ArrowDownwardIcon />
        </IconButton>
      </Link>
    </Box>
  )
}

export default Landing;
