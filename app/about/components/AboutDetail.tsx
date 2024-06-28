import React from 'react'

import Bullet from './Bullet'

const ABOUT_HEADER = 'ครูพีค'

const EDUCATION: { text: string; secondText?: string }[] = [
  {
    text: 'ศิลปศาสตรบัณฑิต การแปลภาษาฝรั่งเศส-ไทยมหาวิทยาลัยธรรมศาสตร์',
  },
  {
    text: 'อักษรศาสตร์บัณฑิต ภาษาฝรั่งเศส มหาวิทยาลัยศิลปากร',
  },
  {
    text: 'ประกาศนียบัตร การสอนภาษาฝรั่งเศสในฐานะภาษาต่างประเทศมหาวิทยาลัยมงต์เปอลิเย II ประเทศฝรั่งเศส',
  },
  {
    text: 'ประกาศนียบัตรทางภาษาฝรั่งเศส DELF B2กระทรวงศึกษาธิการแห่งชาติฝรั่งเศส',
  },
]

const EDUCATION2: { text: string; secondText?: string }[] = [
  {
    text: 'วุฒิบัตร การสอนภาษาฝรั่งเศสในฐานะภาษาต่างประเทศในโลกปัจจุบัน สถาบันกาวิลัม ประเทศฝรั่งเศส',
  },
  {
    text: 'วุฒิบัตร หลักสูตรฝึกอบรมการสอนภาษาฝรั่งเศส (235 ชั่วโมง) สมาคมฝรั่งเศส กรุงเทพฯ',
  },
]

const AboutDetail = () => {
  const renderExperience = EDUCATION.map((item, index) => (
    <>
      <li key={`experience-${index}`} className="mt-2">
        <p>
          <Bullet />
          <span className="text-[16px] md:text-[18px] font-medium">
            {item.text}
          </span>
        </p>

        {item?.secondText && (
          <p className="pl-5 text-[14px] md:text-[18px]">{item.secondText}</p>
        )}
      </li>
    </>
  ))
  const renderExperience2 = EDUCATION2.map((item, index) => (
    <>
      <li key={`experience-${index}`} className="mt-2">
        <p>
          <Bullet />
          <span className="text-[16px] md:text-[18px] font-medium">
            {item.text}
          </span>
        </p>

        {item?.secondText && (
          <p className="pl-5 text-[14px] md:text-[18px]">{item.secondText}</p>
        )}
      </li>
    </>
  ))

  return (
    <div className="pt-4 sm:max-lg:shadow-xl bg-primary text-white shadow-sm rounded-xl">
      <div className="flex flex-col md:w-[500px] px-5">
        <div className="text-[18px] md:text-[22px] font-bold mt-0 md:mt-0 md:top-[-30px] px-10 py-2 bg-secondary rounded-full drop-shadow-md">
          <h1 className="text-center text-white">{ABOUT_HEADER}</h1>
        </div>
        <div className="marker pt-0 md:pt-5 px-[20px] py-5">
          <ul className="list-inside mt-3">
            <p className="my-4 text-xl">การศึกษา</p>
            {renderExperience}
            <p className="my-4 text-xl">วุฒิบัตร</p>
            {renderExperience2}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutDetail
