
import { Link } from 'react-router-dom'
import { Button } from '../UI/Button/Button'
export const Film = ({ c}) => {
    return (
        <>
            {
                c.map((film, index )=> {
                    return (
                        <div key={film.episode_id} className="card">
                            <h1 className='title'>Film - {film.title}</h1>
                            <div className='text-card'>
                                <p className='text'>Director - {film.director}</p>
                                <p className='text'>Producer - {film.producer}</p>
                                <p className='text'>Release date - {film.release_date}</p>
                                <Link to={`/${index+1}`}><Button text={'About'} /></Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}