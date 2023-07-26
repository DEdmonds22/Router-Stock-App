import { Link } from "react-router-dom";

export default function Dashboard({stocks}) {
    return (
        <div>
            {stocks.map((stock, index) => {
                return (
                    <Link to={`stocks/${stock.symbol}`}>{stock.name}</Link>
                )
            })}
        </div>
    )
}