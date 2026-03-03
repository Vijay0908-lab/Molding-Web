import { Phone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const baseclass = `text-black hover:underline hover:decoration-[rgb(24,104,224)] hover:underline-offset-2 hover:decoration-4 font-medium transition-colors `;
  const activeClass = `text-black underline font-medium decoration-[rgb(24,104,224)] underline-offset-2 decoration-4 transition-colors `;
  return (
    <div className="fixed top-0 left-0 right-0 z-999 flex items-center justify-between px-8 py-4 bg-transparent shadow-lg transition-all">
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-10 w-auto cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="SubLinks">
        <ul className="flex space-x-6">
          <li>
            <a
              href="/"
              className={location.pathname === "/" ? activeClass : baseclass}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/orders"
              className={
                location.pathname === "/orders" ? activeClass : baseclass
              }
            >
              For Orders
            </a>
          </li>
          <li>
            <a
              href="/about-us"
              className={
                location.pathname === "/about-us" ? activeClass : baseclass
              }
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/sign-up"
              className={
                location.pathname === "/sign-up" ? activeClass : baseclass
              }
            >
              Sign-up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
