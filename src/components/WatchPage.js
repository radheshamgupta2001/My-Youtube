import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
  
  const WatchPage = () =>  {
 
    const [searchParems] = useSearchParams();
    console.log(searchParems.get("v"));
    

    const dispatch  = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
	return (
	  <div>
        <iframe 
        width="1200" 
        height="600" 
        src={"https://www.youtube.com/embed/"+searchParems.get("v")}
        title="YouTube video player"
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerPolicy="strict-origin-when-cross-origin" 
         allowFullScreen>
         </iframe>
      </div>
	);
  }
  
  export default WatchPage;
  