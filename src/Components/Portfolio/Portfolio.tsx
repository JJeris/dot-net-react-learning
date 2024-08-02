import React from 'react';

interface Props {
    
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddPortfolio = (props: Props) => {
  return (
    <div>
        <button
            type='submit'
            // Need to have code that adds this stock to the users portfolio.
            // onClick={}
        >
            Add Stock
        </button>
    </div>
  );
};

export default AddPortfolio;
