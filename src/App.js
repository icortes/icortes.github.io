import { Grid, createTheme, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';


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
        style={{ width: '100%', height: '100%', overflow: 'auto' }}
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
              <Route exact path='/' element={<HomePage />} />
            </Routes>
            <Footer />
          </Grid>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
