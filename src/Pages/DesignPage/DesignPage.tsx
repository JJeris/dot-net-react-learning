import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/testData';

interface Props { }


const tableConfig = [
	{
		label: "Market Cap",
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		render: (company: any) => company.marketCapTTM,
		subTitle: "Total value of all a company's shares of stock",
	},
];

/**
 * The design page.
 * @param props 
 * @returns 
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DesignPage = (props: Props) => {
	return (
		<>
			<h1>Design Page</h1>
			<h2>
				Design page meant to house design aspects of the app.
			</h2>
			<RatioList 
				data={testIncomeStatementData} 
				config={tableConfig}
			/>
			<Table />

		</>
	)
}

export default DesignPage