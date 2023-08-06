import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import NavBar from '../NavBar/NavBar';

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
        <div className='text-center mt-4 space-y-1 mb-4'>
            <h1 className='text-4xl font-bold italic'>The Daily News</h1>
            <p className='text-gray-500'>Your Trusted News Source</p>
            <p>{currentTime}</p>
        </div>
        <div className='flex w-10/12 mx-auto bg-red-300 mt-4'>
        <button className="btn btn-error">Latest</button>
        <Marquee
        className='text-black'
        speed={70}>With the promotion of educator Joyce Yang to program manager, News Decoder prepares to expand its educational opportunities and global reach.</Marquee>
        </div>
        <NavBar></NavBar>
       </>
    );
};

export default Header;