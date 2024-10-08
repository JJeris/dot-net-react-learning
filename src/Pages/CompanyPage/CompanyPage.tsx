import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';

interface Props {

}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CompanyPage = (props: Props) => {

	const { ticker } = useParams();
	const [company, setCompany] = useState<CompanyProfile>();


	useEffect(() => {
		const getProfileInit = async () => {
			try {
				const result = await getCompanyProfile(ticker!);
				if (result.data === undefined) {
					setCompany(undefined);
					return undefined;
				}
				setCompany(result?.data[0]);
			} catch (err) {
				console.error(err);
			}
		}

		getProfileInit();
	}, [])

	return (
		<>
			{company ? (
				<div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
					<Sidebar/>
					<CompanyDashboard
						ticker={ticker!}
					>
						<Tile
							title='Company Name'
							subTitle={company.companyName}
						></Tile>
						<Tile
							title='Price'
							subTitle={`$${company.price.toString()}`}
						></Tile>
						<Tile
							title='Sector'
							subTitle={company.sector}
						></Tile>
						<Tile
							title='DCF'
							subTitle={`$${company.dcf.toString()}`}
						></Tile>
						<p className='bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4' >
							{company.description}
						</p>
					</CompanyDashboard>
				</div>
			) : (
				<div>No company found!</div>
			)}

		</>
	)
}

export default CompanyPage