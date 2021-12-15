import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route exact path='/' component={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
