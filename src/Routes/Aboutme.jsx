import { Box } from "@mui/material"
import { useEffect, useState } from "react";
import prof from '../images/prof1.png'
import { useTranslation } from "react-i18next";
// import {IconButton} from "@mui/material";
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

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
      const {t} = useTranslation()
    return (
        <Box style={{display:'flex', alignItems:'center', height: '100vh', justifyContent: 'center', flexWrap: 'wrap-reverse'}}>
            <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems:'center',  height: '90vh', marginLeft: '5vw', marginRight: '5vw'}}>
            <h1 className="fade-in"  style={{ textAlign: 'center', fontSize: '220%',}}>{t("I'm a.1")} <mark style={{ backgroundColor: color, transition: '1s' }}>{t("programer.1")}</mark>, {t("chess player and boxer.1")}
                
            </h1>
                <p className={`fade-in-p`} style={{minWidth: '300px', width: '35vw', color: '#606060', textAlign: 'justify'}}>
                    {t("paragraph.1")}</p>
                {/* <IconButton className={`fade-in-icon`} sx={{ '&:hover': { transform: 'translate(0px, 15px)', transition: '.5s ease-in-out' } }}>
                    <ArrowDownwardIcon />
                </IconButton> */}
            </div>
            <img className="fade-in-p" src={prof} alt="" style={{width: '25vw', minWidth: '300px',}} />
        </Box>
    )
}

export default AboutMe