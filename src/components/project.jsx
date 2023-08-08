import { Box, Modal, Backdrop, } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useState, useEffect } from "react";
import '../App.css'

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

const Project = props => {
    const [color, setColor] = useState(getRandomColor());
    const [image, setImage] = useState(false)
    const toggleImage = () => {
        setImage(prevImage => !prevImage)
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
          const newColor = getRandomColor();
          setColor(newColor);
        }, 3000);
          return () => clearInterval(intervalId);
        }, []);

    return (
        <>
            <section
                id='section'
                style={{
                    width: '100%',
                    // marginRight: '15px',
                    padding: '15vw', // Reset padding
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingBottom: '30vh',
                }}
            >
                <Box sx={{ display: 'flex' , flexDirection:'row', justifyContent:'center', alignItems:'center', gap:' 15vh'}} id='projects'>
                    <Box sx={{ textAlign: 'left' }} id='Box2'>
                        <h3 style={{ fontSize: '2.5rem' }}>{props.title}</h3>
                        <p id='desc'style={{ fontSize: '1.5rem' }}>{props.description}</p>
                        <a id='socials' href='https://github.com/M4rcinWisniewski/chess/tree/main' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', textAlign:'center' }}>
                            {props.link}
                            <ArrowOutwardIcon />
                        </a>
                    </Box>
                    <img
                        id="socials"
                        className="img"
                        src={props.img}
                        alt=''
                        onClick={toggleImage} // Open the image when clicked
                        style={{ width: '55%', cursor: 'pointer', filter:`drop-shadow(5px 5px 4px ${color})`, transition:'1s'}}
                    />
                </Box>
            </section>

            {/* Modal to display enlarged image */}
            <Modal
                open={image}
                onClose={toggleImage}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                // Disable transitions for the modal content
                TransitionProps={{
                    disableTransition: true,
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', zIndex:'10000000000000'}}>
                    <img
                        src={props.img}
                        alt=''
                        style={{ maxWidth: '80%', maxHeight: '80vh', cursor: 'pointer', margin: '20px' }}
                        onClick={toggleImage} // Close the image when clicked
                    />
                </div>
            </Modal>
        </>
    );
};

export default Project;