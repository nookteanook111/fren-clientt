import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const courseImage = [
  {
    src: '/course-review/1.jpeg',
    alt: 'course1',
    link: '/courses',
    query: 'คอร์ส ม.ต้น',
  },
  {
    src: '/course-review/2.jpeg',
    alt: 'course2',
    link: '/courses',
    query: 'คอร์ส ม.ปลาย',
  },
  {
    src: '/course-review/3.jpeg',
    alt: 'course3',
    link: '/courses',
    query: 'คอร์สเตรียมสอบ',
  },
]

const CategoryCourse = () => {
  return (
    <div>
      <div className="container mx-auto p-10 text-black">
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-[30px] text-primary">คอร์สเรียนตามความสนใจ</p>
            <p className="text-[16px] text-[#1B57BD]">
              เลือกคอร์สเรียนตามความสนใจของผู้เรียน
            </p>
            <p className="text-[15px] text-[#1B57BD]">
              แบบ{' '}
              <span className="text-[#5F030A] text-[18px] font-bold">
                "คอร์สแยกบท"
              </span>{' '}
              <br />
              และ{' '}
              <span className="text-[#5F030A] font-bold text-[18px]">
                "คอร์ส Package"
              </span>
            </p>
            <p className="text-[16px] text-[#1B57BD]">
              เนื้อหาอิงตามหลักสูตร สสวท. ใหม่ล่าสุด
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="px-4 py-2 ring-2 ring-primary rounded">
              อ่านเพิ่มเติม
            </button>
          </div>
        </div>
        <div className="max-w-[90%] sm:max-w-[90%] md:max-w-[90%] m-auto mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
            {courseImage.map((item, index) => (
              <Link
                key={`CategoryCourse-link-${index}`}
                href={`${item.link}?title=${item.query}`}
              >
                <Image
                  width={500}
                  height={500}
                  alt={item.alt}
                  className="w-full rounded-3xl hover:scale-105 duration-200"
                  src={item.src}
                />
              </Link>
            ))}
            {/* <Link href={'/courses'}>
                            <Image width={2000} height={2000} alt='' className='w-full rounded-3xl hover:scale-105 duration-200' src='/course-review/1.jpeg' />
                        </Link>
                        <Link href={'/courses'}>
                            <Image width={500} height={500} alt='' className='w-full rounded-3xl hover:scale-105 duration-200' src='/course-review/2.jpeg' />
                        </Link>
                        <Link href={'/courses'}>
                            <Image width={500} height={500} alt='' className='w-full rounded-3xl hover:scale-105 duration-200' src='/course-review/3.jpeg' />
                        </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCourse
