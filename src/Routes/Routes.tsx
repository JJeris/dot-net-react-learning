import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPages/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import DesignPage from "../Pages/DesignPage/DesignPage";
import BalanceSheetStatement from "../Components/BalanceSheetStatement/BalanceSheetStatement";
import CashflowStatement from "../Components/CashflowStatement/CashflowStatement";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage/>},
            {path: "search", element: <SearchPage/>},
            {path: "design-guide", element: <DesignPage/>},
            {
                path: "company/:ticker/company-profile", 
                element: <CompanyPage/>,
                children: [
                    {path: "company-profile", element: <CompanyProfile/>},
                    {path: "income-statement", element: <IncomeStatement/>},
                    {path: "balance-sheet-statement", element: <BalanceSheetStatement/>},
                    {path: "cashflow-statement", element: <CashflowStatement/>},
                ]
            },
        ],
    }
])