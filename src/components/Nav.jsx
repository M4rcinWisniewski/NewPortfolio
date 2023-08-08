import GitHubIcon from '@mui/icons-material/GitHub';
import {React, useState, useEffect} from 'react';
import { Box, createTheme} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { Margin } from '@mui/icons-material';
export const themeLight = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#FFFFFF'
      }
    }
  });
  
  export const themeDark = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1e1e1e'
      }
    }
  });


export default function Nav({ theme, handleTheme }) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1300);
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
      setIsOpen(!isOpen)
    }
    useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth < 1300);
          setIsOpen(false)
        };
            // Add event listener to track window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
        padding:'2vw'
      }}
    >
      {isSmallScreen ? <MenuIcon onClick={handleClick}/>
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
        <li id='li1'>MAIN PAGE</li>
        <li>ABOUT ME</li>
        <li>CONTACT</li>
      </ul> 
      }
      {isOpen ? <ul
          id='ul'
          style={{
            position: 'fixed',
            top: '23%',
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
            padding: '5vh 0', // Adjust vertical padding
            zIndex: '999', // Adjust the z-index as needed
          }}
        >
        <li id='li1'>MAIN PAGE</li>
        <li>ABOUT ME</li>
        <li>CONTACT</li>
      </ul> : null}
      
        <Box
        sx={{
          justifySelf: 'right',
          display:'flex',
          alignItems: 'center',
          gap:'2vw'
        }}>
        <a href='https://github.com/M4rcinWisniewski' style={{color: 'inherit'}} ><GitHubIcon id='socials'/></a>
        <a href='https://www.linkedin.com/in/marcin-wi%C5%9Bniewski12/' style={{color: 'inherit'}} ><LinkedInIcon id='socials'/></a>
        <p style={{color: 'inherit'}} onClick={handleTheme} id='socials' >
            {theme ? <Brightness4Icon sx={{color: 'black'}}/> : <Brightness7Icon />}
        </p>
      </Box>
    </Box>
  );
}