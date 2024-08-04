import React from 'react';

interface Props {
    onPortfolioCreate: (e: React.MouseEvent<HTMLFormElement, MouseEvent> ) => void; //SyntheticEvent) => void;
    symbol: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddPortfolio: React.FC<Props> = ({ onPortfolioCreate, symbol }: Props) => {
    return (
        <form onSubmit={onPortfolioCreate}>
            <input 
                readOnly={true} 
                hidden={true} 
                value={symbol} 
            />
            <button type='submit'>
                Add
            </button>
        </form>
    );
};

export default AddPortfolio;