'use client'

import React from 'react'

import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const mockBanner = [
  {
    url: '/banner/2-new.jpeg',
  },
  {
    url: '/banner/1-new.jpeg',
  },
]
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
function LandingBanner() {
  return (
    <div>
      <Carousel infinite responsive={responsive} autoPlaySpeed={5000} autoPlay>
        {mockBanner.map((item, index) => (
          <Image
            src={item.url}
            alt=""
            width={1500}
            height={400}
            className="w-full"
          />
        ))}
      </Carousel>
    </div>
  )
}

export default LandingBanner
