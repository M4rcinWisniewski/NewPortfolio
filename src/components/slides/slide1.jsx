import data from "../../data/projects";
import { SplideSlide } from "@splidejs/react-splide";
import Project from "../project";

const slide1 = () => {
    const selectedIndex = 0; // Change this index to select a different project

    // Get the data of the selected project
    const selectedProject = data[selectedIndex];
    
    // Map over the projects and create SplideSlides for the selected project
    const projects = data.map((item, index) => (
      <SplideSlide key={item.key}>
        {index === selectedIndex ? ( // Check if it's the selected project
          <Project

            title={selectedProject.title}
            img={selectedProject.img}
            link={selectedProject.link}
            DescriptionEn={selectedProject.DescriptionEn}
            DescriptionPl={selectedProject.DescriptionPl}
          />
        ) : null}
      </SplideSlide>
    ));
    return (
        {projects}
    )
}

export default slide1