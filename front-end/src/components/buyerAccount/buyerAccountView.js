import React, { useState } from 'react'

const BuyerAccountView = () => {
  const [count, setCount] = useState(4)

  const decrementCount = () => {
    setCount(() => {
      return count - 1
    })
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button>+</button>
    </>
  )
}

export default BuyerAccountView
