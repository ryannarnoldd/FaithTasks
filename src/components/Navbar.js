import '../style.css';

const Navbar = () => {

  return (
    <nav>
      <a href="/FaithTasks/">Faith Tasks</a>
      <div className="links">
        <a href="/FaithTasks/daily">Daily</a>
        <a href="/FaithTasks/history">History</a>
        <a href="/FaithTasks/about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;