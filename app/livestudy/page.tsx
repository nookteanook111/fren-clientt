"use client"
import React, { useState } from 'react'
import Heading from '../utils/Heading'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import { FaLine } from "react-icons/fa6";
import Link from 'next/link'

const imageList1 = [
  '/livestudy/ม.ต้น-111.jpg',
  '/livestudy/ม.ต้น-2.jpg',
  '/livestudy/ม.ปลาย-1.jpg',
  '/livestudy/promotion.jpg',
]

const page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen">
      <Heading
        title="คอร์สเรียนสด"
        description="โครงสร้างหลักสูตร และรูปแบบการเรียน"
        keywords="แผนการเรียน โครงสร้างหลักสูตร รูปแบบการเรียน"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <div className=' flex justify-center flex-col items-center'>
        {
          imageList1.map((image, index) => (
            <Image src={image} alt='' height={900} width={500} className='w-[100%] md:max-w-[700px] rounded-lg mb-5' key={`livestudy-${index}`} />
          ))
        }
        <Link href="https://line.me/R/ti/p/@csw9917j" target='__blank'>
          <button className=" my-20 cursor-pointer text-[16px] md:text-[25px] px-5 bg-green-600 py-2 font-medium rounded-lg drop-shadow hover:drop-shadow-lg text-white hover:scale-125 flex justify-center items-center">
            <span>สมัครเรียนเเละสอบถามรายละเอียดคลิกที่ไลน์</span>
            <FaLine className="text-[40px] pl-2 text-[#ffffff]" />
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default page