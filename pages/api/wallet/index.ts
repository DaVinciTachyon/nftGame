import type { NextApiRequest, NextApiResponse } from 'next'
import * as Bip39 from "bip39"
import { Keypair } from "@solana/web3.js"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const wallet = createWallet();
    res.status(201).json({ message: "New wallet created", wallet });
  } else
    res.status(404).json({ error: "Not Found" });
}

function createWallet() {
  const mnemonic = Bip39.generateMnemonic();
  const seed = Bip39.mnemonicToSeedSync(mnemonic).slice(0, 32);
  const account = Keypair.fromSeed(seed);
  return {
    mnemonic,
    publicKey: account.publicKey.toString(),
    secretKey: account.secretKey.toString()
  };
}