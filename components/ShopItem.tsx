
import { Fragment, useState } from 'react'

interface Props {
    name: string
    cost: number
    onBuy: (quantity: number) => void
}

function ShopItem(props: Props) {
    const [quantity, setQuantity] = useState(0)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr 1fr' }}>
        <div>{props.name}</div>
        <div>{props.cost}</div>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.valueAsNumber)}/>
        <button onClick={() => props.onBuy(quantity)}>Buy</button>
    </div>
          
  )
}

export default ShopItem
