import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Cart } from "../Page/Cart"
import { Home } from "../Page/Home"
import { Login } from "../Page/Login"
import { Orders } from "../Page/Orders"
import { Registration } from "../Page/Registrations"
import { Layout } from "./Layout"
import { Users } from "./Users"


export const Main = () => {

    const [albom, setAlbom] = useState(false);
    
    const [title, setTitle] = useState(false);

    const [users, setUsers] = useState(Users);

    const [aunteficate, setAunteficate] = useState(false);

    const [cart, setCart] = useState([]);

    const [orders, setOrders] = useState([]);

    const ChnageAunteficate = () => {
        setAunteficate(true);
    };

    const ChangeAlbom = (e) => setAlbom(e);

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout aunteficate={aunteficate} title={title} setAunteficate={setAunteficate}/>}>
                    <Route index element={<Home albom={albom} changeAlbom={ChangeAlbom}  cart={cart} setCart={setCart} aunteficate={aunteficate}/>}/>
                    <Route path="login" element={<Login aunteficate={aunteficate} ChnageAunteficate={ChnageAunteficate} users={users} setTitle={setTitle}/>} />
                    <Route path="registration" element={<Registration aunteficate={aunteficate} ChnageAunteficate={ChnageAunteficate} users={users} setUsers={setUsers}/>} />
                    <Route path="cart" element={<Cart aunteficate={aunteficate} cart={cart} setCart={setCart} orders={orders} setOrders={setOrders}/>}/>
                    <Route path="orders" element={<Orders aunteficate={aunteficate} orders={orders} setOrders={setOrders}/>}/>
                    <Route path="*" element={<Home albom={albom} changeAlbom={ChangeAlbom} />}/>
                </Route>
            </Routes>
        </>
    )
}