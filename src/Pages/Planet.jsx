import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Api from "../Components/Api";
import { Preloader } from '../UI/preloader/Preloader'

export const Planet = () => {
    const { id } = useParams();

    const [film, setFilm] = useState(false)
    useEffect(() => {
        Api
            .get(`/planets/${id}`)
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
                            <p className='text'>rotation_period - {film.rotation_period}</p>
                            <p className='text'>orbital_period - {film.orbital_period}</p>
                            <p className='text'>climate - {film.climate}</p>
                            <p className='text'>gravity - {film.gravity}</p>
                            <p className='text'>terrain - {film.terrain}</p>
                            <p className='text'>surface_water - {film.surface_water}</p>
                            <p className='text'>population - {film.population}</p>
                        </div>
                    </div>
                    : <Preloader />
            }
        </>
    )
}