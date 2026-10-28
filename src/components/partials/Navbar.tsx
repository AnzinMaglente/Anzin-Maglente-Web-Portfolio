import { useEffect, useState } from "react";
import { AccountCircle, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

import logo from "../../assets/sneakspeak_logo.png";

// Navbar for the entire website.
export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-10 py-4 bg-slate-900/80 backdrop-blur-md shadow-sm">
      {/* Logo and Website Name */}
      <Link to={"/"}>
        <div className="flex items-center gap-2 text-2xl font-semibold cursor-pointer hover:opacity-80 transition">
          <img className="h-8 w-50" src={logo} />
        </div>
      </Link>
      {isAuthenticated ? (
        <>
          {/* Navbar with User */}
          <div className="flex items-center gap-10 text-white-text">
            <Link to={"/admin"}>
              <button className="w-10 h-10 px-4 cursor-pointer">
                <Menu fontSize="large" />
              </button>
            </Link>
            <Link to={"/profile"}>
              <button className="w-10 h-10 px-4 cursor-pointer">
                <AccountCircle fontSize="large" />
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          {/* Navbar without user */}
          <div className="flex items-center gap-4 cursor-pointer">
            <Link to={"/login"}>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
            <Link to={"/signin"}>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Get Started
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
