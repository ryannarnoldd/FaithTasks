import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import You from './pages/You';

function App() {
  const href = window.location.href;
  const date = href.split("/").pop();

  const isValidDate = !isNaN(Date.parse(date));

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/:date" element={
            isValidDate ? <Search date={date} /> : <Home />
          } />

          <Route path="/about" element={<About />} />
          <Route path="/you" element={<You />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;