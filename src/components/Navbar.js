import '../style.css';

const Navbar = () => {

  return (
    <nav>
      <a href="/">Faith Tasks</a>
      <div>
        <a href="/daily">Daily</a>
        <a href="/random">Random</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;