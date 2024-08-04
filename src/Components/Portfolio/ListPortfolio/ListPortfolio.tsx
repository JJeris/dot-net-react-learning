import React from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import { v4 as uuidv4 } from "uuid";

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e: React.SyntheticEvent) => void;
}

const ListPortfolio = ({portfolioValues, onPortfolioDelete}: Props) => {
  return (
    <>
    <h1>My Portfolio</h1>
    <ul>
        {portfolioValues && 
            portfolioValues.map((portfolioValue) => {
                    return (
                        <li
                            key={uuidv4()}
                        >
                            <CardPortfolio                             
                                portfolioValue={portfolioValue} 
                                onPortfolioDelete={onPortfolioDelete} 
                            />
                        </li>
                    )
                }
            ) 
        }
    </ul>
    </>
    
  )
}

export default ListPortfolio