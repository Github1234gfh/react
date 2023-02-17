import { Link, useNavigate } from "react-router-dom"
import { Button } from "../UI/Button/Button"

export const Animals = ({ albom, cart, setCart, aunteficate }) => {

    const navigate = useNavigate();

    const AddCart = (e) => {
        e['count'] = 1
        const copy = Object.assign([], cart)
        let check = true
        copy.map(order => (order.id === e.id ? check = false : false))
        if (check) { copy.push(e) ; setCart(copy) }
    }

    const CheckBtn = (e) => {
        let check = true
        console.log(cart)
        cart.map(item => {
            if (item.id === e.id) check = false
        })
        console.log(check)
        if (check) {  ; return (
            <span onClick={() => (AddCart(e))}><Button text={'Save'} /></span>
        )}
        return (<Link to='/cart'><Button text={'To cart'} color={'red'} /></Link>)
    }

    return (
        <div className="albms">
            {
                albom.map((item, index) => {

                    return (

                        <div className="item" key={item.id}>
                            <h1 className={'text'} >
                                {item.name}
                            </h1>
                            {
                                aunteficate ?
                                    CheckBtn(item)
                                    : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}