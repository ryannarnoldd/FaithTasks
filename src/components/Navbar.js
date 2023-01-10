import '../style.css';

const Navbar = () => {

  return (
    <nav>
      <a href="/FaithTasks/">Faith Tasks</a>
      <div>
        <a href="/FaithTasks/daily">Daily</a>
        <a href="/FaithTasks/random">Random</a>
        <a href="/FaithTasks/about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;