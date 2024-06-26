import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { BiMath } from 'react-icons/bi'
import { FaCog } from 'react-icons/fa'
import { FaAtom } from 'react-icons/fa6'
import { FaFlask } from 'react-icons/fa6'
import { FaUserDoctor } from 'react-icons/fa6'
import { FaA } from 'react-icons/fa6'
import { FaT } from 'react-icons/fa6'
import { RiEnglishInput } from 'react-icons/ri'

const CategorySubject = () => {
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="mb-10">
          <p className="text-[20px] text-center font-medium">
            คอร์สเรียนคณิตศาสตร์ออนไลน์
          </p>
          <p className="text-[20px] text-center font-medium">
            เน้นสร้างพื้นฐานความเข้าใจ
          </p>
          <p className="text-[20px] text-center font-medium">จากง่ายไปยาก</p>
          <p className="text-[20px] text-center font-medium">Step By Step</p>
        </div>
        <Image
          src={'/banner/2.jpeg'}
          alt=""
          width={2000}
          height={2000}
          className="w-full"
        />
        <div className="flex flex-wrap gap-4 justify-center mt-10 mx-0 sm:mx-0 xl:mx-60">
          <Link href={'/courses?title=คอร์ส ม.ต้น'}>
            <button className="flex text-white hover:scale-95 duration-300 justify-center items-center gap-2 bg-primary px-4 py-2 rounded-3xl">
              <div className={`bg-pink-600 rounded-full p-2`}>
                <FaAtom size={20} />
              </div>
              คณิต ม.ต้น
            </button>
          </Link>
          <Link href={'/courses?title=คอร์ส ม.ปลาย'}>
            <button className="flex text-white hover:scale-95 duration-300 justify-center items-center gap-2 bg-primary px-4 py-2 rounded-3xl">
              <div className={`bg-secondary rounded-full p-2`}>
                <FaFlask size={20} />
              </div>
              คณิต ม.ปลาย
            </button>
          </Link>
          <Link href={'/courses?title=คอร์สเตรียมสอบ A-Level'}>
            <button className="flex text-white hover:scale-95 duration-300 justify-center items-center gap-2 bg-primary px-4 py-2 rounded-3xl">
              <div className={`bg-green-400 rounded-full p-2`}>
                <BiMath size={20} />
              </div>
              A-Level
            </button>
          </Link>
          <Link href={"/courses?title=คอร์สเตรียมสอบ NETSAT"}>
            <button className="flex text-white hover:scale-95 duration-300 justify-center items-center gap-2 bg-primary px-4 py-2 rounded-3xl">
              <div className={`bg-red-800 rounded-full p-2`}>
                <FaCog size={20} />
              </div>
              NETSAT
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategorySubject
