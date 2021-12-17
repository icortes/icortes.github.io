import { Grid, createTheme, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={24}>
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
      </Paper>
    </ThemeProvider>
  );
}

export default App;
