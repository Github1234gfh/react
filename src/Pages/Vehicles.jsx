import { useEffect } from 'react';
import Api from '../Components/Api';
import { Vehicle } from '../Components/Vehicle';
import { Preloader } from '../UI/preloader/Preloader';


export const Vehicles = ({vehicles, ch}) => {
    const retri = async () => {
        await Api
            .get('/vehicles')
            .then(rez => {
                ch(rez.data.results)
            })
    }

    useEffect(() => {
        retri()
    }, [])



    return (
        <>
            {
                vehicles ? <Vehicle vehicles={vehicles} /> : <Preloader />
            }
        </>
    )
}