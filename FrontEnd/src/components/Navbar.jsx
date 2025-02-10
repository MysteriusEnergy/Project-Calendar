import { Link } from "react-router-dom";
import { useAuth } from "../context/AuhtContext";

function Navbar() {
  const { signOut } = useAuth();

  return (
    <nav className="bg-zinc-900 my-3 flex justify-between items-center py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold text-white">Live Matches</h1>
      <ul className="flex gap-x-2">
        <li>
          <Link to="/profile" className="text-white hover:text-blue-300">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/" onClick={signOut} className="text-white hover:text-blue-300">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;