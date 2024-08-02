import React, { useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

/**
 * Main App component.
 * @returns 
 */
function App() {
	const [search, setSearch] = useState<string>("");
	const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
	// Server error.
	const [serverError, setServerError] = useState<string>("");

	/**
	 * Sends the value saves in search to the searchCompanies function
	 * when the button element experiences a MouseEvent.
	 * @param e 
	 */
	const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const result = await searchCompanies(search);
		if (typeof result === "string") {
			setServerError(result);
			console.log(serverError);
		} else if (Array.isArray(result.data)) {
			setSearchResult(result.data);
		}
		console.log(searchResult);
	}
	/**
	 * Updates the search state, when the input value is changed through a 
	 * ChangeEvent.
	 * @param e 
	 */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	}
	return (
		<div className="App">
			<Search
				search={search}
				onClick={onClick}
				handleChange={handleChange}
			/>
			<CardList />
		</div>
	)
}

export default App
