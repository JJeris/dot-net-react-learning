import "./Card.css";

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
    return (
        <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" alt="Gray image" />
            <div className="details">
                <h2>{companyName} | ({ticker})</h2>
                <p>${price}</p>
            </div>
            <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, ducimus.</p>
        </div>
    )
}

export default Card