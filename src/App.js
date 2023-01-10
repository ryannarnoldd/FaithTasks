import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


import Navbar from './components/Navbar';
import Daily from './pages/Daily';
import Random from './pages/Random';
// import Home from './pages/Home';
import About from './pages/About';

function App() {


  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Random />} />
          <Route path="daily" element={<Daily />} />
          <Route path="random" element={<Random />} />
          <Route path="about" element={<About />} />
          {/* <Route path="/:year" element={<h1 style={{ color: 'red' }}>Year</h1>} />
          <Route path="/:year/:month" element={<h1 style={{ color: 'red' }}>Month</h1>} />
          <Route path="/:year/:month/:day" element={<h1 style={{ color: 'red' }}>Month</h1>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
