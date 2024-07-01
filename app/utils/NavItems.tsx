import React, { useState } from 'react'

import { ListGroup } from 'flowbite-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { GoChevronDown } from 'react-icons/go'

export const navItemsData = [
  {
    name: 'หน้าแรก',
    url: '/',
  },
  {
    name: 'คอร์สออนไลน์',
    url: '/courses',
  },
  // {
  //   name: 'ห้องเรียนฟรี',
  //   url: '/courses?title=คอร์สเรียนฟรี',
  // },
  // {
  //   name: 'Ebook',
  //   url: '/ebook',
  // },
  //{
   // name: 'คลังข้อสอบ',
    //url: '/examination',
  //},
  {
    name: 'เกี่ยวกับเรา',
    url: '/about',
  },

  // {
  //   name: "Contact",
  //   url: "/"
  // },
]

const navItemDataMobile = navItemsData.filter(item =>
  ['หน้าแรก', 'คอร์สออนไลน์', 'Ebook'].includes(item.name),
)

type Props = {
  activeItem: number
  isMobile: boolean
}

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  const pathname = usePathname()
  return (
    <>
      <div className="hidden lg:flex">
        {navItemsData &&
          navItemsData.map((i, index) => (
            <Link href={`${i.url}`} key={index} passHref>
              <span
                className={`${
                  pathname === i.url
                    ? 'text-primary border-b-4 border-secondary pb-6 text-[16px] px-6 font-[400]'
                    : 'dark:text-white text-[#4A4A4A]'
                } text-[16px] hover:border-b-4 hover:border-secondary hover:pb-6 px-6 font-[400]`}
              >
                {i.name}
              </span>
            </Link>
          ))}
      </div>
      {isMobile && (
        <div className=" 1024px:hidden mt-5">
          {/* <div className="w-full text-center py-6">
            <Link href={'/'} passHref>
              <span
                className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
              >
                ELearning
              </span>
            </Link>
          </div> */}
          {navItemsData &&
            navItemsData.map((i, index) => (
              <Link href={`${i.url}`} passHref key={index}>
                <span
                  className={`${
                    pathname === i.url
                      ? 'text-[#AC0013] font-bold'
                      : 'dark:text-white text-[#4A4A4A]'
                  } block py-5 text-[16px] px-6 font-Poppins font-[400]`}
                >
                  {i.name}
                </span>
              </Link>
            ))}
        </div>
      )}
    </>
  )
}

export default NavItems
