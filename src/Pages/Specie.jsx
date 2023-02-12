import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Api from "../Components/Api";
import { Preloader } from '../UI/preloader/Preloader'

export const Specie = () => {
    const { id } = useParams();

    const [film, setFilm] = useState(false)
    useEffect(() => {
        Api
            .get(`/species/${id}`)
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
                            <p className='text'>classification - {film.classification}</p>
                            <p className='text'>designation - {film.designation}</p>
                            <p className='text'>average_height - {film.average_height}</p>
                            <p className='text'>skin_colors - {film.skin_colors}</p>
                            <p className='text'>hair_colors - {film.hair_colors}</p>
                            <p className='text'>eye_colors - {film.eye_colors}</p>
                            <p className='text'>average_lifespan - {film.average_lifespan}</p>
                        </div>
                    </div>
                    : <Preloader />
            }
        </>
    )
}