import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/ListPortfolio/ListPortfolio';

/**
 * Main App component.
 * @returns 
 */
function App() {
	// The users search.
	const [search, setSearch] = useState<string>("");
	// The users result described by the value withing search.
	const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
	
	const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
	
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
	 * Add a stock to the portfolio.
	 * 
	 * @param e 
	 */
	const onPortfolioCreate = (
		// e: React.MouseEvent<HTMLFormElement, MouseEvent>
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		e: any
	) => { 
		e.preventDefault();
		const existsInList = portfolioValues.find((value) => value === e.target[0].value);
		if (existsInList) {
			return undefined;
		}
		const updatedPortfolio = [
			...portfolioValues,
			e.target[0].value
		];
		setPortfolioValues(updatedPortfolio);
	}


	/**
	 * 
	 * @param e 
	 */
	const onPortfolioDelete = (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		e: any
	) => {
		e.preventDefault();
		console.log(e);

		const removed = portfolioValues.filter((value) => {
			return value !== e.target[0].value;

		})
		setPortfolioValues(removed);
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
			<ListPortfolio 
				portfolioValues={portfolioValues} 
				onPortfolioDelete={onPortfolioDelete}	
			/>
			<CardList
				searchResult={searchResult}
				onPortfolioCreate={onPortfolioCreate}
			/>
		</div>
	)
}

export default App
