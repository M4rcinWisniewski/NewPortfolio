import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

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
                // margin: '10vh',
                transition: '1s ease',
                width: 'auto',
                flexWrap: 'wrap'
            }}
        >
            <Card sx={{ maxWidth: 345, width:'300px', height:'149px', }}             
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
                                height:'100%'
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
                            aria-label="Siema"
                            alt="green iguana"
                            style={{
                                opacity: isHover ? 0 : 1,
                                transition: 'opacity 0.3s ease',
                                objectFit:'cover'
                            }}
                        />
                    )}
         
            </Card>
        </Box>
    );
};

export default Project;
