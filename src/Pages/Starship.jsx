import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Api from "../Components/Api";
import { Preloader } from '../UI/preloader/Preloader'

export const Starship = () => {
    const { id } = useParams();

    const [film, setFilm] = useState(false)
    useEffect(() => {
        Api
            .get(`/starships/${id}`)
            .then((rez) => {
                setFilm(rez.data)
            });

    }, [id]);

    return (
        <>
            {
                film ?
                    <div className="card">
                        <h1 className='title'>name - {film.name}</h1>
                        <div className='text-card'>
                            <p className='text'>model - {film.model}</p>
                            <p className='text'>manufacturer - {film.manufacturer}</p>
                            <p className='text'>cost_in_credits - {film.cost_in_credits}</p>
                            <p className='text'>length - {film.length}</p>
                            <p className='text'>max_atmosphering_speed - {film.max_atmosphering_speed}</p>
                            <p className='text'>crew - {film.crew}</p>
                            <p className='text'>passengers - {film.passengers}</p>
                        </div>
                    </div>
                    : <Preloader />
            }
        </>
    )
}