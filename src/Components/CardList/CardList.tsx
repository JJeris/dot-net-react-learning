import { CompanySearch } from "../../company";
import Card from "../Card/Card";
import "./CardList.css";
import { v4 as uuidv4 } from "uuid";

interface Props {
    searchResult: CompanySearch[];
}

const CardList: React.FC<Props> = ({searchResult}: Props) : JSX.Element => {
    return (
        <>
            {searchResult.length > 0 ? (
                searchResult.map((result) => {
                    return (
                        <Card 
                            id={result.symbol} 
                            key={uuidv4()}
                            searchResult={result}
                        />
                    )
                })
            ) : (
                <h1>No result found.</h1>
            )}

        </>
    )
}

export default CardList

{/* <div className="card_list">
<Card companyName={"Microsoft"} ticker={"MS"} price={2000} />
<Card companyName={"Apple"} ticker={"APPL"} price={0.1} />
<Card companyName={"Netflix"} ticker={"NFLIX"} price={2} />
</div> */}