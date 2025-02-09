import '../style.scss';

// import { fetchRandomTask } from '..utils/Utils.js';

const Navbar = () => {
  // const { date } = fetchRandomTask();

  return (
    <nav>
      <a href="/">Faith Tasks</a>
      <div className="links">
        <a href={"12-31-25"}>Random</a>
        <a href="about">About</a>
        <a href="you">You</a>
      </div>
    </nav>
  );
};

export default Navbar;