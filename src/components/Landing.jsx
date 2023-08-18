import { Box, Button } from "@mui/material";
// import '../../public/llline.svg'
import React, { useEffect,  useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import '../App.css'; // Import your animation CSS
import gif from '../images/log.gif'
import gifDark from '../images/Developer activity.gif'
// import svgbg from "../../public"
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
const Landing = ({theme}) => {
  const [color, setColor] = useState(getRandomColor());
  

  const styleh = {
    margin: '0',
    fontSize: '3.5rem',
    // textAlign: 'left'
    
}
const stylep = {
    color: '#606060',
    fontSize: '1.5rem',
    // textAlign: 'left'
    
}

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColor = getRandomColor();
      setColor(newColor);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  const {t} = useTranslation()
  return (
    
    <Box sx={{display: 'flex', justifyContent: 'center' , alignItems: 'center', flexDirection: 'row-reverse', gap:' 15vw', flexWrap: 'wrap', marginBottom: '10vh'}}>
      <svg style={{transform: 'scale(1)', position:'absolute', top:'10%', left:'0'}}xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <image   xlinkHref="/llline.svg" width="100vw" height="100%" />
      </svg>
    <div style={{background: 'transparent'}}>
      <img className={`fade-in`} id='img-title'style={{width: '25vw', minWidth: '190px', marginBottom: 0}} src={theme ? gif : gifDark} alt=""/> </div>
    <Box id="title" sx={{
      display: 'flex',
      justifyContent:' center',
      alignItems: 'left',
      height: '100vh',
      flexDirection: 'column',
      fontFamily: 'Work Sans, sans-serif',
      
      
      
  }}>
      
      <h1 className={`fade-in`} style={styleh} >
        <mark style={{ backgroundColor: color, transition: '1s',}}>{t('Hello.1')}</mark>, {t("i'm.1")}
      </h1>
      <h1 className={`fade-in`} id='name' style={styleh}>Marcin Wiśniewski</h1>
      <p className={`fade-in-p`} style={stylep}>{t('A freelance front-end developer.1')}</p>
      <Link activeClass="active" to="services" spy={true} smooth={true} offset={-110} duration={1000}>
        {/* <IconButton className={`fade-in-icon`} sx={{'&:hover': { transform: 'translate(0px, 15px)', transition: '.5s ease-in-out' } }}>
          <ArrowDownwardIcon />
        </IconButton> */}
        <Button variant="outlined" sx={{
          color: 'inherit', 
          bgcolor:'#EB7777',
          transition:'.3s',
          borderRadius:'10px',
          fontWeight:'600',
          '&:hover': {
             
            outline:'1px solid #EB7777',
            }}} >{t("check")}</Button>
      </Link>
    </Box>
    </Box>
    
  )
}

export default Landing;
