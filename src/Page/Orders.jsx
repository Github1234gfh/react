export const Orders = ({ aunteficate, orders, setOrders }) => {



    return (
        <>
            {
                aunteficate?
                    orders.length !== 0?
                    orders.map((order) => {
                        return (
                            <div className="img-card">
                                <h1 className="text">{order.name}</h1>
                                <p>count - {order.count}</p>
                            </div>
                        )
                    })
                    : <h1>Orders is clear</h1>
                :null
            }
        </>
    )
}