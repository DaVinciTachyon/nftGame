import { PublicKey } from "@solana/web3.js"
import { Fragment, useState } from "react"

interface User {
  mnemonic: string
  balance: number
  publicKey: PublicKey
  secretKey: string
}

interface Props {
  onAccess: (user: User) => void
}

function AccessAccount(props: Props) {
  const [mnemonic, setMnemonic] = useState("");
  const accessMnemonic = async () => {
    const response = await fetch(`/api/wallet/${mnemonic}`, {
      method: 'POST'
    })
    const data = await response.json()
    const account = data?.account
    props.onAccess(
      {
        mnemonic,
        balance: account.balance,
        publicKey: account.publicKey,
        secretKey: account.secretKey
      }
    )
  }

  return (
    <Fragment>
      <input value={mnemonic} onChange={(e) => setMnemonic(e.target.value)}/>
      <button onClick={accessMnemonic}>Access</button>
    </Fragment>
  )
}

export default AccessAccount
