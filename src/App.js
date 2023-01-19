import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


import Navbar from './components/Navbar';

import Home from './pages/Home';
import History from './pages/History';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="*" exact={true} element={<Home />} />
          <Route path="/history" element={ <History /> } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;