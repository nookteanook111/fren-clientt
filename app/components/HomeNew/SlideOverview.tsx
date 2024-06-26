import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'


const settingPeopleSay = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // className: 'notes-slider',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
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

const reviewImage = [
    {
        url: '/livestudy/1.png'
    },
    {
        url: '/livestudy/2.png'
    },
    {
        url: '/livestudy/3.png'
    },
    {
        url: '/livestudy/4.png'
    },
    {
        url: '/livestudy/5.png'
    },
    {
        url: '/livestudy/6.png'
    },
    {
        url: '/livestudy/7.png'
    },
    {
        url: '/livestudy/8.png'
    },
    {
        url: '/livestudy/9.png'
    },
    {
        url: '/livestudy/10.png'
    },
    {
        url: '/livestudy/11.png'
    },
    {
        url: '/livestudy/12.png'
    },
]


const SlideOverview = () => {
    return (
        <Slider {...settingPeopleSay}>
            {
                reviewImage.map(({ url }) => <>
                    <Image
                        alt='review-image'
                        src={url}
                        width={800}
                        height={800}
                        className='rounded-xl w-[500px] sm:w-[500px] md:w-[250px] lg:w-[320px] xl:w-[500px]'
                    />
                </>)
            }
        </Slider>
    )
}

export default SlideOverview