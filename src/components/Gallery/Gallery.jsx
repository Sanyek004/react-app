import React, { useState } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './ImageWithDescription.css';

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

  const getImageStyle = (index) => {
    const translateX = -100 * (index - currentIndex);
    return {
      width: '100%',
      height: '200px',
      position: 'absolute',
      transform: `translateX(${translateX}%)`,
      transition: 'transform 0.3s ease-in-out'
    };
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
      <div style={{ width: '300px', height: '200px', overflow: 'hidden', position: 'relative' }}>
        {gifs.map((gif, index) => (
          <CSSTransition
            key={gif.url}
            timeout={300}
            classNames="fade"
          >
            <img src={gif.url} alt="Gif" style={getImageStyle(index)} />
          </CSSTransition>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-5px' }}>
        <h2>{gifs[currentIndex].title}</h2>
        <p>{gifs[currentIndex].description}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: '0px' }}>
        <div></div>
        <button onClick={handlePrevClick} style={{ marginRight: '10px' }}>Previous</button>
        <button onClick={handleNextClick} style={{ marginLeft: '10px' }}>Next</button>
      </div>
    </div>
  );
};

export default ImageWithDescription;
