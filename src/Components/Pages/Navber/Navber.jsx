import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navber = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localtheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localtheme);
  }, [theme]);

  const handleLogOut = () => {
    logOutUser().then(toast.success("Log out successfull")).catch();
  };

  const navItems = (
    <>
    
      <li className="group flex  cursor-pointer flex-col">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-sky-500 font-semibold "
              : "font-semibold hover:scale-105"
          }
          to="/"
        >
          {" "}
          Home
        </NavLink>{" "}
        <span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
      </li>

      <li className="group flex  cursor-pointer flex-col">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-sky-500 font-semibold "
              : "font-semibold hover:scale-105"
          }
          to="/viewPost"
        >
          {" "}
          Need_Volunteer{" "}
        </NavLink>{" "}
        <span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
      </li>

      <li className="group flex  cursor-pointer flex-col">
        <div className="font-semibold hover:scale-105">
          {/* dropdown  */}

          <div className="dropdown dropdown-right">
            <div tabIndex={0} role="" className="">
              My Profile
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[10]  p-2 shadow bg-blue-950 rounded-box w-52 flex flex-col border"
            >
              <li className=" text-white">
                <Link to="/addVolunterPost">AddVolunterPost</Link>
              </li>
              <li className=" text-white">
                <Link to="/managePost">Manage My Post</Link>
              </li>
            </ul>
          </div>
        </div>{" "}
        <span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
      </li>

      <li className="group flex  cursor-pointer flex-col">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-sky-500 font-semibold "
              : "font-semibold hover:scale-105"
          }
          to="/volunteerPage"
        >
          {" "}
          My Volunteer Request
        </NavLink>{" "}
        <span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
      </li>


    </>
  );

  return (
    <div>
      <div className="navbar bg- shadow-xl shadow-slate-400">
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
              className="menu menu-sm  dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">Volunteer Management</a>
           */}
          <img className="w-14 lg:ml-10 lg:block hidden" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="lg:gap-10 menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end mr-5">
          <div className="mr-10">
            <label onClick={handleToggle} className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          {user ? (
            <div
              className="lg:block hidden dropdown dropdown-end tooltip  tooltip-left"
              data-tip={`${user.displayName}`}
            >
              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="" src={user?.photoURL} />
                  <div>
                    <button className="btn"></button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Sign Out</span>
              </span>
            </button>
          ) : (
            <Link to="/login">
              <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">Login</span>
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
