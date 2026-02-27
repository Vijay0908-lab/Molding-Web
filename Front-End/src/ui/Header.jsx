import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let throttleTimer = null;

    const handleScroll = () => {
      if (throttleTimer) return;

      throttleTimer = setTimeout(() => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const scrollThreshold = viewportHeight * 0.2;

        setIsScrolled(scrollPosition > scrollThreshold);
        throttleTimer = null;
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);


     const baseclass = `${isScrolled ? 'text-white' : 'text-black'} hover:underline hover:decoration-[rgb(24,104,224)] hover:underline-offset-2 hover:decoration-4 font-medium transition-colors `;
     const activeClass = `${isScrolled ? 'text-white' : 'text-black'} underline font-medium decoration-[rgb(24,104,224)] underline-offset-2 decoration-4 transition-colors `;
    return (
           
        <div className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all  ${
            isScrolled ? 'bg-black shadow-lg ' : 'bg-transparent '
        }`}>
            <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Logo" className="h-10 w-auto cursor-pointer"  onClick={()=>{
                    navigate('/')
                }}/>
               
            </div>
            <div className="SubLinks">
                <ul className="flex space-x-6">
                    <li>
                        <a href="/" className={(location.pathname === '/') ? activeClass : baseclass}>Home</a>
                         
                    </li>
                    <li><a href="/orders" className={(location.pathname === '/orders') ? activeClass : baseclass}>For Orders</a></li>
                    {/* <li><a href="/die-section" className={(location.pathname === '/die-section') ? activeClass : baseclass}>Die Section</a></li> */}
                    <li><a href="/about-us" className={(location.pathname === '/about-us') ? activeClass : baseclass}>About Us</a></li>
                    {/* <li><a href="/contact-us" className={(location.pathname === '/contact-us') ? activeClass : baseclass}>Contact Us</a></li> */}
                    <li><a href="/sign-up" className={(location.pathname === '/sign-up') ? activeClass : baseclass} >Sign-up</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
