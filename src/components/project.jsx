import { Box } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";
import data from '../data/projects'
const Project = ({theme}) => {
    const slides = [
      [data.first.img, data.first.title],
      [data.second.img, data.second.title],
      [data.third.img, data.third.title],
      [data.forth.img, data.forth.title],
      [data.fifth.img, data.fifth.title],

    ];
  
    return (
      <Box
        id="projects"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: '1s ease',
          width: '100%', // Set a fixed width or adjust as needed
          flexWrap: 'wrap',
          margin: '1vw',
        }}
      >
        <Carousel slides={slides} theme={theme} />
      </Box>
    );
  };

export default Project;
