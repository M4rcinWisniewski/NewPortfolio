import { useState } from 'react';
import './App.css';
import { themeLight, themeDark } from './components/Nav';
import { Paper, ThemeProvider, CssBaseline} from "@mui/material"; // Import CssBaseline
import Nav from './components/Nav';
import Home from './Routes/Home'
import AboutMe from './Routes/Aboutme';
import { Route, Switch } from 'wouter';
import Contact from './Routes/Contact';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';


const NotFound = () => <div><PageNotFound /></div>;



function App() {
  const [theme, setTheme] = useState(true);
  
  
      // const [color, setColor] = useState(getRandomColor());

  const handleTheme = () => {
    setTheme(!theme);
  }

  const HomePage = () => <div><Home theme={theme} /></div>
  const AboutMePage = () => <div><AboutMe theme={theme} /></div>
  const ContactPage = () => <div><Contact theme={theme} /></div>

  
  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
      <CssBaseline /> {/* Add CssBaseline to reset default styles */}
      <Paper sx={{ width: '100%', height:'auto', borderRadius: '0' }} className="App"> {/* Remove explicit height */}
        <Nav theme={theme} handleTheme={handleTheme} />
        <Switch>
          <Route path='/' component={HomePage}/>
          <Route path='/about' component={AboutMePage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/404' component={NotFound} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
