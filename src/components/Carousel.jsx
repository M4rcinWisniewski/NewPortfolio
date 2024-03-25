import { IconButton, Box} from "@mui/material";
import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const width = 52
const minWidth = 350



const Carousel = ({ slides}, {theme}, props) => {

  const styles = {
    carouselContainer: {
      overflow: 'hidden',
      position: 'relative',
      width: `${width}vw`,
      minWidth: `${minWidth}px`,
      borderRadius: '7px'
    },
    absoluteContainer: {
      position: 'absolute',
      top: 0,
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      
      fontSize: '1.5rem', // Adjust the font size accordingly
    },
    Size: {
      fontSize:`160%`,
      padding: '2px',
      
    },
    absoluteBottomContainer: {
      position: 'absolute',
      bottom: 0,
      paddingY: '.5vw', // Adjust the padding accordingly
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem', // Adjust the gap accordingly
      width: '100%',
    },
    button: {
      color: theme,
      transition: '.3s',
      '&:hover': {
        color: '#EB7777'
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems:'left',
      margin:'.5vw',
    },

    
  };

  
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const newColor = getRandomColor();
  //     setColor(newColor);
  //   }, 3000);
  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const previous = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  
  return (
  <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
    <IconButton sx={styles.button} onClick={previous}>
      <ArrowBackIosIcon sx={styles.Size}/>
    </IconButton>
    <div style={styles.carouselContainer}>
      <div
        className={styles.flexContainer}
        style={
          {
            display: 'flex',
            transition: 'all 0.3s ease-out', // Adjust the timing function and duration accordingly
            duration: 700,
            width: `${slides.length * 100}%`,
            transform: `translateX(-${(100 / slides.length) * current}%)`, // Adjust the duration accordingly
          }}
      >
      {slides.map((slide, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <img
            src={slide[0]} // Accessing the image in the sub-array
            alt={`slide-${index}`}
            style={{ width: `${width}vw`, height: '100%', minWidth: `${minWidth}px`}}
          />
          <p style={{
            textAlign:'center',
            marginTop:'5vh',
            marginBottom:'5vh',
            top:'60%',
            fontSize:'1.5rem',
            position: 'absolute',
            fontWeight:'500'
          }}></p>
        </div>
      ))}

      </div>
      

 


      <div style={styles.absoluteBottomContainer}>
        {slides.map((_, i) => (
          <><div
            onClick={() => {
              setCurrent(i);
            }}
            key={"circle" + i}
            style={{
              borderRadius: '50%',
              width: '8px', // Adjust the width accordingly
              height: '8px', // Adjust the height accordingly
              cursor: 'pointer',
              marginBottom:'1vh',
              backgroundColor: i === current ? '#EB7777' : 'gray',
            }}
            
          ></div>
          </>
        ))}


      </div>
      
    </div>
        <IconButton sx={styles.button} onClick={next}>
            <ArrowForwardIosIcon sx={styles.Size}/>
        </IconButton>
    </Box>
  );
};

export default Carousel;
