declare global {
    interface Window {
      particlesJS: any;
    }
  }
  
  import React, { useEffect } from 'react';
  import particlesConfig from '../../../public/particles.json';
  
  export function ParticleEffect() {
    useEffect(() => {
      const script1 = document.createElement('script');
      script1.src = '/particles.min.js';
      script1.async = true;
  
      const script2 = document.createElement('script');
      script2.src = '/particles.js';
      script2.async = true;
  
      script1.addEventListener('load', () => {
        document.body.appendChild(script2);
      });
  
      script2.addEventListener('load', () => {
        window.particlesJS('particles-js', particlesConfig);
      });
  
      document.body.appendChild(script1);
  
      return () => {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      };
    }, []);
  
    return <div id="particles-js" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
  }
  