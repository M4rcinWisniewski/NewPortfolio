import { useState } from 'react';
import './App.css';
import { themeLight, themeDark } from './components/Nav';
import Nav from './components/Nav';
import { Paper, ThemeProvider, CssBaseline } from "@mui/material"; // Import CssBaseline
import Landing from './components/Landing';
import data from './data/projects';
import Project from './components/project';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(true);
  
  const handleTheme = () => {
    setTheme(!theme);
  }
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
  
  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
      <CssBaseline /> {/* Add CssBaseline to reset default styles */}
      <Paper sx={{ width: '100%', height:'auto', borderRadius: '0' }} className="App"> {/* Remove explicit height */}
        <Nav theme={theme} handleTheme={handleTheme} />
        <Landing />
        {projects}
        <Footer />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
