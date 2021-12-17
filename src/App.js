import { useTheme, Grid } from '@mui/material';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import { ColorModeContext } from './components/ColorMode';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Router>
      <AppBar />
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'>
        <Routes>
          <Route exact path='/' element={<AboutMe />} />
        </Routes>
        <Footer />
      </Grid>
    </Router>
  );
}

export default App;
