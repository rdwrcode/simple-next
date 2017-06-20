import React from 'react'
import Axis from './axis'
import GraphBody from './graph_body'

export default ({width, height, data}) => (
  <svg>
    <Axis length={width} horizontal={true} />
    <Axis length={height} horizontal={false} />
    <GraphBody data={data} />
  </svg>
)
