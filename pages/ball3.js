/* this is svg animation */
/* circle is moving inside the viewBox */
/*
    <svg width="70px" height="70px" viewBox="0 0 70 70">
      <circle className="ball" fill="black" cx="45" cy="45" r="25"/>
    </svg> 
 */
import React from 'react'

export default () => (
  <div>
    <svg width="200px" height="70px" viewBox="0 0 200 70">
      <circle className="ball" cx="45" cy="45" r="25"/>
      <polygon fill="white" stroke="black" 
        points="279,5 294,35 328,40 303,62 309,94 279,79 248,94 254,62 230,39 263,35 "/>  
    </svg>
    
    <style jsx>{`
      .ball {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin: 20px; 
        background: black;
        animation-name: animation-move-horizontal;
        animation-duration: 4s;
        animation-delay: 2s;
        animation-iteration-count: 5;
        animation-direction: alternate;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
      }
      
      @keyframes animation-move-horizontal {
        0% {
          fill: blue;
          transform: translateX(0);
        }
        50% {
          fill: purple;
          transform: translateX(50px);
        }
        100% {
          fill: red;
          transform: translateX(100px);
        }
      }

    `}</style>
  </div>
)
