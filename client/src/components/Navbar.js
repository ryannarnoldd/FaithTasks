import '../style.scss';

import { fetchRandomTask } from '../Utils';

const Navbar = () => {
  const { date } = fetchRandomTask();

  return (
    <nav>
      <a href="/">Faith Tasks</a>
      <div className="links">
        <a href={date}>Random</a>
        <a href="about">About</a>
        <a href="you">You</a>
      </div>
    </nav>
  );
};

export default Navbar;