import { useState, useEffect } from 'react'
import Logo from './assets/LogoJeroVacio.svg'
import './Loading.css'

function Loading() {
    const [loadProgress, setLoadProgress] = useState(0);
    const [showSite, setShowSite] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setLoadProgress((prevProgress) => {
          if (prevProgress === 100) {
            clearInterval(interval);
            setTimeout(() => {
              setShowSite(true);
            }, 1000);
          }
          return prevProgress + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div>
        {showSite ? (
          /* <div>
            <h1>Welcome to the landing page!</h1>
          </div> */
        <div className='flex items-center justify-center h-screen w-screen'>
            <div id='LoadContainer'>
                <img id="logo" src={Logo} alt="Logo"/>
                <svg id="load" width="100%" height="100%" className='sm:py-3 py-20 px-3'>
                    <rect
                    x="0"
                    y="0"
                    width="100%"
                    height={loadProgress + '%'}
                    fill="#FFFFFF"
                    />
                </svg>
            </div>
        </div>
        ) : (
          <div id='container' className='flex items-center justify-center h-screen w-screen'>
            <div id='LoadContainer'>
              <img id="logo" src={Logo} alt="Logo"/>
              <svg id="load" width="100%" height="100%" className='sm:py-3 py-20 px-3'>
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height={loadProgress + '%'}
                  fill="#FFFFFF"
                  
                />
                <rect
                  x="0"
                  y={loadProgress + '%'}
                  width="100%"
                  height={(100 - loadProgress) + '%'}
                  fill="#FFFFFF"
                  fillOpacity="0.1"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    );
}
export default Loading