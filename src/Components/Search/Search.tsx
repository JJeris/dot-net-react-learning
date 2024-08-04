import React from 'react';

interface Props {
    search: string | undefined;
    onSearchSubmit: (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => void;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Search component.
 * 
 * Dumb component, that gets its props provided by higher level 
 * smart components.
 */
const Search: React.FC<Props> = ({search, onSearchSubmit, handleSearchChange}: Props): JSX.Element => {
    return (
        <>
            <form 
                onSubmit={onSearchSubmit}
            >
                <input title='search input' value={search} onChange={handleSearchChange} />


            </form>
        </>

    );
}

export default Search;