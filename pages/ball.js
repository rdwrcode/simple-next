/* this is css animation */
import React from 'react'

export default () => (
  <div>
    <div className="ball">
    </div>
    <svg className="ball2" width="70px" height="70px" viewBox="0 0 70 70">
      <circle fill="black" cx="45" cy="45" r="25"/>
    </svg>
    <br/>
    <svg width="70px" height="70px" viewBox="0 0 70 70">
      <circle className="ball2" fill="black" cx="45" cy="45" r="25"/>
    </svg>
    <br/>
    <svg width="200px" height="70px" viewBox="0 0 200 70">
      <circle className="ball3" cx="45" cy="45" r="25"/>
    </svg>
    <style jsx>{`
      .ball {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin: 20px; 
        background: black;
        animation: animation-name-you-pick 2s 2s 3 alternate ease-in-out forwards;
      }
      
      .ball2 {
        animation: animation-name-you-pick 2s 2s 3 alternate ease-in-out forwards;
      }

      .ball3 {
        animation: second-animation 2s 2s 3 alternate ease-in-out forwards;
      }

      @keyframes animation-name-you-pick {
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

      @keyframes second-animation {
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
