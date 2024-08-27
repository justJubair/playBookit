import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="lg:text-primaryYellow">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-secondaryPink" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="lg:text-primaryYellow">
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "text-secondaryPink" : "")}
        >
          Services
        </NavLink>
      </li>
      <li className="lg:text-primaryYellow">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "text-secondaryPink" : "")}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="absolute z-10 top-0 navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn text-white btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="#fff"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="matemasie-regular text-primaryYellow ml-2">
          Play<span className="text-secondaryPink">Bookit</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 font-bold">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};
export default Navbar;
