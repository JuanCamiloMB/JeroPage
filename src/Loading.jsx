import { useState, useEffect } from 'react'
import Logo from './assets/LogoJeroVacio.svg'
import Site from './Components/Site';
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
      <>
        {showSite ? (
        /* <div className='flex items-center justify-center h-screen w-screen'>
            <div id='LoadContainer'>
                <img id="logo" src={Logo} alt="Logo"/>
                <svg id="load" width="100%" height="100%" className=''>
                    <rect
                    x="0"
                    y="0"
                    width="100%"
                    height={loadProgress + '%'}
                    fill="#FFFFFF"
                    />
                </svg>
            </div>
        </div>  */

        <Site/>

        ) : (
          <div id='container' className='flex items-center justify-center h-screen w-screen'>
            <div id='LoadContainer'>
              <img id="load_logo" src={Logo} alt="Logo"/>
              <svg id="load" width="100%" height="100%" className=''>
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
      </>
    );
}
export default Loading
