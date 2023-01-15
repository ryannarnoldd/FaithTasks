import '../style.scss';

const Navbar = () => {

  return (
    <nav>
      <a href="/">Faith Tasks</a>
      <div className="links">
        {/* <a href="daily">Daily</a> */}
        {/* <a href="history">History</a> */}
        <a href="about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;