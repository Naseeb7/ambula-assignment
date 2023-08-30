import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // Get the current location using useLocation hook from react-router-dom
  const location = useLocation();

  return (
    // Navbar container
    <div className="flex justify-between w-full bg-teal-500 p-2">
      {/* Brand/logo section */}
      <div className="flex text-lg sm:text-2xl font-bold text-zinc-800 p-1">
        Assignment
      </div>
      {/* Navigation links section */}
      <div className="flex justify-around gap-4 p-1 items-center text-zinc-600 text-sm sm:text-lg font-semibold flex-wrap">
        {/* Home link */}
        <Link
          to={"/"}
          className={`${location.pathname === "/" && "text-teal-700"} hover:-translate-y-1 duration-200 hover:text-zinc-800`}
        >
          Home
        </Link>
        {/* About link */}
        <Link
          to={"/about"}
          className={`${location.pathname === "/about" && "text-teal-700"} hover:-translate-y-1 duration-200 hover:text-zinc-800`}
        >
          About
        </Link>
        {/* Contact link */}
        <Link
          to={"/contact"}
          className={`${location.pathname === "/contact" && "text-teal-700"} hover:-translate-y-1 duration-200 hover:text-zinc-800`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
