import { useState } from 'react'

import { BsArrowLeftShort, BsChevronDown, BsCalendar2DateFill, BsFileBarGraphFill, } from 'react-icons/bs'
import { AiFillEnvironment, AiFillHome } from 'react-icons/ai'
import { RiDashboardFill, RiTeamFill } from 'react-icons/ri'
import { FaMoneyCheckAlt, FaWarehouse } from 'react-icons/fa'
import { TbReport } from 'react-icons/tb'

import { Link } from 'react-router-dom'

const SideNavbar = () => {
  const [open, setOpen] = useState(true)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const [currentSubmenu, setCurrentSubmenu] = useState('')

  const Menus = [
    { title: 'HOME', icon: <AiFillHome />, src: '' },

    {
      title: 'EMPLOYEE',
      icon: <RiTeamFill />,
      submenu: true,
      spacing: true,
      submenuItems: [
        { title: 'Add New Employee', src: 'addEmployee' },
        { title: 'View All employees', src: 'viewAllEmployees' },
      ],
    },
    {
      title: 'Attendance',
      icon: <BsFileBarGraphFill />,
      submenu: true,
      submenuItems: [{ title: 'Leave requests', src: 'addEmployee' }],
    },
    { 
      title: 'Salary',
      icon: <FaMoneyCheckAlt />,
      src: 'viewAllSalary', 
    },

    {
      title: 'WAREHOUSE',
      icon: <FaWarehouse />,
      submenu: true,
      spacing: true,
      submenuItems: [
        { title: 'Add New Warehouse', src: 'addWarehouse' },
        { title: 'View All Warehouses', src: 'viewAllWarehouses' },
      ],
    },

    {
      title: 'Calendar',
      icon: <BsCalendar2DateFill />,
      spacing: true,
      src: 'calendar',
    },
    { 
      title: 'Report', 
      icon: <TbReport />,
      src: 'report',
    },
  ]

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 
        ${open ? 'w-72' : 'w-20'} duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl 
                rounded-full absolute -right-3 top-9 border 
                border-dark-purple cursor-pointer ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl 
                    rounded cursor-pointer block float-left mr-2 duration-500 
                    ${open && 'rotate-[360deg]'}`}
          />
          <h1
            className={`text-white origin-left
                    font-medium text-2xl duration-300 
                    ${!open && 'scale-0'}`}
          >
            HR Department
          </h1>
        </div>

        {/* <div className={`flex items-center rounded-md
            bg-light-white mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
                <BsSearch className={`text-white text-lg block 
                float-left cursor-pointer ${open && "mr-2"}`} />

                <input type={"search"} palaceholder="Search"
                className={`text-base bg-transparent w-full text-white
                focus:outline-none 
                ${!open && "hidden"}`} />
            </div> */}
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              {
                //Check if message failed
                !menu.submenu ? (
                  <Link to={menu.src}>
                    <li
                      key={index}
                      className={`text-gray-300 text-sm flex 
                            items-center gap-x-4 cursor-pointor p-2
                            hover:bg-light-white rounded-md 
                            ${menu.spacing ? 'mt-9' : 'mt-2'}`}
                    >
                      <span className="text-2xl block float-left">
                        {menu.icon ? menu.icon : <RiDashboardFill />}
                      </span>
                      <span
                        className={`text-base font-medium flex-1 duration-200
                                ${!open && 'hidden'}`}
                      >
                        {menu.title}
                      </span>
                      {menu.submenu && open && (
                        <BsChevronDown
                          className={`${
                            submenuOpen &&
                            currentSubmenu === menu.title &&
                            'rotate-180'
                          }`}
                          onClick={() => {
                            setCurrentSubmenu(menu.title)
                            setSubmenuOpen(!submenuOpen)
                          }}
                        />
                      )}
                    </li>
                  </Link>
                ) : (
                  <li
                    key={index}
                    className={`text-gray-300 text-sm flex 
                            items-center gap-x-4 cursor-pointor p-2
                            hover:bg-light-white rounded-md 
                            ${menu.spacing ? 'mt-9' : 'mt-2'}`}
                  >
                    <span className="text-2xl block float-left">
                      {menu.icon ? menu.icon : <RiDashboardFill />}
                    </span>
                    <span
                      className={`text-base font-medium flex-1 duration-200
                                ${!open && 'hidden'}`}
                    >
                      {menu.title}
                    </span>
                    {menu.submenu && open && (
                      <BsChevronDown
                        className={`${
                          submenuOpen &&
                          currentSubmenu === menu.title &&
                          'rotate-180'
                        }`}
                        onClick={() => {
                          setCurrentSubmenu(menu.title)
                          setSubmenuOpen(!submenuOpen)
                        }}
                      />
                    )}
                  </li>
                )
              }

              {menu.submenu &&
                submenuOpen &&
                currentSubmenu === menu.title &&
                open && (
                  <ul>
                    {menu.submenuItems.map((submenuItems, index) => (
                      <li
                        key={index}
                        className="text-gray-300 text-sm flex 
                                    items-center gap-x-4 cursor-pointor p-2 px-5 //px-5 eken padding wenawa subitems
                                    hover:bg-light-white rounded-md"
                      >
                        {/* <a href={submenuItems.src}>
                                        {submenuItems.title}
                                        </a>
                                    </li> */}

                        <Link to={submenuItems.src}>{submenuItems.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideNavbar
