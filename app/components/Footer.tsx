import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLine } from "react-icons/fa6";

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-primary'>
      <div className="border border-[#ffffff0e] dark:border-[#ffffff1e]" />
      <br />
      <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-3">

          <div className='flex'>
            <div>
              <h3 className="text-[20px] font-[600] text-secondary dark:text-white pb-3">Contact Info</h3>
              <div>
                <p className=" text-base text-gray-300 dark:text-gray-300 dark:hover:text-white pb-2">
                  กวดวิชาออนไลน์คณิตครูอ๋อ
                </p>
              </div>
              <div>
                <p className="text-base text-gray-300 dark:text-gray-300 dark:hover:text-white pb-2">
                  Email : extramaths@hotmail.com
                </p>
                <p className=" text-base text-gray-300 dark:text-gray-300 dark:hover:text-white pb-2">
                  Line : <span> </span>
                  <Link href={"https://line.me/R/ti/p/@361nxolu?from=page&searchId=361nxolu"}>
                    @extramaths
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-secondary dark:text-white">ปรึกษาคอร์สเรียน</h3>
            <ul className="space-y-4">

              <li>
                <Link
                  href="https://line.me/R/ti/p/@361nxolu?from=page&searchId=361nxolu"
                  className="text-base text-green-500 dark:text-gray-300 dark:hover:text-white"
                >
                  <FaLine size={35} />
                </Link>
              </li>

            </ul>
          </div>
          <div>
            <div className='bg-white max-w-[160px] p-2'>
              <Image
                src={'/line.png'}
                height={200}
                width={200}
                alt=''
              />
            </div>
          </div>
        </div>
        <br />
        <p className="text-center text-white dark:text-white">
          Copyright © 2023 ELearning | All Rights Reserved
        </p>
      </div>
      <br />
    </footer>
  )
}

export default Footer