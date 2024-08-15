import React from 'react';

const VideoCard = ({ info }) => {
  // Check if 'info' is defined before destructuring
  if (!info || !info.snippet) {
    return <div>No video data available</div>; // Handle the case where info is undefined
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium?.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
