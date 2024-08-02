import React from 'react';

interface Props {
    search: string | undefined;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Search component.
 * 
 * Dumb component, that gets its props provided by higher level 
 * smart components.
 */
const Search: React.FC<Props> = ({search, onClick, handleChange}: Props): JSX.Element => {
    return (
        <div>
            <p>{search}</p>
            <input
                title='input search'
                value={search}
                onChange={
                    (e) => handleChange(e)
                }
            >
            </input>
            <button
                type='button'
                onClick={
                    (e) => onClick(e)
                }
            >
                Button
            </button>
        </div>
    );
}

export default Search;
