import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Film } from "../Pages/Film";
import { Films } from "../Pages/Films";
import { People } from "../Pages/People";
import { Peoples } from '../Pages/Peoples';
import { Planet } from "../Pages/Planet";
import { Planets } from "../Pages/Planets";
import { Specie } from "../Pages/Specie";
import { Species } from "../Pages/Species";
import { Starship } from "../Pages/Starship";
import { Starships } from "../Pages/Starships";
import { Vehicle } from "../Pages/Vehicle";
import { Vehicles } from "../Pages/Vehicles";
import { Leyout } from "./Layet";


export const Main = () => {

    const [films, setFilms] = useState(false);
    const [planets, setPlanets] = useState(false);
    const [people, setPeople] = useState(false);
    const [species, setSpecies] = useState(false);
    const [vehicles, setVehicles] = useState(false);
    const [starships, setStarships] = useState(false);

    const chnagePeople = (e) => setPeople(e);
    const ChangeSpecies = (e) => setSpecies(e);
    const ChangeVehies = (e) => setVehicles(e);
    const ChangeStarships = (e) => setStarships(e);
    const ChangeFilms = (e) => setFilms(e);
    const ChnagePlanets = (e) => setPlanets(e);

    return (
        <>
            <div className="back-inner">
                <img src="https://wallpaperaccess.com/full/3532041.jpg" className="backgound" />
            </div>
            <div className="contenent">
                <Routes>
                    <Route path="/" element={<Leyout/>}>
                        <Route index element={<Films c={films}  ch={ChangeFilms}/>} />
                        <Route path="planets" element={<Planets planets={planets} ch={ChnagePlanets}/>} />
                        <Route path="people" element={<Peoples peoples={people} ch={chnagePeople}/>}/>
                        <Route path="species" element={<Species species={species} ch={ChangeSpecies}/>}/>
                        <Route path="vehicles" element={<Vehicles vehicles={vehicles} ch={ChangeVehies}/>}/>
                        <Route path="starships" element={<Starships ships={starships} ch={ChangeStarships}/>}/>
                        <Route path=":id" element={<Film />}/>
                        <Route path="people/:id" element={<People />}/>
                        <Route path="planets/:id" element={<Planet />}/>
                        <Route path="vehicles/:id" element={<Vehicle />}/>
                        <Route path="species/:id" element={<Specie />}/>
                        <Route path="starships/:id" element={<Starship />}/>
                        <Route path="*" element={<Films c={films} ch={ChangeFilms} />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
};