import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
     <div  className='flex justify-between gap-4 bg-blue-500 p-2'>
     <h1 className='mt-2 text-white font-semibold'>WEB PAGE</h1>
       
        <div className='flex justify-end' >
          <Link to='/Login' className=' p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500'>Login</Link>
        <Link to='/Signup' className='  p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500'>Signup</Link>
        </div>
     </div>
      
     <img
        src="/MERN.jpg" 
        alt="MERN Stack Wallpaper"
        className="w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-155 object-cover"
      />
      
      
      
    </div>
  );
}

export default Home;