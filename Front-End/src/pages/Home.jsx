
import CardImage from "@/ui/Card";

function Home(){

    const DieData = [{
        id: 1,
        title: 'Die 1',
        description: 'This is the description for Die 1.',      
        image : '/DieImages/mold1.jpg', 
    } , 
    {
        id:2 , 
        title : 'Die 2',
        description: 'this is info about the dies 2 ',
        image: '/DieImages/mold2.webp',
    },{
        id:3 ,
        title : 'Die 3',
        description: 'this is info about the dies 3 ',
        image: '/DieImages/mold3.jpg',
    },{
        id:4 ,
        title : 'Die 4',
        description: 'this is info about the dies 4 ',
        image: '/DieImages/mold4.jpg',          


    },
    {
        id:5 ,
        title : 'Die 5',        
        description: 'this is info about the dies 5 ',
        image: '/DieImages/mld6.jpg',
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
    <CardImage key={die.id} title={die.title} description={die.description} image={die.image} /> 
  ))}
              </div>
            </div>


            <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-sm">
  <h1 className="text-3xl font-bold text-black mb-6">Contact Us</h1>

  <form className="grid grid-cols-1 gap-6">
    {/* Name Input */}
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Your Name"
        //value={formData.name}
        required
      />
    </div>

    {/* Mobile & Email Group */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
          Mobile Number
        </label>
        <input
          type="tel"
          id="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter Mobile Number"
         // value={formData.number}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter Email"
          //value={formData.email}
        />
      </div>
    </div>

    {/* Message Input */}
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
        Message
      </label>
      <textarea
        id="message"
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Any suggestion or question..."
        //value={formData.message}
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-black text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
    >
      Send Message
    </button>
  </form>
</div>
        </>
    )
}
export default Home;