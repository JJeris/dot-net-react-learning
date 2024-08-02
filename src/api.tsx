import axios from "axios";
import { CompanySearch } from "./company";

/**
 * An array of CompanySearch instances.
 */
interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=${import.meta.env.VITE_APP_API_KEY}`
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
};
