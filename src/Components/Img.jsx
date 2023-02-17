import { useState } from "react"
import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button";

export const Img = ({ imgs, aunteficate, favorites, setFavorites }) => {



    const CheckBtn = (e) => {
        let check = true
        favorites.map(order => {
            console.log(order.id === e.id)
            if (order.id === e.id) check = false
        })
        if (check) return (
            <Button text={'Save'} onClick={() => {
                Onclick(e)
            }} />
        )
        return (<Link to='/favorites'><Button type={'danger'} text={'To saved'} /></Link>)
    }

    return (
        <div className="img-cards">
            {
                imgs.map((img) => {


                    return (
                        <div className="img-card" key={img.id}>
                            <img src={img.url} alt="" />
                            {
                                aunteficate ?
                                    CheckBtn(img)
                                    : null
                            }

                        </div>
                    )
                })
            }
        </div>
    )
}