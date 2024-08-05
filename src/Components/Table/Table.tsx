import React from 'react'
import { testIncomeStatementData } from '../../Pages/DesignPage/testData'
import { v4 as uuidv4 } from 'uuid';

const data = testIncomeStatementData;

interface Props { }

type Company = (typeof data)[0];

const configs = [
	{
		label: "Year",
		render: (company: Company) => company.acceptedDate
	},
	{
		label: "Cost of Revenue",
		render: (company: Company) => company.costOfRevenue
	}
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Table = (props: Props) => {
	const renderedRows = data.map((company) => {
		return (
			<tr
				key={uuidv4()}
			>
				{configs.map((val: any) => {
					return (
						<td
							className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'
							key={uuidv4()}
						>
							{val.render(company)}
						</td>
					)
				})}
			</tr>
		)
	});

	const renderHeaders = configs.map((config: any) => {
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
		<div
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
		</div>
	)
}

export default Table