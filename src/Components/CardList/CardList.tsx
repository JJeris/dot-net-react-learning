import Card from "../Card/Card";
import "./CardList.css";

interface Props {}

const CardList: React.FC<Props> = (props: Props) : JSX.Element => {
    return (
        <div className="card_list">
            <Card companyName={"Microsoft"} ticker={"MS"} price={2000} />
            <Card companyName={"Apple"} ticker={"APPL"} price={0.1} />
            <Card companyName={"Netflix"} ticker={"NFLIX"} price={2} />
        </div>
    )
}

export default CardList