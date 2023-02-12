import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Api from "../Components/Api";
import { Preloader } from '../UI/preloader/Preloader'

export const People = () => {
    const { id } = useParams();

    const [film, setFilm] = useState(false)
    useEffect(() => {
        Api
            .get(`/people/${id}`)
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
                            <p className='text'>height - {film.height}</p>
                            <p className='text'>height - {film.height}</p>
                            <p className='text'>hair_color - {film.hair_color}</p>
                            <p className="text">skin_color - {film.skin_color}</p>
                            <p className="text">eye_color - {film.eye_color}</p>
                            <p className="text">birth_year - {film.birth_year}</p>
                            <p className="text">gender - {film.gender}</p>
                        </div>
                    </div>
                    : <Preloader />
            }
        </>
    )
}