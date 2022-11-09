import { useState } from 'react'

import { HeaderButton } from '../common/buttons'

const Header = ({ children, ...props }) => {
  const [headerButtons, setheaderButtons] = useState(props.headerButtons)

  console.log(headerButtons)
  return (
    <div className="flex h-20 bg-teal-500">
    <img className='h-20 p-1 ml-5' src="/assets/logo/transparent.png" alt="logo" />
      <div className="absolute right-0 flex justify-between">
        {headerButtons && headerButtons.map((item) => <HeaderButton pathname={`${item.path}`}>{item.name}</HeaderButton>)}
        <HeaderButton pathname="/login">Login</HeaderButton>
      </div>
    </div>
  )
}

export default Header
