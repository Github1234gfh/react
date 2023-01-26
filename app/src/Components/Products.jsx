import React from 'react'


export const Products = ({elem}) => {
  return (
    <div className='card-item'>
      <p className='item-text'>
        {elem.title}
      </p>
    </div>
  )
}

