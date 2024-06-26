"use client"
import React, { useState } from 'react'
import Heading from '../utils/Heading'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const imageList = [
  '/study-plan/รูปแบบการเรียน.jpeg',
  '/study-plan/โครงสร้างหลักสูตร.jpeg',
  '/study-plan/ครอสสอบเข้ามหาวิทยาลัย.jpeg',
  '/study-plan/คอร์สออนไลน์บนเว็บไซต์.jpeg',

]

const page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen">
      <Heading
        title="แผนการเรียน"
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
          imageList.map((image, index) => (
            <Image src={image} alt='' height={900} width={500} className='w-[100%] md:max-w-[700px] rounded-lg mb-5' key={`study-plan-${index}`} />
          ))
        }
      
      </div>
      <Footer />
    </div>
  )
}

export default page