import { useState } from 'react';
import './App.css';
import { themeLight, themeDark } from './components/Nav';
import { Paper, ThemeProvider, CssBaseline } from "@mui/material"; // Import CssBaseline
import Nav from './components/Nav';
import Home from './Routes/Home'
import AboutMe from './Routes/Aboutme';
import { Route } from 'wouter';
import Contact from './Routes/Contact';
import Footer from './components/Footer';


function App() {
  const [theme, setTheme] = useState(true);
  
  const handleTheme = () => {
    setTheme(!theme);
  }

  
  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
      <CssBaseline /> {/* Add CssBaseline to reset default styles */}
      <Paper sx={{ width: '100%', height:'auto', borderRadius: '0' }} className="App"> {/* Remove explicit height */}
        <Nav theme={theme} handleTheme={handleTheme} />
        <Route path='/' component={Home}/>
        <Route path='/about' component={AboutMe}/>
        <Route path='/contact' component={Contact}/>
        <Footer />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
