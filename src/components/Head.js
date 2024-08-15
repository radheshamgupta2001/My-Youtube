import React from 'react';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
  
  const Head = () =>  {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
	return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'  >
            <img onClick={() =>toggleMenuHandler()}
            className='h-8 cursor-pointer'
             alt='menu' src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png'/>
             <a href='/'>
            <img 
            className='h-8 mx-2'
            alt='youtube-logo' src='https://wallpapers.com/images/high/youtube-logo-3840-x-2160-background-xuljaasdgk44enmb.webp'/>
            </a>
        </div>
        <div className='col-span-10 px-10'>
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type= "text" />
            <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100' >Search</button>
        </div>
        <div>
            <img 
            className='h-8'
            alt='user-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
        </div>
    </div>
	);
  }
  
  export default Head;
  