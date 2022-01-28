import { Fragment, useState } from 'react'
import ShopItem from './ShopItem'

interface Props {
    items: {
        id: string
        name: string
        cost: number
    }[]
}

function Shop(props: Props) {
  return (
    <Fragment>
        <h2>Shop</h2>
        <div>
            {props.items.map((item) => <ShopItem
                key={item.id}
                name={item.name}
                cost={item.cost}
                onBuy={(quantity) => {
                    alert(`Buy ${quantity} of ${item.name}`)
                }}
            />)}
        </div>
    </Fragment>
          
  )
}

export default Shop
