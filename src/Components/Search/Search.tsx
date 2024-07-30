import React from 'react';
import { useState } from 'react';

interface Props {}

const Search: React.FC<Props> = (props: Props) : JSX.Element => {
    const [search, setSearch] = useState<string>("");
    const onclick = (e: any) => {
        setSearch(e.target.value);
        console.log(e);
    }

    return (
        <div>
            <p>{search}</p>
            <input 
                title='input search'
                value={search} onChange={
                    (e) => onclick(e)
                }
            >
            </input>
        </div>
    );
}

export default Search;
