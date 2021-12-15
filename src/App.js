import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route exact path='/' element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
