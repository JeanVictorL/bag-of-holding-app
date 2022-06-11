import CoinElement from "./CoinElement";

const coins = ["platinum", "gold", "electrum", "silver", "copper"]
const coinElements = coins.map(p => {
    return <CoinElement name={p} />
})

export default function GoldContainer() {
    return (
        <div>
            <CoinElement name="Total Gold" className="totalGold" />
            {coinElements}
        </div>
    )
}