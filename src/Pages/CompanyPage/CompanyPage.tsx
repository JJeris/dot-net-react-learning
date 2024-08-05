import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';

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
				<div>{company.companyName}</div>
			) : (
				<div>No company found!</div>
			)}
			
		</>
	)
}

export default CompanyPage