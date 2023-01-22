
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";

import Main from "./pages/Main";
import About  from './pages/About'
import Goods  from './pages/Goods'
import Item from "./pages/Item";

function App() {

	const style = {
		display: 'flex',
		flexDirection:'column',
		maxWidth: 1440,
		margin: '0 auto',
		padding: '30px',
		gap: 30
	}
  return (
    <div className="App" style={style}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={ <Main />}/>
					<Route path="about" element={ <About />}/>
					<Route path="goods" element={ <Goods />}/>
					<Route path="goods/:id" element={ <Item />}/>
					<Route path="*" element={ <Main />}/>
				</Route>
			</Routes>
    </div>
  );
}

export default App;
