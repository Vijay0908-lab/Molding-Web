import { useState, useEffect } from 'react';
import {useLocation } from 'react-router-dom';

export function Header(){
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            const scrollThreshold = viewportHeight * 0.25;
            
            setIsScrolled(scrollPosition > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


     const baseclass = "text-black hover:underline hover:decoration-[rgb(24,104,224)] hover:underline-offset-2 hover:decoration-4  font-medium";
            const activeClass = "text-black   underline font-medium decoration-[rgb(24,104,224)] underline-offset-2 decoration-4";
    return (
           
        <div className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
            isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
        }`}>
            <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Logo" className="h-10 w-auto"/>
               
            </div>
            <div className="SubLinks">
                <ul className="flex space-x-6">
                    <li>
                        <a href="/" className={(location.pathname === '/') ? activeClass : baseclass}>Home</a>
                         
                    </li>
                    <li><a href="/orders" className={(location.pathname === '/orders') ? activeClass : baseclass}>For Orders</a></li>
                    <li><a href="/die-section" className={(location.pathname === '/die-section') ? activeClass : baseclass}>Die Section</a></li>
                    <li><a href="/about-us" className={(location.pathname === '/about-us') ? activeClass : baseclass}>About Us</a></li>
                    <li><a href="/contact-us" className={(location.pathname === '/contact-us') ? activeClass : baseclass}>Contact Us</a></li>
                    <li><a href="/sign-up" className={(location.pathname === '/sign-up') ? activeClass : baseclass} >Sign-up</a></li>
                </ul>
            </div>
        </div>
    )
}
 
export default Header;