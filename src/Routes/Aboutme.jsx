import { Box } from "@mui/material"
import { useEffect, useState } from "react";
import prof from '../images/Aboutme.gif'
import prof2 from '../images/AboutmeDark.gif'
import { useTranslation } from "react-i18next";


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
const AboutMe = ({ theme }) => {
    const [color, setColor] = useState(getRandomColor());
    useEffect(() => {
        const intervalId = setInterval(() => {
          const newColor = getRandomColor();
          setColor(newColor);
        }, 3000);
        return () => clearInterval(intervalId);
      }, []);
      const {t} = useTranslation()
    return (
      <Box sx={{ display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', width:'auto', height:'auto'}}>
        <svg style={{transform: 'scale(1.2)', position:'absolute', top:'0', left:'0', zIndex: '0', overflow:'hidden'}}xmlns="http://www.w3.org/2000/svg" width="90%" height="100%">
          <image   xlinkHref="/llline1.svg" width="100vw" height="100%" />
        </svg>
        <Box style={{display:'flex', alignItems:'center', height: 'auto', justifyContent: 'center', flexWrap: 'wrap-reverse', gap: '5vh', }}>
          <br></br>
          <br></br>
          <br></br>
            <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems:'center',  height: '90vh',  }}>
            <h1 id='h1' className="fade-in-p" style={{ textAlign: 'center', fontSize: '220%',}}>{t("I'm a.1")} <mark style={{ backgroundColor: color, transition: '1s', }}>{t("programer.1")}</mark>, {t("chess player and boxer.1")}
                
            </h1>
                <p className={`fade-in-p`} style={{minWidth: '300px', width: '30vw', color: '#606060', textAlign: 'justify'}}>
                    {t("paragraph.1")}. {t("paragraph.2")}</p>
            </div>
            <img  id='img-small' src={theme ? prof: prof2 } alt="" style={{width: '25vw', minWidth: '300px', zIndex:'0', opacity:'75%'}} />
        </Box>
        
      </Box>
    )
}

export default AboutMe