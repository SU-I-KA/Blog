import React from 'react'

function PenIcon({ ...props }) {
  return (
    <svg
      {...props}
      enableBackground='new 0 0 29 30'
      height='30px'
      id='Layer_1'
      version='1.1'
      viewBox='0 0 29 30'
      width='29px'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <g {...props}>
        <rect
          fill='#231F20'
          height='22.68'
          transform='matrix(-0.7071 -0.7072 0.7072 -0.7071 10.4473 37.3449)'
          width='10.846'
          x='7.536'
          y='5.169'
          {...props}
        />
        <path
          {...props}
          d='M27.638,3.996l-2.46-2.459c-1.357-1.358-3.56-1.358-4.917,0l-1.725,1.724l7.67,7.669l1.725-1.724   C29.288,7.848,28.997,5.354,27.638,3.996z'
          fill='#231F20'
        />
        <polygon {...props} fill='#231F20' points='0,30 7.088,30 0,22.28  ' />
      </g>
    </svg>
  )
}

export default PenIcon
