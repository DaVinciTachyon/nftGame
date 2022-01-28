interface Props {
    name: string
    quantity: number
}

function PersonItem(props: Props) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
        <p>{props.name}</p>
        <p>{props.quantity}</p>
    </div>
  )
}

export default PersonItem
