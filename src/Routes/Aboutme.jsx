import { Box } from "@mui/material"
import { useEffect, useState } from "react";
import prof from '../images/prof1.png'
import skills from '../images/Let_me_do_a_simple_bussiness_website_for_you___3_-removebg-preview (1).png'
import { useTranslation } from "react-i18next";
import { Typography} from "@mui/material";


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
      <Box sx={{ display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', gap:'10vh',}}>
        <Box style={{display:'flex', alignItems:'center', height: 'auto', justifyContent: 'center', flexWrap: 'wrap-reverse', gap: '5vh' }}>
          <br></br>
          <br></br>
          <br></br>
            <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems:'center',  height: '90vh', marginLeft: '5vw', marginRight: '5vw',  }}>
            <h1 id='h1' className="fade-in-p" style={{ textAlign: 'center', fontSize: '220%',}}>{t("I'm a.1")} <mark style={{ backgroundColor: color, transition: '1s', }}>{t("programer.1")}</mark>, {t("chess player and boxer.1")}
                
            </h1>
                <p className={`fade-in-p`} style={{minWidth: '300px', width: '35vw', color: '#606060', textAlign: 'justify'}}>
                    {t("paragraph.1")}</p>
            </div>
            <img  id='img-small'className="fade-in" src={prof} alt="" style={{width: '25vw', minWidth: '300px',}} />
        </Box>
        <Box sx={{display:'flex', alignItems:'center', height: 'auto', justifyContent: 'center', marginLeft: '15vw', marginRight: '15vw', flexWrap: 'wrap', gap: '15vh', flexDirection: 'column'}}>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginLeft: '5vw', marginRight: '5vw',  }}>
          <Typography variant="h1" sx={{ fontSize: '220%', textAlign: 'center'}}>{t("programer.2")}</Typography>
            <p style={{minWidth: '300px', width: '35vw', color: '#606060', textAlign: 'justify'}}>{t("paragraph.2")}
            </p>
          </Box>
          <img src={skills} alt="" style={{width: '60vw', maxWidth: '300px', }}/>
        </Box>
      </Box>
    )
}

export default AboutMe