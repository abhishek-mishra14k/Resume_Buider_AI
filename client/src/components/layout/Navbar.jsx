import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";
import toast from "react-hot-toast";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    `rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3"
        >
          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-2 text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            <HiOutlineDocumentText className="text-2xl" />
          </div>

          <h1 className="text-3xl font-black tracking-tight">
            <span className="text-blue-600">Resume</span>
            <span className="text-slate-900">AI</span>
          </h1>
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-2 lg:flex">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/resume-builder" className={navLinkClass}>
              Builder
            </NavLink>
          </li>

          <li>
            <NavLink to="/ai-analyzer" className={navLinkClass}>
              AI Analyzer
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard" className={navLinkClass}>
              Dashboard
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        {!user ? (
          <div className="flex items-center gap-3">

            <Link
              to="/login"
              className="rounded-xl border border-blue-600 px-5 py-2.5 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white hover:shadow-lg"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Register
            </Link>

          </div>
        ) : (
          <div className="flex items-center gap-4">

            <div className="flex cursor-pointer items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <FaUserCircle className="text-3xl text-blue-600" />

              <span className="font-medium text-slate-700">
                {user.name}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="rounded-xl bg-red-500 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-lg"
            >
              Logout
            </button>

          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;