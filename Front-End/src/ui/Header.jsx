export function Header(){
    return (
        <div className='main-div  flex items-center justify-between m-2 p-2 '>
            <div className="logo flex items-center">
                <img src="/logo.webp" alt="Logo" className="h-16 w-20 rounded-full object-cover border  shadow-sm"/>
                <span>Paras Molding Work</span>
                
            </div>
            <div className="SubLinks">
                <ul className="flex space-x-6">
                    <li >
                        <a href="/">Home</a>
                    </li>
                    <li><a href="/orders">For Orders</a></li>
                    <li><a href="/die-section">Die Section</a></li>
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                    <li><a href="/sign-up">Sign-up</a></li>
                </ul>

            </div>
        </div>
    )
}

export default Header;