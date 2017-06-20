import React from 'react'

export default () => (
  <div>
    <svg viewbox="0 0 400 400">
      <rect x={10} y={10} width={100} height={100} fill="blue" />
      <circle cx={120} cy={120} r={10} fill="red" />
    </svg>
    <svg x="400px" y="400px" width="400px" height="200px" viewBox="0 0 450 100">
      <rect x="10" y="5" fill="white" stroke="blue" width="90" height="90"/>
      <circle fill="white" stroke="black" cx="170" cy="50" r="45"/>
      <polygon fill="white" stroke="black" 
        points="279,5 294,35 328,40 303,62 309,94 279,79 248,94 254,62 230,39 263,35"/>
      <line fill="none" stroke="red" x1="410" y1="95" x2="440" y2="6"/>
      <line fill="none" stroke="red" x1="360" y1="6" x2="360" y2="95"/>
    </svg>
    <svg viewBox="0 0 218.8 87.1">
      <g fill="none" stroke="red">
        <path d="M7.3 75L25.9 6.8s58.4-6.4 33.5 13-41.1 32.8-11.2 30.8h15.9v5.5s42.6 18.8 0 20.6" />
        <path d="M133.1 58.2s12.7-69.2 24.4-47.5c0 0 4.1 8.6 9.5.9 0 0 5-10 10.4.9 0 0 12.2 32.6 13.6 43 0 0 39.8 5.4 15.8 15.4-13.2 5.5-53.8 13.1-77.4 5.9.1 0-51.9-15.4 3.7-18.6z" />
      </g>
    </svg> 
    <style jsx>{`
      background-image: url(static/noun_364.svg);
    `}</style>
  </div>
)
