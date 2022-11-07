import { HeaderButton } from '../common/buttons'

const Header = () => {
  return (
    <div className="flex h-20 bg-teal-500">
    <img className='h-20 p-1 ml-5' src="/assets/logo/transparent.png" alt="logo" />
      <div className="absolute right-0 flex justify-between">
        <HeaderButton pathname="/x">HR Dep</HeaderButton>
        <HeaderButton pathname="/products">Products</HeaderButton>
        <HeaderButton pathname="/home">Home</HeaderButton>
        <HeaderButton pathname="/about">About</HeaderButton>
        <HeaderButton pathname="/login">Login</HeaderButton>
      </div>
    </div>
  )
}

export default Header
