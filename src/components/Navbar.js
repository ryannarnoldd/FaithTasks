import React from 'react';
// import DateDropdown from './DateDropdown';
import '../style.css';

const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <a href="/">God Tasks</a>
      <div>
        <a href="/daily">Daily</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;