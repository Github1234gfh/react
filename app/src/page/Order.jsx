export const Order = ({ orders, ch }) => {

    const Ondelete = (e) => {
        const copy = Object.assign([], orders)
        copy.splice(e, 1)
        ch(copy)
        localStorage.setItem('orders', JSON.stringify(copy))
    }

    return (
        <div className='main-conainer'>
            {
                orders.length !== 0 ? orders.map((order, index) => {
                    return (
                        <div key={order.idDrink} className='card-item dfdf'>
                            <div className='container-img'>
                                <img src={order.strDrinkThumb} alt="img" className='product-img' />
                            </div>
                            <div className='item-column'>
                                <h1 className='item-title'>
                                    {order.strDrink}
                                </h1>
                            </div>
                            <div className='item-by-colomn'>
                                <button className="item-by-btn btn-delete" onClick={() => (Ondelete(index))}>Delete</button>
                            </div>
                        </div>
                    )
                }
                )
                    : <h1>Order is empty</h1>
            }
        </div>
    )
}