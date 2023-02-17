import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Favorites = ({ aunteficate, favorites }) => {

    const Navigate = useNavigate();

    useEffect(() => {if ( !aunteficate ) Navigate('/')});

    return (
        <>
            { aunteficate?
                favorites.map((favorite) => {
                    return (
                        <div className="img-card" key={favorite.id}>
                            <img src={favorite.url} alt="" />
                        </div>
                    )
                })
                :
                null
            }
        </>
    )
}