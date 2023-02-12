import { Link } from 'react-router-dom'
import { Button } from '../UI/Button/Button'

export const Vehicle = ({ vehicles }) => {
    
    return (
        <>
            {
                vehicles.map((vehicle, index) => {
                    return (
                        <div key={vehicle.name} className="card">
                            <h1 className='title'>vehicle - {vehicle.name}</h1>
                            <div className='text-card'>
                                <p className='text'>model - {vehicle.model}</p>
                                <p className='text'>manufacturer - {vehicle.manufacturer}</p>
                                <p className='text'>cost_in_credits - {vehicle.cost_in_credits}</p>
                                <Link to={`/vehicles/${index+1}`}><Button text={'About'} /></Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}