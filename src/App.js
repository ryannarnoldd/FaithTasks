import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


import Navbar from './components/Navbar';
import Daily from './pages/Daily';
import Home from './pages/Home';
import About from './pages/About';

function App() {


  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/FaithTasks" element={<Home />} />
          <Route path="/FaithTasks/daily" element={<Daily />} />
          <Route path="/FaithTasks/about" element={<About />} />
          {/* <Route path="/:year" element={<h1 style={{ color: 'red' }}>Year</h1>} />
          <Route path="/:year/:month" element={<h1 style={{ color: 'red' }}>Month</h1>} />
          <Route path="/:year/:month/:day" element={<h1 style={{ color: 'red' }}>Month</h1>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
