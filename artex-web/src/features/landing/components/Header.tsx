import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => (
  <div className="flex justify-between items-center px-8 shadow-md">
    <div className="flex justify-between items-center">
      <img src={logo} alt="Artex Logo" className="h-15 w-15 object-contain" />
      <div className="text-left">
        <h1 className="text-2xl font-bold text-sky-950 font-[NotoSerifEthiopic]">
          ARTEX
        </h1>
        <h1 className="text-[10px] text-gray-300 font-[OldStandard]">
          EXPERIENXE ART, EXPERIENCE EXELENCE
        </h1>
      </div>
    </div>

    <nav className="space-x-6">
      <Link to="/" className=" font-bold hover:text-blue-600">
        Home
      </Link>
      <Link to="/explore" className="font-bold hover:text-blue-600">
        Explore
      </Link>
      <Link to="/login" className="font-bold hover:text-blue-600">
        Login
      </Link>
    </nav>
  </div>
);

export default Header;
