import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import History from './pages/History';
import About from './pages/About';
import You from './pages/You';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="*" exact={true} element={<Home />} />
          <Route path="/history" element={ <History /> } />
          <Route path="/about" element={<About />} />
          <Route path="/you" element={<You />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;