export default function CoinElement(props) {
    return (
        <div>
            <h3 className="coinName" >{props.name}</h3>
            <input type="text" className="coin" />
        </div>
    )
}