import React from 'react'

import { FaTrophy } from 'react-icons/fa6'

const Reward = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 p-8">
      <div className="flex justify-center">
        <div className="bg-secondary p-6 rounded-full">
          <FaTrophy className=" text-white" size={30} />
        </div>
      </div>
      <div className="text-center">
        <p className="text-xl">
          รางวัลชนะเลิศ การประกวดผู้นำเสนอแนวคิดสื่อการสอน (IFprofs)
          จัดโดยสถานเอกอัครราชทูต ฝรั่งเศสประจำประเทศไทย
          ร่วมกับสมาคมครูภาษาฝรั่งเศสแห่งประเทศไทยฯ (ATPF)
        </p>
      </div>
    </div>
  )
}

export default Reward
