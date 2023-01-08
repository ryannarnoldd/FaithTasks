import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


import Navbar from './components/Navbar';
import Daily from './pages/Daily';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<a href="/daily">Daily</a>} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/:year" element={<h1 style={{ color: 'red' }}>Year</h1>} />
        <Route path="/:year/:month" element={<h1 style={{ color: 'red' }}>Month</h1>} />
        <Route path="/:year/:month/:day" element={<Daily />} />
      </Routes>
    </Router>
  );
}

export default App;
