import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Project = (props, theme) => {
    const [isHover, setIsHover] = useState(false);
    const {t} = useTranslation();
    return (
        <Box
        id="projects"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10vh',
                transition: '1s ease' // Add transition here
            }}
        >
            
            {isHover ? (
                <img
                
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                    style={{ width: '35vw',
                    height: '35vh',
                    minHeight: '300px',
                    minWidth: '300px',
                    transition: '1s',
                    outline:'dashed 4px #EB7777',
                    outlineOffset: '.5vw', 
                objectFit:'contain',
            cursor:'pointer'}}
                    src={props.img}
                    alt=""
                />
            ) : (
                <Box
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                    sx={{
                        flexDirection: 'column',
                        width: '35vw',
                        minWidth: '300px',
                        height: '35vh',
                        background: 'rgba(218,86,86,.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transition: '1s',
                        
                    }}
                >
                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: '2rem',
                            fontWeight: '600',
                            textAlign:'center'
                        }}
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        sx={{
                            color: '#363535',
                            fontSize: '1rem',
                            fontWeight: '500'
                        }}
                    >
                        {t("Hover")}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default Project;
