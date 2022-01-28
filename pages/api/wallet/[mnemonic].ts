import type { NextApiRequest, NextApiResponse } from 'next'
import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js"
import * as Bip39 from "bip39"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mnemonic = String(req.query['mnemonic']);
  if (req.method === 'POST') {
    const account = await getAccount(mnemonic);
    res.status(201).json({ message: `Retrieved`, account });
  } else
    res.status(404).json({ error: "Not Found" });
}

function logIn(mnemonic: string) {
    const seed = Bip39.mnemonicToSeedSync(mnemonic).slice(0, 32);
    return Keypair.fromSeed(seed);
}

async function getAccount(mnemonic: string) {
  const account = logIn(mnemonic)
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const balance = await connection.getBalance(account.publicKey);
  return {
    balance,
    publicKey: account.publicKey,
    secretKey: account.secretKey
  }
}
