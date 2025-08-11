import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="py-4 px-6 flex justify-between items-center w-full relative"
      id="Header"
    >
      <Link
        to="/"
        className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-900 transition cursor-pointer max-w-[70%] sm:max-w-full"
      >
        Business Organisation
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
