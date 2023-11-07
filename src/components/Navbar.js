import '../style.scss';

const Navbar = () => {

  return (
    <nav>
      <a href="/">Faith Tasks</a>
      <div className="links">
        <a href="history">Random</a>
        <a href="about">About</a>
        <a href="you">You</a>
      </div>
    </nav>
  );
};

export default Navbar;