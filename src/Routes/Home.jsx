
import Landing from '../components/Landing';
import Project from '../components/project';
import data from '../data/projects';
import Services from '../components/services';
import { Typography, Box } from '@mui/material';
import { useTranslation } from "react-i18next";
const Home = ({ theme, isValue}) => {
  const {t} = useTranslation();
    const projects = data.map(item => {
        return(
          <Project 
            isValue={isValue}
            theme={theme} 
            key={item.key}
            title={item.title}
            img={item.img}
            link={item.link}
            DescriptionEn={item.DescriptionEn}
            DescriptionPl={item.DescriptionPl}
          />
        )
      })
      return(
    <home>
        <Landing theme={theme}/>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', marginBottom:'20vh'}}>
        <Typography sx={{fontSize:'2.5rem', fontWeight:'600'}}>{t('Projects.1')}</Typography>
        <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap: '15vw', marginTop:'10vh'}}>
          
          {projects }
        </Box>
        </Box>
        <Services theme={theme}/>
        
        
        
    </home>)
}

export default Home