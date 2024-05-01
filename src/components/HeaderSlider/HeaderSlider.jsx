import React, { useState } from 'react';

const gifs = [
  {
    url: 'https://c.tenor.com/EgkXGTk5iw4AAAAd/tenor.gif',
    title: 'Title 1',
    description: 'Description 1'
  },
  {
    url: 'https://c.tenor.com/ikwivN9cyroAAAAd/tenor.gif',
    title: 'Title 2',
    description: 'Description 2'
  },
  {
    url: 'https://c.tenor.com/P4aQ7gPsYvgAAAAd/tenor.gif',
    title: 'Title 3',
    description: 'Description 3'
  }
];

const ImageWithDescription = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + gifs.length) % gifs.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % gifs.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: '20px' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h2>{gifs[currentIndex].title}</h2>
        <p>{gifs[currentIndex].description}</p>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <div style={{ width: '300px', height: '200px', overflow: 'hidden', marginLeft: '20px' }}>
        <img src={gifs[currentIndex].url} alt="Gif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
};

export default ImageWithDescription;
