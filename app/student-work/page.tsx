"use client"
import React, { useState } from 'react'
import Heading from '../utils/Heading'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import PeopleReview from '../components/HomeNew/PeopleReview'

const imageList = [
  '/study-plan/ผลงานนักเรียน.jpeg',
  '/study-plan/phy1.jpeg',
  '/study-plan/phy2.jpeg',
]

const page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(2);
  const [route, setRoute] = useState("Login");

  return (
    <div className="">
      <Heading
        title="ผลงานนักเรียน"
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
      <div className=' flex justify-center flex-col items-center gap-5'>
        {
          imageList.map((image, index) => (
            <Image src={image} alt='' height={900} width={500} className='w-[100%] md:max-w-[700px] rounded-lg mb-5' key={`study-plan-${index}`} />
          ))
        }
      
      </div>
      <PeopleReview noBg/>
      <Footer />
    </div>
  )
}

export default page