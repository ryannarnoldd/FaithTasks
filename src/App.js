import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


import Navbar from './components/Navbar';
import Daily from './pages/Daily';
import Task from './pages/Task';
import Home from './pages/Home';
import About from './pages/About';

function App() {


  return (
    <Router basename={'/FaithTasks'}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/about" element={<About />} />
          <Route path="/task/:date?" element={ <Task /> } />

          {/* <Route path="/:year" element={<h1 style={{ color: 'red' }}>Year</h1>} />
          <Route path="/:year/:month" element={<h1 style={{ color: 'red' }}>Month</h1>} /> */}
          {/* <Route path="/:year/:month/:day" element={/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
