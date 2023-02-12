import { Link } from 'react-router-dom'
import { Button } from '../UI/Button/Button'

export const Specie = ({ species }) => {
    
    return (
        <>
            {
                species.map((specie, index) => {
                    return (
                        <div key={specie.name} className="card">
                            <h1 className='title'>specie - {specie.name}</h1>
                            <div className='text-card'>
                                <p className='text'>designation - {specie.designation}</p>
                                <p className='text'>average height - {specie.average_height}</p>
                                <p className='text'>skin colors - {specie.skin_colors}</p>
                                <Link to={`/species/${index+1}`}><Button text={'About'} /></Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}