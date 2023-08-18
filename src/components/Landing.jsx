import { Box, Button, Typography } from "@mui/material";
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
        <Box sx={{display:'flex', gap:'10px', }}>
          <Box sx={{width:'100px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1',
            height:'35px',background: '#f0804f', borderRadius: '77% 24% 70% 30% / 58% 41% 57% 43%    ', '&:hover': {
              
            }}}>
            <Typography>HTML</Typography>
          </Box>
          <Box sx={{width:'100px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1',
             height:'35px', borderRadius: '31% 73% 12% 88% / 38% 73% 32% 61%    ', background:'#5788fa', cursor:'pointer'}}>
            <Typography>CSS</Typography>
          </Box>
          <Box sx={{width:'100px', borderRadius: '99% 8% 12% 59% / 34% 11% 83% 46%   ', background:'#f0db4f',display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1',
             height:'35px'}}>
            <Typography>JavaScript</Typography>
          </Box>
          <Box sx={{width:'100px', background:'#61dbfb', borderRadius:'43% 50% 12% 89% / 38% 90% 6% 83%  ', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1',
             height:'35px'}}>
            <Typography>React</Typography>
          </Box>
        </Box>
        <br/>
        <Button variant="outlined" sx={{
          color: 'inherit', 
          bgcolor:'#EB7777',
          transition:'.3s',
          fontWeight:'600',
          width:'430px',
          '&:hover': {
             
            outline:'1px solid #EB7777',
            }}} >{t("check")}</Button>
      </Link>
    </Box>
    </Box>
    
  )
}

export default Landing;
