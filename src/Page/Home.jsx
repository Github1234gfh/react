import axios from 'axios'
import { useEffect } from 'react'
import { Albom } from '../Components/Albom'
import  {Preloader} from '../UI/preloader/Preloader'

export const Home = ({albom, changeAlbom}) => {

    const retri = async () => {
        await axios
            .get('https://jsonplaceholder.typicode.com/albums')
            .then((rez) => {
                changeAlbom(rez.data)
            })
    }

    useEffect (() => {
        retri()
    }, [])

    return (
        <>
            {
               albom?<Albom albom={albom}/>
               : <Preloader />
            }
        </>
    )
}