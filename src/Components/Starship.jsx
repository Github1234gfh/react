import { Link } from 'react-router-dom'
import { Button } from '../UI/Button/Button'

export const Starship = ({ ships }) => {
    
    return (
        <>
            {
                ships.map((shio, index )=> {
                    return (
                        <div key={shio.name} className="card">
                            <h1 className='title'>ship - {shio.name}</h1>
                            <div className='text-card'>
                                <p className='text'>model - {shio.model}</p>
                                <p className='text'>manufacturer - {shio.manufacturer}</p>
                                <p className='text'>cost_in_credits - {shio.cost_in_credits}</p>
                                <Link to={`/starships/${index+1}`}><Button text={'About'} /></Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}