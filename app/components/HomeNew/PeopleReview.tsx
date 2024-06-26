import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';

const reviewImage = [
    {
        url: '/student-review/student-review-1.jpeg'
    },
    {
        url: '/student-review/student-review-2.jpeg'
    },
    {
        url: '/student-review/student-review-3.jpeg'
    },
    {
        url: '/student-review/student-review-4.jpeg'
    },
    {
        url: '/student-review/student-review-5.jpeg'
    },
    {
        url: '/student-review/student-review-6.jpeg'
    },
    {
        url: '/student-review/student-review-7.jpeg'
    },
    {
        url: '/student-review/student-review-8.jpeg'
    },
    {
        url: '/student-review/student-review-9.jpeg'
    },
    {
        url: '/student-review/student-review-10.jpeg'
    },
    {
        url: '/student-review/student-review-11.jpeg'
    },
    {
        url: '/student-review/student-review-12.jpeg'
    },
    {
        url: '/student-review/student-review-13.jpeg'
    },
    {
        url: '/student-review/student-review-14.jpeg'
    },
    {
        url: '/student-review/student-review-15.jpeg'
    },
    {
        url: '/student-review/student-review-16.jpeg'
    },
    {
        url: '/student-review/student-review-17.jpeg'
    },
    {
        url: '/student-review/student-review-18.jpeg'
    },
    {
        url: '/student-review/student-review-19.jpeg'
    },
    {
        url: '/student-review/student-review-20.jpeg'
    },
    {
        url: '/student-review/student-review-21.jpeg'
    },
]


const settingPeopleSay = {
    dots: false,
    infinite: true,
    speed: 300,
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



const PeopleReview = ({ noBg = false }) => {
    return (
        <>
            <div className={`${noBg ? '' : 'bg-gradient-1'} w-full p-10 pb-20 font-Poppins`}>
                <div className="w-full ">
                    <h1 data-aos="fade-down" className={`text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl 800px:!leading-[60px]  ${noBg ? 'text-[#042d58]' : 'text-[#fff]'} font-[700] tracking-tight`}>
                        ความสำเร็จลูกศิษย์พี่เต้ย (อ.เชษฐา)
                    </h1>
                    {/* <p className="text-[#ffffff] text-center font-bold text-[30px] mt-10" data-aos="fade-down" >ความสำเร็จลูกศิษย์พี่เต้ย (อ.เชษฐา)</p> */}
                    {/* <p className="text-[#ffffff] text-center text-sm mb-16" data-aos="fade-down" >จากนักเรียนของเรา</p> */}
                </div>
                <div className="w-full flex gap-3 justify-center pt-[50px]" data-aos="fade-down" >
                    <div className="max-w-[90%] m-auto">
                        <Slider {...settingPeopleSay}>
                            {
                                reviewImage.map(({ url }) => <>
                                    <Image
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

        </>
    )
}

export default PeopleReview