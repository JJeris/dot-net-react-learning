import React from 'react';
import { useState } from 'react';

interface Props { }

const Search: React.FC<Props> = (props: Props): JSX.Element => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e);
    }

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
