
import CardImage from "@/ui/Card";
import Contact from "@/ComponentForWeb/Contact";



function Home(){

    const DieData = [{
        id: 1,
        title: 'Die 1',
        description: 'This is the description for Die 1.',      
        image: {
            id1:  '/DieImages/mold1.jpg', 
            id2:  '/DieImages/mold2.webp',
            id3:  '/DieImages/mold3.jpg',
           
        }
    } , 
    {
        id:2 , 
        title : 'Die 2',
        description: 'this is info about the dies 2 ',
        image: {
           
            id2:  '/DieImages/mold2.webp',
            id3:  '/DieImages/mold3.jpg',
            id4:  '/DieImages/mold4.jpg',
           
        }
    },{
        id:3 ,
        title : 'Die 3',
        description: 'this is info about the dies 3 ',
        image: {
           
            id3:  '/DieImages/mold3.jpg',
            id4:  '/DieImages/mold4.jpg',
           
        }
    },{
        id:4 ,
        title : 'Die 4',
        description: 'this is info about the dies 4 ',
        image: {
           id4:  '/DieImages/mold4.jpg',
           id5:  '/DieImages/mld6.jpg',
            id1:  '/DieImages/mold1.jpg', 
            id2:  '/DieImages/mold2.webp',
            id3:  '/DieImages/mold3.jpg',
           
        
        }   


    },
    {
        id:5 ,
        title : 'Die 5',        
        description: 'this is info about the dies 5 ',
       image: {
           
            id3:  '/DieImages/mold3.jpg',
             id1:  '/DieImages/mold1.jpg', 
            id2:  '/DieImages/mold2.webp',
           
        }
    }
     ]
    return (
        <>
        <div className="h-[60vh] w-full bg-[url(/Background.png)] bg-cover bg-center bg-no-repeat ">
            <div className="h-[60vh]  flex flex-col justify-center items-center px-8 py-40">
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 text-center max-w-5xl leading-tight">
                    Premium Hand Molding for Industrial Excellence
                </h1>
                <p className="text-base md:text-xl text-black/50 max-w-3xl text-center leading-relaxed mb-10">
                    Elevate your manufacturing, influence your market, and unlock elite precision with Paras Molding Work—crafted exclusively for industrial professionals.
                </p>
                <div className="flex gap-2"> 

                <button className="PrimaryButton">Orders</button>
                <button className="SecondaryButton">About Us</button>
                </div>
            </div>
        </div>


          <div className="Info text-center mt-5">

         <h2 className="text-black font-bold py-1">Our Available Dies</h2>
         <h5 className="text-black/80 mb-3">"We own these dies and can negotiate the rate per gross based on your order volume."</h5>
          </div>
          
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
               {DieData.map((die) => (
     <CardImage item={die} key={die.id} /> 
  ))}
              </div>
            </div>


            <Contact />
        </>
    )
}
export default Home;