import { CSSProperties } from "react";

interface Props {
  children: JSX.Element | JSX.Element[]
  style?: CSSProperties;
}

function Card(props: Props) {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '2rem',
        borderRadius: '8px',
        width: '30vw',
        ...props.style
      }}
    >
      {props.children}
    </div>
  )
}

export default Card
