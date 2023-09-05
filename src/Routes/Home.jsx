
import Landing from '../components/Landing';
import Project from '../components/project';
import data from '../data/projects';
import Services from '../components/services';
import { Typography, Box, Stack } from '@mui/material';
import { useTranslation } from "react-i18next";
  import useEmblaCarousel from 'embla-carousel-react'
  import Autoplay from 'embla-carousel-autoplay'
  
const Home = ({ theme, isValue}) => {
  

  
  const {t} = useTranslation();
  const autoplayOptions = {
    delay: 5000,
    jump: false,
    align: 'center',
    
  }
  const [emblaRef] = useEmblaCarousel({loop:false},  [Autoplay(autoplayOptions)])
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
        {window.innerWidth <= 977 && 
          <Box ref={emblaRef} sx={{display: 'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap: '10vw', marginTop:'10vh'}}>
            <Stack direction="row"  FlexWrap="wrap"  style={{ width: '60vw', margin: 0, display: 'flex', justifyContent: 'left',  flex: '0 0 50%', gap:'5vw'}}>
              {projects }
            </Stack>
          </Box>}
          {window.innerWidth > 977 &&
            <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap: '10vw', marginTop:'10vh'}}>
              
                {projects }

            </Box>}
        </Box>
        <Services theme={theme}/>
        
        
        
    </home>)
}

export default Home

