import { useState } from 'react'
const SideNavBar = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Products', src: 'User', url: '/myProfile/products', gap: true },
    { title: 'Cart ', src: 'shopping-cart', url: '/myProfile/cart' },
    { title: 'Orders History', src: 'Search' },
    { title: 'Courier services ', src: 'Folder', gap: true },
    { title: 'My Profile', src: 'Setting', url: '/myProfile' },
  ]

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-teal-500 h-full p-5  pt-8 relative duration-300`}
      >
        <img
          src="assets\control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-teal-500
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
                ${Menu.gap ? 'mt-9' : 'mt-2'} ${
                index === Menu.index && 'bg-light-white'
              } `}
            >
              {/* <img src={`assets/${Menu.src}.png`} width="20px" /> */}
              <a href={Menu.url}>
                <span
                  className={`${!open && 'hidden'} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7"></div>
    </div>
  )
}
export default SideNavBar
