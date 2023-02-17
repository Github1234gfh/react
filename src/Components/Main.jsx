import { useState, useSyncExternalStore } from "react"
import { Route, Routes } from "react-router-dom"
import { Favorites } from "../Page/Favorites"
import { Home } from "../Page/Home"
import { Imgs } from "../Page/Imgs"
import { Login } from "../Page/Login"
import { Registration } from "../Page/Registrations"
import { Layout } from "./Layout"

export const Main = () => {

    const [albom, setAlbom] = useState(false);
    
    const [aunteficate, setAunteficate] = useState(false);

    const [favorites, setFavorites] = useState([]);

    const ChnageAunteficate = () => {
        setAunteficate(true);
    };

    const ChangeAlbom = (e) => setAlbom(e);

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout aunteficate={aunteficate}/>}>
                    <Route index element={<Home albom={albom} changeAlbom={ChangeAlbom} />}/>
                    <Route path="login" element={<Login aunteficate={aunteficate} ChnageAunteficate={ChnageAunteficate}/>} />
                    <Route path="registration" element={<Registration aunteficate={aunteficate} ChnageAunteficate={ChnageAunteficate}/>} />
                    <Route path="albom/:id" element={<Imgs aunteficate={aunteficate} favorites={favorites} setFavorites={setFavorites}/>}/>
                    <Route path="favorites" element={<Favorites aunteficate={aunteficate} favorites={favorites}/>}/>
                </Route>
            </Routes>
        </>
    )
}