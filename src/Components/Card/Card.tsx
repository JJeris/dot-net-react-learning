import "./Card.css";

type Props = {}

const Card = (props: Props) => {
    return (
        <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" alt="Gray image" />
            <div className="details">
                <h2>AAPL</h2>
                <p>$110</p>
            </div>
            <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, ducimus.</p>
        </div>
    )
}

export default Card