import { Link } from 'react-router-dom'
import { Button } from '../UI/Button/Button'

export const People = ({ people }) => {
    
    return (
        <>
            {
                people.map((pep, index) => {
                    return (
                        <div key={pep.name} className="card">
                            <h1 className='title'>People - {pep.name}</h1>
                            <div className='text-card'>
                                <p className='text'>height - {pep.height}</p>
                                <p className='text'>mass - {pep.mass}</p>
                                <p className='text'>hair_color - {pep.hair_color}</p>
                                <Link to={`/people/${index+1}`}><Button text={'About'} /></Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}