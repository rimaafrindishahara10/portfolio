const Services=()=>{
    return(
        <>
        <div className="main-container py-12">
            <h1 className="text-4xl text-center font-bold underline">My Services</h1>
            <div className="services-container space-x-4 px-3 flex mt-10">
                <div className="cursor-pointer hover:bg-gray-200  bg-slate-100 p-5 text-center shadow-lg  rounded-xl service1 space-y-3">
                    <i  class="text-3xl fa-solid fa-users"></i>
                    <h1 className="text-3xl">Frontend Developer</h1>
                    
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste tempore maiores, obcaecati ut est quaerat ex amet maxime similique quae.</p>
                    <button className="hover:bg-orange-500 cursor-pointer px-2 py-1 bg-orange-500 shadow rounded-full ">Check</button>

                </div>
                <div className="cursor-pointer hover:bg-gray-200  bg-slate-100 p-5 text-center shadow-lg  rounded-xl service1 space-y-3">
                    <i class="text-3xl fa-solid fa-server"></i>
                    <h1 className="text-3xl">Backend Developer</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste tempore maiores, obcaecati ut est quaerat ex amet maxime similique quae.</p>
                    <button className="hover:bg-orange-500 cursor-pointer px-2 py-1 bg-orange-500 shadow rounded-full ">Check</button>

                </div>
                <div className=" cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg  rounded-xl service1 space-y-3">
                    <i class="text-3xl fa-solid fa-gears"></i>

                    <h1 className="text-3xl">Microservices</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste tempore maiores, obcaecati ut est quaerat ex amet maxime similique quae.</p>
                    <button className="hover:bg-orange-500 cursor-pointer px-2 py-1 bg-orange-500 shadow rounded-full ">Check</button>

                </div>
                
            </div>
        </div>
        </>
    )
}
export default Services;