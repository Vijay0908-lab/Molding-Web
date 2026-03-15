import {Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


function AppLayout(){
    return (
        <div className="flex flex-col "> 
          <nav>
            <Header />
          </nav>

          <main className="grow">
            <div className='mx-auto'>
               <Outlet />
            </div>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>

    );
}

export default AppLayout;