import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'

const reviewImage = [
  {
    img: '/tutor/ครูพี่ปลื้ม.jpg',
    tutor: 'pleum',
  },
  {
    img: '/tutor/ครูพี่เพลง.jpg',
    tutor: 'pleng',
  },
  {
    img: '/tutor/ครูพี่ฟลุ๊ก.jpg',
    tutor: 'fluk',
  },
  {
    img: '/tutor/ครูพี่อี๊ด.jpg',
    tutor: 'et',
  },
  {
    img: '/tutor/ครูพี่แก้ม.jpg',
    tutor: 'kam',
  },
]

const settingPeopleSay = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  // className: 'notes-slider',

  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 897,
      settings: {
        slidesToShow: 2,
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
        backgroundColor: '#FFBE00',
        width: '40px',
        height: '40px',
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
        backgroundColor: '#FFBE00',
        width: '40px',
        height: '40px',
      }}
      onClick={onClick}
    />
  )
}

const CarouselTutor = () => {
  return (
    <>
      <div className={`w-full p-10`}>
        <div className="w-full flex gap-4 justify-center">
          <div className="container mx-auto">
            <Slider
              {...settingPeopleSay}
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
            >
              {reviewImage.map((item, index) => (
                <>
                  <Link href={`/tutor/${item.tutor}`}>
                    <Image
                      alt="review-image"
                      src={item.img}
                      width={400}
                      height={400}
                      className="rounded-xl w-[400px] sm:w-[400px] md:w-[300px] xl:w-[400px] hover:scale-95 duration-200"
                    />
                  </Link>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarouselTutor
