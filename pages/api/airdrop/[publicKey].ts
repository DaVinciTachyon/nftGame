import type { NextApiRequest, NextApiResponse } from 'next'
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const publicKey = new PublicKey(String(req.query['publicKey']));
  if (req.method === 'POST') {
    const balance = await airdrop(publicKey);
    res.status(201).json({ message: "Airdropped", balance });
  } else
    res.status(404).json({ error: "Not Found" });
}

async function airdrop(publicKey: PublicKey) {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const confirmation = await connection.requestAirdrop(
    publicKey,
    LAMPORTS_PER_SOL
  );
  await connection.confirmTransaction(confirmation, "confirmed");
  const balance = await connection.getBalance(publicKey);
  return balance;
}