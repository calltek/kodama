import React from 'react';

export default function Head({ image, children }) {
  return (
    <div  className="justify-center items-center flex" style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: 'calc(100% + 40px)',
        height: '400px',
        margin: '-64px -20px 20px -20px',
        position: 'relative',
    }}>
        <div style={{
            position: 'absolute',
            content: ' ',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1,
        }}></div>

        <h2 style={{
            color: 'white',
            fontSize: '3rem',
            fontWeight: 'bold',
            zIndex: 2,
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}>
            {children}
        </h2>
    </div>
  );
}
