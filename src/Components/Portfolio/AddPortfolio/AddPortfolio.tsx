import React from 'react';

interface Props {
    onPortfolioCreate: (e: React.MouseEvent<HTMLFormElement, MouseEvent> ) => void; //SyntheticEvent) => void;
    symbol: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddPortfolio: React.FC<Props> = ({ onPortfolioCreate, symbol }: Props) => {
    return (
        <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
        <form onSubmit={onPortfolioCreate}>
          <input readOnly={true} hidden={true} value={symbol} />
          <button
            type="submit"
            className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
          >
            Add
          </button>
        </form>
      </div>
    );
};

export default AddPortfolio;