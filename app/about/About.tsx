import React from 'react'

import Image from 'next/image'

import AboutDetail from './components/AboutDetail'
import AboutHeader from './components/AboutHeader'
import Container from './components/Container'

const About = () => {
  return (
    <Container>
      <AboutHeader />
      <div className="flex justify-center">
        <div
          data-aos="fade-up"
          className="w-fit flex flex-col lg:flex-row items-start max-lg:items-center md:shadow-xl rounded-xl md:overflow-hidden"
        >
          <Image
            src="/profile_host.jpg"
            alt="Teacher"
            width={500}
            height={500}
            className="w-[200px] md:w-[500px]"
          />
          <AboutDetail />
        </div>
      </div>
    </Container>
  )
}

export default About
