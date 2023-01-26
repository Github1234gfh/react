import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../Components/Layout'
import { Cart } from './Cart'
import { Home } from './Home'
import { LogIn } from './LogIn'
import { Order } from './Order'
import { Registration } from './Registration'



export const Main = () => {



	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="registration" element={<Registration />} />
					<Route path="login" element={<LogIn />} />
					<Route path="orders" element={<Order />} />
					<Route path="cart" element={<Cart />} />
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</div>
	)
}

