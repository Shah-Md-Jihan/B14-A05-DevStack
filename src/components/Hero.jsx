const Hero = () => {
    return (
        <div className="flex container mx-auto justify-between items-center">
            <div>
                <h2 className="text-4xl md:text-6xl font-bold">Build Your Ideal<br/>
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-[65%] py-10">
                Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that fits your
                next project.    
                </p>
                <div>
                    <button className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded shadow-lg hover:opacity-90 transition-opacity">Explore Technologies</button>    
                    <button className="ml-10 font-semibold">Learn More</button>    
                </div>    
            </div>
            <div>
                <img src="/src/assets/banner-stack.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;