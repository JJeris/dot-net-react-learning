import axios from "axios";
import { CompanySearch, CompanyProfile, CompanyKeyMetrics, CompanyIncomeStatement, CompanyBalanceSheet } from './company';

/**
 * An array of CompanySearch instances.
 */
interface SearchResponse {
    data: CompanySearch[];
}

/**
 * Gets a list of companies from a search.
 * 
 * @param query 
 * @returns 
 */
export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=${import.meta.env.VITE_APP_API_KEY}`
            // `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_APP_API_KEY}`
        );
        return data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log(`error message: ${err.message}`);
            return err.message;
        } else {
            console.error(`unexpected error: ${err}`);
            return "An unexpected error has occurred.";
        }
    }
};

/**
 * Gets a certain companies profile.
 * 
 * @param query 
 * @returns 
 */
export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${import.meta.env.VITE_APP_API_KEY}`
        );
        return data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log(`error message: ${err.message}`);
            return err.message;
        } else {
            console.error(`unexpected error: ${err}`);
            return "An unexpected error has occurred.";
        }
    }
}

/**
 * Gets the key metrics.
 * @param query \
 * @returns 
 */
export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${import.meta.env.VITE_APP_API_KEY}`
        );
        console.log(data);
        return data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log(`error message: ${err.message}`);
            return err.message;
        } else {
            console.error(`unexpected error: ${err}`);
            return "An unexpected error has occurred.";
        }
    }
}

export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${import.meta.env.VITE_APP_API_KEY}`
        );
        console.log(data);
        return data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log(`error message: ${err.message}`);
            return err.message;
        } else {
            console.error(`unexpected error: ${err}`);
            return "An unexpected error has occurred.";
        }
    }
}

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?period=annual&apikey=${import.meta.env.VITE_APP_API_KEY}`
            // AAPL?period=annual&
        );
        console.log(data);
        return data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log(`error message: ${err.message}`);
            return err.message;
        } else {
            console.error(`unexpected error: ${err}`);
            return "An unexpected error has occurred.";
        }
    }
}