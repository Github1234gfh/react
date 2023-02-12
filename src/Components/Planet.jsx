import { Link } from "react-router-dom"
import { Button } from "../UI/Button/Button"

export const Planet = ({ planet }) => {
    
    return (
        <>
            {
                planet.map((plan, index) => {
                    return (
                        <div key={plan.name} className="card">
                            <h1 className='title'>Planet - {plan.name}</h1>
                            <div className='text-card'>
                                <p className='text'>diameter - {plan.diameter}</p>
                                <p className='text'>climate - {plan.climate}</p>
                                <p className='text'>terrain - {plan.terrain}</p>
                                <Link to={`/planets/${index+1}`}><Button text={'About'} /></Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}