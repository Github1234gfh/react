import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../Components/Layout'
import { Home } from './Home'
import { LogIn } from './LogIn'
import { Order } from './Order'
import { Registration } from './Registration'



export const Main = () => {



	const CecheckAutnteficate = () => {
		if (localStorage.getItem('password') && localStorage.getItem('email')) return true
		return false
	}


	const checkOrders = () => {
		if (localStorage.getItem('orders') && CecheckAutnteficate() ) return JSON.parse(localStorage.getItem('orders'))
		return []
	}

	const [orders, setOrders] = useState(checkOrders())





	const [autnteficate, setAutnteficate] = useState(CecheckAutnteficate())


	const ChangeAutnteficate = () => {
		setAutnteficate(true)
	}

	const ChangeOrders = (e) => {
		setOrders(e)
	}

	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout autnteficate={autnteficate} />}>
					<Route index element={<Home autnteficate={autnteficate} orders={orders} ch={ChangeOrders} />} />
					<Route path="registration" element={<Registration ch={ChangeAutnteficate} checkor={checkOrders} />} />
					<Route path="login" element={<LogIn ch={ChangeAutnteficate}/>} />
					<Route path="orders" element={<Order orders={orders} ch={ChangeOrders} />} />
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</div>
	)
}

