import GitHubIcon from '@mui/icons-material/GitHub';
import {React, useState, useEffect} from 'react';
import { Box, createTheme, Select, MenuItem} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import {Link} from 'wouter'
import { useTranslation } from 'react-i18next';
// import {Link as LinkS} from 'react-scroll'
// import { Warning } from '@mui/icons-material';
// import WorkIcon from '@mui/icons-material/WorkOutline';

export const themeLight = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#FFFFFF'
      }}
  //   }, body: {
  //     height: '100vh',
  //     background: `linear-gradient(to right, ${theme.palette.common.black} 50%, ${theme.palette.common.white} 50%)`,
  // },
  });
  
  export const themeDark = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1e1e1e'
      },
    }
  });


export default function Nav({ theme, handleTheme}) {
  const [isValue, setValue] = useState(localStorage.getItem('selectedLanguage') || 'en');
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
    const [isOpen, setIsOpen] = useState(false)
    

    const handleChange = (event) => {
      const selectedValue = event.target.value;
      setValue(selectedValue);
      handleLangChange(selectedValue)
      localStorage.setItem('selectedLanguage', selectedValue)
    };
    const handleClick = () => {
      setIsOpen(!isOpen)
    }
    useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth < 1000);
          setIsOpen(false)
        };
            // Add event listener to track window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const {t, i18n} = useTranslation();
  const handleLangChange = lang => {
    i18n.changeLanguage(lang)
  }
  const menu = isOpen ? <ClearIcon onClick={handleClick} style={{cursor: 'pointer'}}/> : <MenuIcon onClick={handleClick} style={{cursor: 'pointer'}}/> 
  return (
    <Box
      sx={{
        width: '100%',
        height: '10vh',
        backgroundColor:'primary.main',
        position: 'fixed',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:'3.5vw',
        
        
      }}
    >
      {isSmallScreen ? menu
      : <ul
      id='ul'
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '3vw',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '500',
          justifyContent: 'flex-start', // Align the list items to the left
          
          
        }}
      >
        <Link href='/'><li id='li1' >{t('MAIN PAGE.1')}</li></Link>
        <Link href='/about'><li>{t('ABOUT ME.1')}</li></Link>
        <Link href='/contact'><li>{t('CONTACT.1')}</li></Link>
      </ul> 
      }
      {isOpen ? <ul
          id='ul'
          style={{
            position: 'fixed',
            top: '22%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5vh',
            flexDirection: 'column',
            listStyle: 'none',
            width: '110Vw',
            backgroundColor: 'inherit',
            opacity:'80%',
            padding: '5vh 0', // Adjust vertical padding
            zIndex: '999', // Adjust the z-index as needed
          }}
        >
        <Link href='/'><li id='li1' style={{fontWeight: '600'}}>{t('MAIN PAGE.1')}</li></Link>
        <Link href='/about'><li style={{fontWeight: '600'}}>{t('ABOUT ME.1')}</li></Link>
        <Link href='/contact'><li style={{fontWeight: '600'}}>{t('CONTACT.1')}</li></Link>
      </ul> : null}
      
        <Box
        sx={{
          justifySelf: 'right',
          display:'flex',
          alignItems: 'center',
          gap:'2vw'
        }}>
        <div id='socials'><Select
         labelId="demo-simple-select-label"
      
      value={isValue}
      onChange={handleChange}
      label='en'
      variant='standard'
      sx={{padding: '0 10px 0 10px'}}
      
    >

        <MenuItem value='en' >{t("English.1")}</MenuItem>
        <MenuItem value='pl' >{t("Polish.1")}</MenuItem>
    </Select></div>
        <a href='https://github.com/M4rcinWisniewski' style={{color: 'inherit'}} ><GitHubIcon id='socials'/></a>
        <a href='https://www.linkedin.com/in/marcin-wi%C5%9Bniewski12/' style={{color: 'inherit'}} ><LinkedInIcon id='socials' /></a>
        <p style={{color: 'inherit'}} onClick={handleTheme} id='socials' sx={{color: 'black', }}>
            {theme ? <Brightness4Icon sx={{color: 'black', }}/> : <Brightness7Icon />}
        </p>
      </Box>
    </Box>
  );
}