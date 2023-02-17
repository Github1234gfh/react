import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button";

export const Cart = ({ aunteficate, cart, setCart, orders, setOrders }) => {

    const Navigate = useNavigate();

    useEffect(() => { if (!aunteficate) Navigate('/') });


    const AddOrder = () => {
        const copy = Object.assign([], orders)
        for (let i in cart) {
            console.log(cart[i])
            copy.push(cart[i])
        }
        setOrders(copy);
        setCart([]);
        Navigate('/orders');
    }

    const Add = (index) => {
        const copy = Object.assign([], cart)
        copy[index].count++
        setCart(copy)
    }

    const Not = (index) => {
        const copy = Object.assign([], cart)
        if (copy[index].count > 1) {
            copy[index].count--
        }
        setCart(copy)
    }

    const Delete = (index) => {
        const copy = Object.assign([], cart)
        copy.splice(index, 1)
        setCart(copy)
    }
    return (
        <div className="img-card">
            {aunteficate ?
                cart.length !== 0 ?
                    <>
                        {
                            cart.map((item, index) => {
                                return (
                                    <div key={item.id} className={'fggfd'}>
                                        <h1 className="text">{item.name}</h1>
                                        <span onClick={() => Delete(index)}><Button type={'danger'} text={'Delete'} /></span>
                                        <div style={{ display: 'flex', gap: 10 }}>
                                            <p>Count {item.count}</p>
                                            <span onClick={() => Not(index)}> <Button text={'-'} /></span>
                                            <span onClick={() => Add(index)}> <Button text={'+'} /></span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <span onClick={() => AddOrder()}><Button text={'Do order'} /></span>
                    </>
                    : <h1>Cart is clear</h1>
                :
                null
            }
        </div>
    )
}