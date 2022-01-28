import { PublicKey } from "@solana/web3.js"
import { Fragment } from "react"

interface Props {
  onDrop: (balance: number) => void
  publicKey: PublicKey
}

function Airdrop(props: Props) {
  const airdrop = async () => {
    const response = await fetch(`/api/airdrop/${props.publicKey}`, {
      method: 'POST'
    })
    const data = await response.json()
    const balance = data?.balance
    props.onDrop(balance)
  }

  return (
    <Fragment>
      <button onClick={airdrop}>Airdrop</button>
    </Fragment>
  )
}

export default Airdrop
