import React from 'react'
import { v4 as uuidv4 } from 'uuid';

interface Props {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	config: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
 }

 
// Test data.
// const data = testIncomeStatementData;

// type Company = (typeof data)[0];

// const configs = [
// 	{
// 		label: "Year",
// 		render: (company: Company) => company.acceptedDate
// 	},
// 	{
// 		label: "Cost of Revenue",
// 		render: (company: Company) => company.costOfRevenue
// 	}
// ];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Table = ({config, data}: Props) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const renderedRows = data.map((company: any) => {
		return (
			<tr
				key={uuidv4()}
			>
				{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
				{config.map((val: any) => {
					return (
						<td
							className='p-3'
							key={uuidv4()}
						>
							{val.render(company)}
						</td>
					)
				})}
			</tr>
		)
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const renderHeaders = config.map((config: any) => {
		return (
			<th
				className='p-4 text-left text-xs font-medium text-fray-500 uppercase tracking-wider'
				key={config.label}
			>
				{config.label}
			</th>
		)
	})
	return (
		<table
			className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8'
		>
			<thead
				className='min-w-full divide-y divide=gray-200 m-5'
			>
				<tr>{renderHeaders}</tr>
			</thead>
			<tbody>
				{renderedRows}
			</tbody>
		</table>
	)
}

export default Table