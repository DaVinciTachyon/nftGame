import type { NextApiRequest, NextApiResponse } from 'next'
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const publicKey = new PublicKey(String(req.query['publicKey']));
  if (req.method === 'GET') {
    const account = await getAccount(publicKey);
    res.status(201).json({ message: `Retrieved`, account });
  } else
    res.status(404).json({ error: "Not Found" });
}

async function getAccount(publicKey: PublicKey) {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const balance = await connection.getBalance(publicKey);
  return {
    balance
  }
}
