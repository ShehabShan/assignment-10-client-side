import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/team/logo.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successful sign out");
      })
      .catch((error) => {
        console.log("failed to sign out .stay here. dont leave me alone");
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/visas">All Visas</NavLink>
      </li>
      <li>
        <NavLink to="/AddVisa">Add visa</NavLink>
      </li>
      <li>
        <NavLink to="/myAddedVisas">My added visas</NavLink>
      </li>
      <li>
        <NavLink to="/myVisaApplications">My visa Applications</NavLink>
      </li>
    </>
  );
  return (
    <div
      className=" navbar rounded-bl-[60px] rounded-br-[60px]
h-20 text-white bg-gradient-to-r from-[#f4bea4]  to-[#da8adb]"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu z-10 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl ml-5">
          <img className="w-12 rounded-full" src={logo} alt="" />
          <h3 className="text-3xl">Visa Navigation</h3>
        </a>
      </div>

      <div className="navbar-end mr-10">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn">
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link to="/signIn">
              <button className="btn bg-transparent border-none text-white text-xl w-[130px] font-bold ml-6">
                Sign In
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
