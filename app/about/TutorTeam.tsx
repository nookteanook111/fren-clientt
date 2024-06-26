import React from 'react'
import CarouselTutor from '../components/HomeNew/(NewTemplate)/CarouselTutor'
import { FaGraduationCap } from "react-icons/fa6";

const TutorTeam = () => {
  return (
    // <div className='container mx-auto'>
    //   <p className='text-center'>ทีมวิชาการ</p>
    // </div>
    <div className="text-center text-[24px] md:text-[30px] font-semibold">
      <div className='flex justify-center'>
        <p className='bg-secondary flex items-center gap-2 py-2 px-4 rounded-full text-white'>
          <span className='bg-sky-600 rounded-full p-2'>
            <FaGraduationCap />
          </span>
          ทีมวิชาการ
        </p>
      </div>
      <CarouselTutor />
    </div>
  )
}

export default TutorTeam