import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button";

export const Cart = ({ aunteficate, cart, setCart, orders, setOrders }) => {

    const Navigate = useNavigate();

    useEffect(() => { if (!aunteficate) Navigate('/') });


    const AddOrder = (e, index) => {
        const copy = Object.assign([], orders)
        copy.push(e)
        setOrders(copy)
        // const copycart = Object.assign([], cart)
        // copy.splice(index, 1)
        // setCart(copycart)
        Navigate('/orders')
    }

    const Add = (index) => {
        const copy = Object.assign([], cart)
        copy[index].count++
        setCart(copy)
    }

    const Delete = (index) => {
        const copy = Object.assign([], cart)
        copy.splice(index, 1)
        setCart(copy)
    }
    return (
        <>
            {aunteficate ?
                cart.length !== 0 ?
                    cart.map((item, index) => {
                        return (
                            <div className="img-card" key={item.id}>
                                <h1 className="text">{item.name}</h1>
                                <span onClick={() => Delete(index)}><Button type={'danger'} text={'Delete'} /></span>
                                <div>
                                    <p>Count {item.count}</p>
                                    <span onClick={() => Add(index)}> <Button text={'+'} /></span>
                                </div>

                                <span onClick={() => AddOrder(item, index)}><Button text={'To order'} /></span>
                            </div>
                        )

                    })
                    : <h1>Cart is clear</h1>
                :
                null
            }
        </>
    )
}