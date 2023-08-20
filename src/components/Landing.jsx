import { Box, Button } from "@mui/material";
import  reactlogo  from '../images/reactlogo.png';
import  jslogo  from '../images/Jslogo.png'
import csslogo from '../images/csslogo.png'
import html from '../images/html.png'
import mui from '../images/MUI.png'
import React, { useEffect,  useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import '../App.css'; // Import your animation CSS
import gif from '../images/log.gif'
import gifDark from '../images/Developer activity.gif'
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";

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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  

  const styleh = {
    margin: '0',
    
    // textAlign: 'left'
    
}
const stylep = {
    color: '#606060',
    fontSize: '1.5rem',
    // textAlign: 'left'
    
}
useEffect(() => {
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
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
      
      <h1 id='name' className={`fade-in`} style={{ ...styleh, fontSize: screenWidth <= 835 ? '2.5rem' : '3.5rem'}} >
        <mark style={{ backgroundColor: color, transition: '1s',}}>{t('Hello.1')}</mark>, {t("i'm.1")}
      </h1>
      <h1 className={`fade-in`} id='name' style={ {...styleh, fontSize: screenWidth <= 835 ? '2.5rem' : '3.5rem'}}>Marcin Wiśniewski</h1>
      <p className={`fade-in-p`} style={stylep}>{t('A freelance front-end developer.1')}</p>
      
        {/* <IconButton className={`fade-in-icon`} sx={{'&:hover': { transform: 'translate(0px, 15px)', transition: '.5s ease-in-out' } }}>
          <ArrowDownwardIcon />
        </IconButton> */}
        <Box id="button" sx={{display: 'flex', justifyContent:'center', flexDirection: 'column', gap: '30px'}}>

        <Box sx={{display:'flex', gap:'10px', }}>
        <Tooltip
          placement="bottom"
          overlay={<span>HTML 5</span>}>
            <Box sx={{width:'50px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1',
            height:'35px',}}>
            <img src={html} alt="" style={{width: '45px'}}/>
          </Box></Tooltip>
          <Tooltip
          placement="bottom"
          overlay={<span>CSS 3</span>}>
            <Box sx={{width:'50px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1',
             height:'35px', }}>
            <img src={csslogo} alt="" style={{width: '45px'}}/>
          </Box></Tooltip>
          <Tooltip
          placement="bottom"
          overlay={<span>JavaScript</span>}>
            <Box sx={{width:'50px',display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1',
             height:'35px'}}>
            <img src={jslogo} alt="" style={{width: '40px'}}/>
          </Box></Tooltip>
          <Tooltip
          placement="bottom"
          overlay={<span>React</span>}>
            <Box sx={{width:'50px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1',
             height:'35px'}}>
            <img title="react" src={reactlogo} alt="" style={{width: '40px'}}/>
          </Box></Tooltip>
          <Tooltip
          placement="bottom"
          overlay={<span>Material UI</span>}>
            <Box sx={{width:'50px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1',
             height:'35px'}}>
            <img src={mui} alt="" style={{width: '40px'}}/>
          </Box></Tooltip>

        </Box>
        <Link activeClass="active" to="services" spy={true} smooth={true} offset={-110} duration={1000}>
        <Button variant="outlined" sx={{
          color: 'inherit', 
          bgcolor:'#EB7777',
          transition:'.3s',
          fontWeight:'600',
          width:'12vw',
          minWidth:'180px',
          '&:hover': {
             
            outline:'1px solid #EB7777',
            }}} >{t("check")}</Button>
      </Link>
        </Box>
        <br/>

    </Box>
    </Box>
    
  )
}

export default Landing;
