import { useEffect } from 'react'
import Api from '../Components/Api'
import { Film } from '../Components/Film'
import { Preloader } from '../UI/preloader/Preloader'

export const Films = ({ c, ch}) => {

    const retri = async () => {
        await Api
            .get('/films')
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
                c ? <Film  c={c} /> : <Preloader />
            }
        </>
    )
}