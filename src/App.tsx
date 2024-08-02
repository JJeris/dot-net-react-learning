import React, { useEffect, useState } from 'react';
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
	// The users search.
	const [search, setSearch] = useState<string>("");
	// The users result described by the value withing search.
	const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
	// Server error.
	const [serverError, setServerError] = useState<string | null>(null);
	
	/**
	 * Sends the value saves in search to the searchCompanies function
	 * when the button element experiences a MouseEvent.
	 * @param e 
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const result = await searchCompanies(search);
		if (typeof result === "string") {
			setServerError(result);
			console.log(serverError);
		} else if (Array.isArray(result.data)) {
			setSearchResult(result.data);
		}
	}

	/**
	 * Updates the search state, when the input value is changed through a 
	 * ChangeEvent.
	 * @param e 
	 */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	}

	// Use useEffect to log the updated searchResult state
	useEffect(() => {
		console.log(searchResult);
	}, [searchResult]);

	return (
		<div className="App">
			{/* 
			Use AND here, not the ternary operator, because we don't want to have
			additional conditional branches. 
			*/}
			{serverError && <h1>{serverError}</h1>}
			<Search
				search={search}
				onClick={onClick}
				handleChange={handleChange}
			/>
			<CardList
				searchResult={searchResult}
			/>
		</div>
	)
}

export default App
