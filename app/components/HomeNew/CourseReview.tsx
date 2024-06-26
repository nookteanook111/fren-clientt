import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';

const courseReview = [
    { url: '/course-review/IMG_1552.JPG' },
    { url: '/course-review/IMG_1553.JPG' },
    { url: '/course-review/IMG_1554.JPG' },
    { url: '/course-review/IMG_1555.JPG' },
    { url: '/course-review/IMG_1556.JPG' },
    { url: '/course-review/IMG_1557.JPG' },
    { url: '/course-review/IMG_1558.JPG' },
    { url: '/course-review/IMG_1559.JPG' },
    { url: '/course-review/IMG_1560.JPG' },
    { url: '/course-review/IMG_1561.JPG' },
    { url: '/course-review/IMG_1562.JPG' },
    { url: '/course-review/IMG_1563.JPG' },
    { url: '/course-review/IMG_1564.JPG' },
    { url: '/course-review/IMG_1565.JPG' },
    { url: '/course-review/IMG_1566.JPG' },
    { url: '/course-review/IMG_1567.JPG' },
    { url: '/course-review/IMG_1568.JPG' },
    { url: '/course-review/รีวิวคอร์สเรียน - 10.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 11.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 12.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 13.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 14.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 15.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 16.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 17.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 2.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 3.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 5.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 6.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 7.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 8.jpg' },
    { url: '/course-review/รีวิวคอร์สเรียน - 9.jpg' },
]

const settingPeopleSay = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    // className: 'notes-slider',
    autoplay: true,
    autoplaySpeed: 2000,
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
    ]
}


const CourseReview = () => {
  return (
    <div className="w-full p-10 pb-20 font-Poppins">
    <div className="w-full ">
        <h1 data-aos="fade-down" className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] text-black  font-[700] tracking-tight">
            รีวิวจากน้องๆ ทั่วประเทศ
        </h1>
        {/* <p className="text-[#ffffff] text-center font-bold text-[30px] mt-10" data-aos="fade-down" >ความสำเร็จลูกศิษย์พี่เต้ย (อ.เชษฐา)</p> */}
        {/* <p className="text-[#ffffff] text-center text-sm mb-16" data-aos="fade-down" >จากนักเรียนของเรา</p> */}
    </div>
    <div className="w-full flex gap-3 justify-center pt-[50px]" data-aos="fade-down" >
        <div className="max-w-[90%] m-auto">
            <Slider {...settingPeopleSay}>
                {
                    courseReview.map(({ url }) => <>
                        <Image
                            key={url}
                            alt='review-image'
                            src={url}
                            width={300}
                            height={300}
                            className='rounded-xl'
                        />
                    </>)
                }
            </Slider>
        </div>
    </div>
</div>
  )
}

export default CourseReview