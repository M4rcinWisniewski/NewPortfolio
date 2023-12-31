import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
// import data from '../data/projects'
// import Autoplay from 'embla-carousel-autoplay'

const Project = (props, theme) => {
    const [isHover, setIsHover] = useState(false);


    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <Box
            id="projects"

            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: '1s ease',
                width: 'auto',
                flexWrap: 'wrap',
                margin:'1vw'
            }}
        >
            <a href={props.link} style={{textDecoration:'none', color:'inherit', textAlign:'center'}}><Card sx={{ 
                maxWidth: 690, 
                width:'25vw', 
                minHeight:'190px', 
                height:'auto',
                '&:hover':{
                    boxShadow: '0px 10px 24px 0px rgba(66, 68, 90, .8)'
                } ,
                borderRadius: '10px'
            }}             
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>

                    {isHover ? (
                        <CardContent
                            style={{
                                opacity: isHover ? 1 : 0,
                                transition: 'opacity 0.3s ease',
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'flex', // Display the content container
                                flexDirection: 'column', // Align content vertically
                                height:'100%',
                                
                            }}
                        >
                            <Typography gutterBottom variant="h5" component="div">
                                {props.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.DescriptionEn}
                            </Typography>
                        </CardContent>
                    ) : (
                        <CardMedia

                            component="img"
                            image={props.img}
                            // aria-label="Siema"
                            alt="green iguana"
                            style={{
                                opacity: isHover ? 0 : 1,
                                transition: 'opacity 0.3s ease',
                                objectFit:'cover',
                                borderRadius: '10px'
                            }}
                        />
                    )}
         
            </Card></a>
        </Box>
    );
};

export default Project;
