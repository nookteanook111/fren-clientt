import React from 'react'

import Bullet from './Bullet'

const ABOUT_HEADER = 'ครูอ๋อ (ศศิวัฒน์ สุริยะแก่นทราย)'

const EXPERIENCE: { text: string; secondText?: string }[] = [
  {
    text: 'ปริญญาตรี วิทยาศาสตรบัณฑิต',
    secondText: '(วท.บ. คณิตศาสตร์)',
  },
  {
    text: 'ปริญญาโท ครุศาสตรมหาบัณฑิต',
    secondText: '(ค.ม. การสอนคณิตศาสตร์)',
  },
  {
    text: 'ประสบการณ์สอนและติวเตอร์วิชาคณิตศาสตร์ ',
    secondText: 'ระดับ ม.ต้น-ม.ปลาย กว่า 15 ปี',
  },
]

const AboutDetail = () => {
  const renderExperience = EXPERIENCE.map((item, index) => (
    <li key={`experience-${index}`} className="mt-2">
      <p>
        <Bullet />
        <span className="text-[16px] md:text-[20px] font-medium">
          {item.text}
        </span>
      </p>

      {item?.secondText && (
        <p className="pl-5 text-[14px] md:text-[18px]">{item.secondText}</p>
      )}
    </li>
  ))

  return (
    <div className="pt-4 sm:max-lg:shadow-xl rounded-xl">
      <div className="flex flex-col md:w-[500px] px-5">
        <div className="text-[18px] md:text-[22px] font-bold mt-0 md:mt-0 md:top-[-30px] px-10 py-2 bg-secondary rounded-full drop-shadow-md">
          <h1 className="text-center text-white">
            {ABOUT_HEADER}
          </h1>
        </div>
        <div className="marker pt-0 md:pt-5 px-[20px] py-5">
          <ul className="list-inside mt-3">{renderExperience}</ul>
        </div>
      </div>
    </div>
  )
}

export default AboutDetail
