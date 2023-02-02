import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../Components/Layout'
import { Home } from './Home'
import { LogIn } from './LogIn'
import { Order } from './Order'
import { Registration } from './Registration'
import { Users } from '../Components/Users'


export const Main = () => {

	const CecheckAutnteficate = () => {
		if (localStorage.getItem('password') && localStorage.getItem('email')) return true
		return false
	}

	const checkOrders = () => {
		if (localStorage.getItem('orders') && CecheckAutnteficate() ) return JSON.parse(localStorage.getItem('orders'))
		return []
	}

	const [User, SetUser] = useState(Users)
	const [orders, setOrders] = useState(checkOrders())
	const [autnteficate, setAutnteficate] = useState(CecheckAutnteficate())

	const ChangeAutnteficate = (e) => (setAutnteficate(e))
	const ChangeOrders = (e) => (setOrders(e))
	const ChangeUsers = (e) => (SetUser(e))

	

	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout autnteficate={autnteficate} ch={ChangeAutnteficate}/>}>
					<Route index element={<Home autnteficate={autnteficate} orders={orders} ch={ChangeOrders} />} />
					<Route path="registration" element={<Registration ch={ChangeAutnteficate} checkor={checkOrders} users={User} Chauser={ChangeUsers}/>} />
					<Route path="login" element={<LogIn users={User} ch={ChangeAutnteficate} />}/>
					<Route path="orders" element={<Order orders={orders} ch={ChangeOrders} />} />
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</div>
	)
}

