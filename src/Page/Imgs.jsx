import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Img } from "../Components/Img";
import { Preloader } from "../UI/preloader/Preloader";

export const Imgs = ({aunteficate, favorites, setFavorites}) => {

    const [Imgs, setImgs] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then((rez) => {
                setImgs(rez.data);
            });
    }, [id]);

    return (
        <>
            {
                Imgs?
                <Img imgs={Imgs} aunteficate={aunteficate} favorites={favorites} setFavorites={setFavorites}/>
                :
                <Preloader />
            }
        </>
    )
}