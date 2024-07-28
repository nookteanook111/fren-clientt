import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaLine } from 'react-icons/fa6'
import Script from 'next/script'
type Props = {}

const Footer = (props: Props) => {
  return (
    
    <footer className="bg-primary">
                <Script
            id="dbd-init"
            src="https://www.trustmarkthai.com/callbackData/initialize.js?t=078f85bf-21-6-c2e216f99e168126151aad77a2f31fd598da30"
          />
      <div className="border border-[#ffffff0e] dark:border-[#ffffff1e]" />
      <br />
      <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-3">
          <div className="flex">
            <div>
              <h3 className="text-[20px] font-[600] text-secondary dark:text-white pb-3">
                Contact Info
              </h3>
              <div>
                <p className=" text-base text-gray-300 dark:text-gray-300 dark:hover:text-white pb-2">
                  
                </p>
              </div>
              <div>
                <Link href={'mailto:frenchpeakpeak@gmail.com'}>
                  <p className="text-base text-gray-300 dark:text-gray-300 dark:hover:text-white pb-2">
                    Email : frenchpeakpeak@gmail.com
                  </p>
                </Link>

                <p className=" text-base text-gray-300 dark:text-gray-300 dark:hover:text-white pb-2">
                  Line : <span> </span>
                  <Link href={'https://lin.ee/8e7KCcu'}>@frenchpeakpeak</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-secondary dark:text-white">
              ปรึกษาคอร์สเรียน
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-2">
                <Link
                  href="https://lin.ee/8e7KCcu"
                  target="__blank"
                  className="text-base text-green-500 dark:text-gray-300 dark:hover:text-white"
                >
                  <FaLine size={35} />
                </Link>
                <Link
                  href="https://www.facebook.com/FrenchPeakPeak"
                  target="__blank"
                  className="text-base text-sky-500 dark:text-gray-300 dark:hover:text-white"
                >
                  <FaFacebook size={35} />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-white max-w-[160px] p-2">
              <Image src={'/line.jpeg'} height={200} width={200} alt="" />
            </div>
          </div>
        </div>
        <br />
        <div className="flex justify-center">
          <div id="Certificate-banners"></div>
        </div>
        <p className="text-center text-white dark:text-white">
          Copyright © 2023 ELearning | All Rights Reserved
        </p>
      </div>
      <br />
    </footer>
  )
}

export default Footer
