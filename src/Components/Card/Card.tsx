import { CompanySearch } from "../../company";
import "./Card.css";

interface Props {
    id: string;
    searchResult: CompanySearch; // Note, not an array.
}

const Card: React.FC<Props> = ({id, searchResult}: Props) : JSX.Element => {
    return (
        <div className="card" id={id}>
            <img alt={`Company logo: ${searchResult.name}`} />
            <div className="details">
                <h2>{searchResult.name} | ({searchResult.symbol})</h2>
                <p>${searchResult.currency}</p>
            </div>
            <p className="info">
                {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
        </div>
    )
}

export default Card