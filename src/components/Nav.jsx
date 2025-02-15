import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 rounded-lg shadow-xl container mx-auto mb-12">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/" className="hover:bg-base-300">
              Home
            </Link>
            <Link to="/listedbook" className="hover:bg-base-300">
              Listed Books
            </Link>
            <Link to="/pagestoread" className="hover:bg-base-300">
              Pages to Read
            </Link>
            <Link to="/wishtoread" className="hover:bg-base-300">
              Wishlist Chart
            </Link>
            <Link to="/interview" className="hover:bg-base-300">
              Author Interviews
            </Link>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Book Vibe
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-500 border p-2 border-green-500 rounded-lg font-bold" : "font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listedbook"
            className={({ isActive }) =>
              isActive ? "text-green-500 border p-2 border-green-500 rounded-lg font-bold" : "font-bold"
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pagestoread"
            className={({ isActive }) =>
              isActive ? "text-green-500 border p-2 border-green-500 rounded-lg font-bold" : "font-bold"
            }
          >
            Pages to Read
          </NavLink>
          <NavLink
            to="/wishtoread"
            className={({ isActive }) =>
              isActive ? "text-green-500 border p-2 border-green-500 rounded-lg font-bold" : "font-bold"
            }
          >
            Wishlist Chart
          </NavLink>
          <NavLink
            to="/interview"
            className={({ isActive }) =>
              isActive ? "text-green-500 border p-2 border-green-500 rounded-lg font-bold" : "font-bold"
            }
          >
            Author Interviews
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end gap-4 items-center">
        <div className="btn bg-green-500">Sign In</div>
        <div className="btn btn-accent">Sign Up</div>
      </div>
    </div>
  );
};

export default Nav;
