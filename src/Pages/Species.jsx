import { useEffect } from 'react'
import Api from '../Components/Api'
import { Specie } from '../Components/Specie'
import { Preloader } from '../UI/preloader/Preloader'


export const Species = ({species, ch}) => {
    const retri = async () => {
        await Api
            .get('/species')
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
                species ? <Specie species={species} /> : <Preloader />
            }
        </>
    )
}