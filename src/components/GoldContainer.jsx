import CoinElement from "./CoinElement";

const coins = ["PP", "GP", "EP", "SP", "CP"]
const coinElements = coins.map(p => {
    return <CoinElement name={p} />
})

export default function GoldContainer() {
    return (
        <div className="coins">
            <h3 className="coinName" >Total Gold</h3>
            <input type="text" readOnly className="totalGold coin" />
            {coinElements}
        </div>
    )
}