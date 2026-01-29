import { Descripton, Typography } from '../Typography';

const Growth = () => {
  return (
    <section className="relative mx-auto mt-32 md:mt-40 lg:mt-48 mb-32 max-w-6xl px-4 text-center">
      <div className="mb-10">
        <Typography
                  variant="h2"
                  popUp="Get personalized"
                  className="text-orange-500" line1={''}/>
        <Typography
                  variant="h2"
                  popUp="growth plan"
                  className="text-orange-500" line1={''}/>
      </div>

      <br></br>
     
      <div className="flex justify-center gap-24 mb-10 relative">     
       <div className="relative">
    <div className="absolute -inset-10 bg-green-300 opacity-30 blur-3xl rounded-full"></div>
    <span className="relative text-green-500 text-3xl">
      Discover
    </span>
  </div> 
         <div className="relative">
    <div className="absolute -inset-10 bg-yellow-400 opacity-30 blur-3xl rounded-full"></div>
    <span className="relative text-yellow-400 text-3xl">
      Define
    </span>
  </div>   
        <div className="relative">
    <div className="absolute -inset-10 bg-red-300 opacity-30 blur-3xl rounded-full"></div>
    <span className="relative text-red-400 text-3xl">
      Derive
    </span>
  </div>    
       <div className="relative">
    <div className="absolute -inset-10 bg-blue-300 opacity-30 blur-3xl rounded-full"></div>
    <span className="relative text-blue-500 text-3xl">
      Deliver
    </span>
  </div>
      </div>


      <div className="flex justify-center items-center gap-3 mb-8">
        <span className="text-2xl font-bold  text-blue-400">Consultancy Fees</span>
        <span className="px-7 py-1 rounded-[3px] bg-blue-400 border border-blue-800 text-white text-2xl font-semibold">
          149 $
        </span>
      </div>
      <br></br>

      <div className="flex justify-center gap-4 mb-3">
        <button className="px-9 py-1 font-bold text-gray-800 bg-white border border-gray-300 shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition">
        Book now
        </button>
        <button className="px-9 py-1  border border-orange-500 bg-blue-400 text-white ">
          Visit Pricing
        </button>
      </div>

      <p className="text-1xl text-blue-500 mb-8">
        Booking are filling faster. Book now in a offer price
      </p>
      <br></br>
      <Descripton
        description="We'll identify your biggest revenue bottlenecks and map out a proven outbound strategy to fix them - based on what's working for our other clients."
        className="max-w-2xl mx-auto text-center" />
    </section>
  );
};

export default Growth;
