import React, { ReactNode, useEffect } from 'react';

export default function({children} : {children:ReactNode | string}) {
    useEffect(() => {
        function randomNum(m: number, n: number) {
          m = parseInt(m.toString());
          n = parseInt(n.toString());
          return Math.floor(Math.random() * (n - m + 1)) + m;
        }
    
        function animateHearts() {
          const container = document.querySelector('.effect-text') as HTMLElement;
          if (container) {
            const heartCount = Math.floor((container.offsetWidth / 50) * 5);
    
            for (let i = 0; i < heartCount; i++) {
              const heartSize = randomNum(6, 12);
              const topPosition = randomNum(40, 80);
              const leftPosition = randomNum(0, 100);
              const animationDelay = randomNum(0, 3);
              const animationDuration = randomNum(2, 5);
    
              const heart = document.createElement('span');
              heart.classList.add('tiny-heart');
              heart.style.top = `${topPosition}%`;
              heart.style.left = `${leftPosition}%`;
              heart.style.width = `${heartSize}px`;
              heart.style.height = `${heartSize}px`;
              heart.style.animationDelay = `-${animationDelay}s`;
              heart.style.animationDuration = `${animationDuration}s`;
    
              container.appendChild(heart);
            }
          }
        }
    
        animateHearts();
      }, []);
    

  return <div className="effect-text font-bold">{children}</div>;
}
