import { Grid, createTheme, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper
        elevation={24}
        style={{ width: '100%', height: '100vh', overflow: 'auto' }}
        square>
        <Router>
          <AppBar />
          <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='space-between'>
            <Routes>
              <Route exact path='/' element={<AboutMe />} />
              <Route exact path='/portfolio' element={<Portfolio />} />
              <Route exact path='/contact' element={<Contact />} />
              <Route exact path='/resume' element={<Resume />} />
            </Routes>
            <Footer />
          </Grid>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
