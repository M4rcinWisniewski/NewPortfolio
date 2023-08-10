
import Landing from '../components/Landing';
import Project from '../components/project';
import data from '../data/projects';

const Home = () => {
    const projects = data.map(item => {
        return(
          <Project  
            key={item.key}
            title={item.title}
            img={item.img}
            link={item.link}
            description={item.description}
          />
        )
      })
      return(
    <home>
        <Landing />
        {projects}
        
    </home>)
}

export default Home