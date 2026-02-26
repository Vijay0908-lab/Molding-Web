import Contact from "@/ComponentForWeb/Contact";

function About() {
  return (
    <>
      <div className="h-[60vh] w-full bg-[url(/PlasticGranules.webp)] bg-cover bg-center bg-no-repeat ">
        <div className=" flex flex-col justify-center items-center px-8 py-40">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <img
              src="/OwnerPic.webp"
              alt="Owner"
              className="h-54 w-auto mb-3 cursor-pointer mx-auto"
            />
          </div>

          <h1 className="text-2xl md:text-6xl font-bold text-black mb-6 text-center max-w-5xl leading-tight">
            Paras Hand Molding
          </h1>
        </div>
      </div>
       <div className="AboutInfo max-w-6xl mx-auto px-8 py-16">
        

         {/* Who We Are */}
         <section className="mb-12">
           <h3 className="text-2xl font-bold text-black mb-4">Who We Are</h3>
           <p className="text-gray-700 leading-relaxed">
             My name is Parasnath Chauhan, and I am the owner of Parasnath Molding Works. We take your plastic molds (dies) and make the plastic pieces you need in large quantities. We agree on a price per gross, we make the items, and we deliver them to you.
           </p>
         </section>

         {/* Why Work With Us */}
         <section className="mb-12">
           <h3 className="text-2xl font-bold text-black mb-4">Why Work With Us?</h3>
           <p className="text-gray-700 leading-relaxed mb-4">
             We know that in business, trust is everything. We take full responsibility for every order.
           </p>
           <p className="text-gray-700 leading-relaxed font-semibold">
             Our Promise: If there is any problem or defect in the pieces we make, we will mold them again and deliver them to you. We don't make excuses; we just fix it.
           </p>
         </section>

         {/* Our 4 Main Rules */}
         <section className="mb-12">
           <h3 className="text-2xl font-bold text-black mb-6">Our 4 Main Rules</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-gray-50 p-6 rounded-lg">
               <h4 className="font-bold text-black mb-2">On-Time Delivery</h4>
               <p className="text-gray-700">We deliver your order when we say we will.</p>
             </div>
             <div className="bg-gray-50 p-6 rounded-lg">
               <h4 className="font-bold text-black mb-2">Total Secrecy</h4>
               <p className="text-gray-700">Your designs and dies are safe with us. We keep them secret.</p>
             </div>
             <div className="bg-gray-50 p-6 rounded-lg">
               <h4 className="font-bold text-black mb-2">Good Prices</h4>
               <p className="text-gray-700">We offer competitive rates per gross to help your business grow.</p>
             </div>
             <div className="bg-gray-50 p-6 rounded-lg">
               <h4 className="font-bold text-black mb-2">Your Dies are Safe</h4>
               <p className="text-gray-700">You provide the die, and we take care of the rest.</p>
             </div>
           </div>
         </section>

         {/* How Payment Works */}
         <section className="mb-12">
           <h3 className="text-2xl font-bold text-black mb-4">How Payment Works</h3>
           <p className="text-gray-700 leading-relaxed mb-4">
             We want to make it easy for you to manage your money.
           </p>
           <ul className="text-gray-700 leading-relaxed space-y-2 list-disc list-inside">
             <li>We deliver your orders throughout the month.</li>
             <li>You pay for those deliveries within the first 10 days of the next month.</li>
           </ul>
         </section>
       </div>
      <div className="text-center py-10">
        <Contact />
      </div>
    </>
  );
}
export default About;
