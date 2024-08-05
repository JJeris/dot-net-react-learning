import React from 'react'
// import Tile from '../Tile/Tile';
import { Outlet } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CompanyDashboard = ({children}: Props) => {
    return (
        <div className="relative md:ml-64 bg-blueGray-100 w-full">
            <div className="relative pt-20 pb-32 bg-lightBlue-500">
                <div className="px-4 md:px-6 mx-auto w-full">
                    <div>
                        <div className="flex flex-wrap">
                            {children}
                        </div>
                        {/* This would render the children for this route.
                        children: [
                            {path: "company-profile", element: <CompanyProfile/>},
                            {path: "income-statement", element: <IncomeStatement/>},
                        ]
                        */}
                        <div className="flex flex-wrap">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDashboard