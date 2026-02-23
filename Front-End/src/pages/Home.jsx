function Home(){
    return (
        <div className="h-[60vh] w-full bg-[url(/Background.png)] bg-cover bg-center bg-no-repeat">
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
    )
}
export default Home;