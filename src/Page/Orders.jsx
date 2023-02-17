import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Orders = ({ aunteficate, orders, setOrders }) => {

    const Nvigate  = useNavigate();

    useEffect(() => {
        if (!aunteficate) Nvigate('/')
    })

    return (
        <div className="img-card">
            {
                aunteficate?
                    orders.length !== 0?
                    orders.map((order) => {
                        return (
                            <div key={order.id}>
                                <h1 className="text">{order.name}</h1>
                                <p>count - {order.count}</p>
                            </div>
                        )
                    })
                    : <h1>Orders is clear</h1>
                :null
            }
        </div>
    )
}