import React from 'react';

export default function Head({ image, children }) {
  return (
    <div>
        <div  className="justify-center items-center flex" style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: 'calc(100vw - 17px)',
            height: '400px',
            position: 'absolute',
            left: 0,
            top: 0
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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
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
        </div>

        <div style={{
            position: 'relative',
            marginTop: '400px',
        }}>

        </div>
    </div>
  );
}
