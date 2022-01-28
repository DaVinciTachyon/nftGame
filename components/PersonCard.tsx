import { PublicKey } from "@solana/web3.js"
import Card from "./Card"
import PersonItem from "./PersonItem"

interface Props {
  publicKey: PublicKey
  gold: number
  items: {
    id: string
    name: string
    quantity: number
  }[]
}

function PersonCard(props: Props) {
  return (
    <Card>
      <h2>{props.publicKey}</h2>
      <p>Gold: {props.gold}</p>
      <div>
        <p>Items</p>
        {props.items.map((item) => <PersonItem key={item.id} name={item.name} quantity={item.quantity} />)}
      </div>
    </Card>
  )
}

export default PersonCard
