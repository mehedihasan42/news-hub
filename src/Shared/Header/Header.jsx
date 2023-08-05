import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);
    
        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);
    return (
       <>
        <div className='text-center mt-4 space-y-1'>
            <h1 className='text-4xl font-bold italic'>The Daily News</h1>
            <p className='text-gray-500'>Journalism Without Fear</p>
            <p className=''>{currentTime}</p>
        </div>
       </>
    );
};

export default Header;