import { useGetUsersAllCoursesQuery } from '@/redux/features/courses/coursesApi'

import React, { useEffect, useState } from 'react'

import Slider from 'react-slick'

import CourseCard from '../Course/CourseCard'

type Props = {}

const settingPeopleSay = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  // className: 'notes-slider',

  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 897,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
}

const PrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className}  rounded  `}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E42D26',
        width: '40px',
        height: '40px',
        zIndex:"99"
      }}
      onClick={onClick}
    />
  )
}

const NextArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className}  rounded  `}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E42D26',
        width: '40px',
        height: '40px',
        zIndex:"99"
      }}
      onClick={onClick}
    />
  )
}

const Courses = (props: Props) => {
  const { data, isLoading } = useGetUsersAllCoursesQuery({})
  const [courses, setCourses] = useState<any[]>([])

  useEffect(() => {
    setCourses(data?.courses)
  }, [data])

  return (
    <div className="pb-10">
      <div className={`container mx-auto pt-10 color-white`}>
        {/* <Image src={'/heropro.jpg'} height={100} width={500} alt="" className="object-scale-down rounded-2xl md:w-full flex justify-center lg:w-[10] " />  */}
        <br />
        <br />

        <h1 className="text-center text-black text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px]  font-[700] tracking-tight">
          คอร์สเรียนแนะนำ
        </h1>
        <br />
        <br />
        <div className="mx-10">
          <Slider
            {...settingPeopleSay}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
          >
            {courses?.map((item: any, index: number) => (
              <CourseCard item={item} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Courses
