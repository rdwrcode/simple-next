/* this is css animation */
import React from 'react'

export default () => (
  <div>
    <div className="ball">
    </div>
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
          background: blue;
          transform: translateX(0);
        }
        50% {
          background: purple;
          transform: translateX(50px);
        }
        100% {
          background: red;
          transform: translateX(100px);
        }
      }

    `}</style>
  </div>
)
