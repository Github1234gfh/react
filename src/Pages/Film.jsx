import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Api from "../Components/Api";
import { Preloader } from '../UI/preloader/Preloader'
export const Film = () => {
    const { id } = useParams();

    const [film, setFilm] = useState(false)
    useEffect(() => {
        Api
            .get(`/films/${id}`)
            .then((rez) => {
                setFilm(rez.data)
            });

    }, [id]);

    return (
        <>
            {
                film ?
                    <div className="card">
                        <h1 className='title'>Film - {film.title}</h1>
                        <div className='text-card'>
                            <p className="text">{film.opening_crawl}</p>
                            <p className='text'>Director - {film.director}</p>
                            <p className='text'>Producer - {film.producer}</p>
                            <p className='text'>Release date - {film.release_date}</p>
                        </div>
                    </div>
                    : <Preloader />
            }
        </>
    )
}