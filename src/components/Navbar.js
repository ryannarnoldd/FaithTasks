import React from 'react';
// import DateDropdown from './DateDropdown';
import '../style.css';

const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <a href="/FaithTasks/">God Tasks</a>
      <div>
        <a href="/FaithTasks/daily">Daily</a>
        <a href="/FaithTasks/about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;