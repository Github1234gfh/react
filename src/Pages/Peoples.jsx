import { useEffect } from 'react'
import Api from '../Components/Api'
import { Preloader } from '../UI/preloader/Preloader'
import { People } from '../Components/People'

export const Peoples = ({peoples, ch}) => {
    const retri = async () => {
        await Api
            .get('/people')
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
                peoples ? <People people={peoples} /> : <Preloader />
            }
        </>
    )
}