
export default function Stock({stocks}) {

    return (
        <div>
            {stocks.stock?.map((stock, index) => {
                return (
                    <div>
                        <h2>Name: {stock.name}</h2>
                        <h2>Price: {stock.lastPrice}</h2>
                    </div>
                )
            })}
        </div>
    )
}