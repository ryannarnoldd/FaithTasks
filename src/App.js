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
        <Route path="/daily" component={Daily} />
      </Routes>
    </Router>
  );
}

export default App;
