import CoursePlayer from '@/app/utils/CoursePlayer'

import React from 'react'

const YOUTUBE = [
  { url: 'https://www.youtube.com/watch?v=2NbtjavPIX8' },
  { url: 'https://www.youtube.com/watch?v=dJ9Qmunro3U' },
]

const ExampleTeach = () => {
  return (
    <div className="w-full p-10 pb-5 font-Poppins">
      <div className="w-full ">
        <h1
          data-aos="fade-down"
          className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] text-black  font-[700] tracking-tight"
        >
          ตัวอย่างการสอน
        </h1>
      </div>
      <div
        className="w-full flex gap-3 justify-center pt-[50px]"
        data-aos="fade-down"
      >
        <div className="w-full md:max-w-[80%] grid grid-cols-1 md:grid-cols-2 gap-5">
          {YOUTUBE.map(({ url }, index) => (
            <div
              key={`example-teach-${index}`}
              className="w-full md:min-w-[500px]"
            >
              <CoursePlayer videoUrl={url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExampleTeach
