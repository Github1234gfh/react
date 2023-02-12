import { useEffect } from 'react';
import Api from '../Components/Api';
import { Starship } from '../Components/Starship';
import { Preloader } from '../UI/preloader/Preloader';


export const Starships = ({ships, ch}) => {
    const retri = async () => {
        await Api
            .get('/starships')
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
                ships ? <Starship ships={ships} /> : <Preloader />
            }
        </>
    )
}