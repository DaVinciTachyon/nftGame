import { PublicKey } from "@solana/web3.js";
import { Fragment, useState } from "react"

interface Props {
  onGenerate: (publicKey: PublicKey, secretKey: string, mnemonic: string) => void
}

function GenerateAccount(props: Props) {
  const [mnemonic, setMnemonic] = useState("");
  const generateMnemonic = async () => {
    const response = await fetch('/api/wallet', {
      method: 'POST'
    })
    const data = await response.json()
    const wallet = data?.wallet
    setMnemonic(wallet?.mnemonic);
    props.onGenerate(new PublicKey(wallet?.publicKey), wallet?.secretKey, wallet?.mnemonic)
  }

  return (
    <Fragment>
      <button onClick={generateMnemonic}>Generate Mnemonic</button>
      {mnemonic && <>
        <div>{mnemonic}</div>
        <button onClick={() => navigator.clipboard.writeText(mnemonic)}>Copy</button>
      </>}
    </Fragment>
  )
}

export default GenerateAccount
