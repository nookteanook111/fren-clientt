import React from 'react'
import SlideOverview from "../components/HomeNew/SlideOverview";
import { FaSchool } from "react-icons/fa6";

const Environment = () => {
  return (
    <div className="text-center text-[24px] md:text-[30px] font-semibold py-20">
      <div className='flex justify-center mb-8'>
        <p className='bg-primary flex items-center gap-2 py-2 px-4 rounded-full text-white'>
          <span className='bg-yellow-400 rounded-full p-2'>
            <FaSchool />
          </span>
          บรรยากาศการสอน
        </p>
      </div>
      <Slide />
    </div>
  )
}

const Slide = () => <div data-aos="fade-up" className="w-full flex justify-center teacherExper">
  <div className="container mx-auto">
    <SlideOverview />
  </div>
</div>

export default Environment