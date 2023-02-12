import { useEffect } from 'react'
import Api from '../Components/Api'
import { Preloader } from '../UI/preloader/Preloader'
import { Planet } from '../Components/Planet'

export const Planets = ({planets, ch}) => {
    const retri = async () => {
        await Api
            .get('/planets')
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
                planets ? <Planet planet={planets} /> : <Preloader />
            }
        </>
    )
}