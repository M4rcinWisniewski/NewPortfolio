
import Landing from '../components/Landing';
// import Project from '../components/project';
// import data from '../data/projects';
import Services from '../components/services';
const Home = ({ theme }) => {
    // const projects = data.map(item => {
    //     return(
    //       <Project  
    //         key={item.key}
    //         title={item.title}
    //         img={item.img}
    //         link={item.link}
    //         description={item.description}
    //       />
    //     )
    //   })
      return(
    <home>
        <Landing theme={theme}/>
        <Services theme={theme}/>
        {/* {projects} */}
        
        
    </home>)
}

export default Home