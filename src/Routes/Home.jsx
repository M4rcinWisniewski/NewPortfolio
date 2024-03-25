
import Landing from '../components/Landing';
import Services from '../components/services';
import { Typography, Box} from '@mui/material';
import { useTranslation } from "react-i18next";
// import { Splide} from "@splidejs/react-splide";
import Project from '../components/project'
import '@splidejs/react-splide/css';
  
const Home = ({ theme, isValue}) => {
  


  const {t} = useTranslation();

      return(
    <home>
        <Landing theme={theme}/>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', marginBottom:'20vh'}}>
        <Typography sx={{fontSize:'2.5rem', fontWeight:'600'}}>{t('Projects.1')}</Typography>

       
                  <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center', flexWrap: 'wrap', }}>
                  
{/* {projects} */}
                <Project theme={theme}/>
                </Box>


        </Box>
        <Services theme={theme}/>
        
        
        
    </home>)
}

export default Home

