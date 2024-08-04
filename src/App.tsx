import React from 'react';
import './App.css';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
/** 
 * Main App component.
 * @returns 
 */
function App() {
	return (
		<>
			<Navbar/>
			<Outlet/>
		</>
	)
}

export default App
