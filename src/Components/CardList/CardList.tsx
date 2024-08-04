import React from 'react';
import { CompanySearch } from "../../company";
import Card from "../Card/Card";
import "./CardList.css";
// import { v4 as uuidv4 } from "uuid";

interface Props {
    searchResult: CompanySearch[];
    onPortfolioCreate: (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => void;
}

const CardList: React.FC<Props> = ({ searchResult, onPortfolioCreate }: Props) : JSX.Element => {
    return (
        <>
            {searchResult.length > 0 ? (
                searchResult.map((result) => (
                    <Card 
                        id={result.symbol}
                        key={result.symbol}
                        searchResult={result}
                        onPortfolioCreate={onPortfolioCreate}
                    />
                ))
            ) : (
                <h1>No result found.</h1>
            )}
        </>
    );
};

export default CardList