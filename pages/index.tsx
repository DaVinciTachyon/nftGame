import { PublicKey } from '@solana/web3.js'
import { Fragment, useState } from 'react'
import AccessAccount from '../components/AccessAccount'
import Airdrop from '../components/Airdrop'
import Card from '../components/Card'
import GenerateAccount from '../components/GenerateAccount'
import PersonCard from '../components/PersonCard'
import Shop from '../components/Shop'

interface User {
  mnemonic: string
  balance: number
  publicKey: PublicKey
  secretKey: string
}

function Home() {
  const [user, setUser] = useState<User>()
  const onCreate = async (publicKey: PublicKey, secretKey: string, mnemonic: string) => {
    const response = await fetch(`/api/wallet/${publicKey.toString()}`, {
      method: 'GET'
    })
    const data = await response.json()
    const account = data?.account
    setUser({
      mnemonic,
      balance: account.balance,
      publicKey,
      secretKey
    })
  }

  const onAccess = (user: User) => setUser(user)
  
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        justifyItems: 'center',
        gap: '3rem'
      }}
    >
      <div style={{ display:'grid', gap: '1rem' }}>
        <Card>
          <GenerateAccount onGenerate={onCreate} />
        </Card>
        <Card>
          <AccessAccount onAccess={onAccess} />
        </Card>
        {
          user && 
          <Fragment>
            <Card>
              <Airdrop
                publicKey={user.publicKey}
                onDrop={(balance: number) => setUser({ ...user, balance })}
              />
            </Card>
            <PersonCard
              publicKey={user.publicKey}
              gold={user.balance}
              items={[
                {
                  id: '1',
                  name: "Bow",
                  quantity: 1
                },
                {
                  id: '2',
                  name: "Arrow",
                  quantity: 10
                }
              ]}
            />
          </Fragment>
        }
      </div>
      <div>
        <Card>
          <Shop
            items={[
              {
                id: '1',
                name: "Bow",
                cost: 100
              },
              {
                id: '2',
                name: "Arrow",
                cost: 1
              }
            ]}
          />
        </Card>
      </div>
    </div>
  )
}

export default Home
