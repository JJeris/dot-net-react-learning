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
	const onSearchSubmit = async (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
		e.preventDefault();
		const result = await searchCompanies(search);
		if (typeof result === "string") {
			setServerError(result);

		} else if (Array.isArray(result.data)) {
			setSearchResult(result.data);
		}
	}

	/**
	 * Updates the search state, when the input value is changed through a 
	 * ChangeEvent.
	 * @param e 
	 */
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	}

	/**
	 * 
	 * @param e 
	 */
	const onPortfolioCreate = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
		e.preventDefault();
		console.log(e);
	}

	// Use useEffect to log the updated searchResult state
	useEffect(() => {
		// console.log(searchResult);
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
				onSearchSubmit={onSearchSubmit}
				handleSearchChange={handleSearchChange}
			/>
			<CardList
				searchResult={searchResult}
				onPortfolioCreate={onPortfolioCreate}
			/>
		</div>
	)
}

export default App
