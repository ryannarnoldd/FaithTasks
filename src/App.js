import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


import Navbar from './components/Navbar';
import Daily from './pages/Daily';
import History from './pages/History';
import Home from './pages/Home';
import About from './pages/About';

function App() {


  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="*" exact={true} element={<Home />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/about" element={<About />} />
          <Route path="/history/:date?" element={ <History /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 