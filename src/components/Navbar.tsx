import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/edit">Edit</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;