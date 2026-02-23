export function Footer(){
    return (
        <footer className="bg-black py-4 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4  bg-black py-4">
            <div className="text-white">
                <div className=" flex items-center justify-center">
                 <img src="/logo.png" alt="Logo" className="h-10 w-auto "/>
               
                </div>
                <p className="align-middle">"We believe in quality and responsibility to deliver the best products on time."</p>
            </div>
            <div className='Info text-white items-center justify-center'>
                <h3>Pen Essentials</h3>
                <ul>
                    <li>Lock-In</li>
                    <li>Pen Chacki</li>
                    <li>Dandi</li>
                    <li>Bush</li>
                    <li>Many More...</li>
                </ul>
            </div>
            <div className='Quick Links text-white'>
                <h3>Quick Links</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Return Policy</li>
                    <li>Shipping Information</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className='Contact text-white'>
               
                <h3 className="font-semibold text-white text-sm mb-2">Contact Us</h3>
                    <p>Indira Nagar, Kandiwali West, Mumbai 400067</p>
                    <p className="mt-1">+91 8433749789</p>
                    <a href="mailto:parasmoldingwork@gmail.com" className="text-white block mt-1">parasmoldingwork@gmail.com</a>
            </div>
        </div>
        <hr className="border-t border-white mt-4" />
        <div className="text-center text-white mt-4">
            &copy; {new Date().getFullYear()} Paras Molding Work. All rights reserved.
        </div>
        </footer>
    )
}

export default Footer;