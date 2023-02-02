import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export const Products = ({ autnteficate, elem, orders, ch, index }) => {

  const navigate = useNavigate()


  const CheckBtn = () => {
    let check = true
    orders.map(order => {
      if (order.idDrink === elem.idDrink) check = false
    })
    if (check) return (
      <button className='item-by-btn' onClick={() => {
          autnteficate ? addOrder() : navigate('/login')
          }}>
        To order</button>)
    return (<Link to='/orders'><button className='item-by-btn item-by-bt-dis'>In Order</button></Link>)
  }

  const addOrder = () => {
    const copy = Object.assign([], orders)
    let check = true
    copy.map(order => (order.idDrink === elem.idDrink ? check = false : false))
    if (check) { copy.push(elem); ch(copy); localStorage.setItem('orders', JSON.stringify(copy)) }
  }

  return (
    <div className='card-item'>
      <div className='container-img'>
        <img src={elem.strDrinkThumb} alt="img" className='product-img' />
      </div>
      <div className='item-column'>
        <h1 className='item-title'>
          {elem.strDrink}
        </h1>
      </div>
      <div className='item-by-colomn'>
        {CheckBtn()}
      </div>
    </div>
  )
}

