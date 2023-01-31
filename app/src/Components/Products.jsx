import React from 'react'


export const Products = ({ elem }) => {
  return (
    <div className='card-item'>
      <div className='container-img'>
        <img src={elem.images[0]} alt="img" className='product-img' />
      </div>
      <div className='item-column'>
        <h1 className='item-title'>
          {elem.title}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: 30 }} src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png" alt="" />
          <p className='item-rating'>{elem.rating}</p>
        </div>
      </div>
      <div className='item-by-colomn'>
        <p className='item-text'>{elem.price}$</p>
        <button className='item-by-btn'>By</button>
      </div>
    </div>
  )
}

