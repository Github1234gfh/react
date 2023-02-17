import axios from 'axios'
import { useEffect } from 'react'
import { Animals } from '../Components/Animals'
import  {Preloader} from '../UI/preloader/Preloader'

export const Home = ({albom, changeAlbom, cart, setCart, aunteficate}) => {

    const retri = async () => {
        await axios
            .get('https://petstore.swagger.io/v2/pet/findByStatus?status=pending')
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
               albom?<Animals albom={albom} cart={cart} setCart={setCart} aunteficate={aunteficate}/>
               : <Preloader />
            }
        </>
    )
}