import React from "react";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-11/12 mx-auto">
        <div className="navbar-start">
          <a className="text-2xl text-orange-600 font-bold uppercase p-0">
            Knowledge
            <span className="text-teal-600 text-3xl">C</span>
            afe
          </a>
        </div>
        <div className="navbar-end">
          <a className="btn btn-accent text-white text-sm">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
