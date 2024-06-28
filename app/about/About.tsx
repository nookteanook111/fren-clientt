import React from 'react'

import Image from 'next/image'

import AboutDetail from './components/AboutDetail'
import AboutHeader from './components/AboutHeader'
import Container from './components/Container'
import Exprerient from './components/Experience'
import Reward from './components/Reward'

const About = () => {
  return (
    <Container>
      <AboutHeader />
      <div className="flex justify-center">
        <div
          data-aos="fade-up"
          className="w-fit flex flex-col lg:flex-row items-start max-lg:items-center rounded-xl md:overflow-hidden"
        >
          <Image
            src="/host.JPG"
            alt="Teacher"
            width={500}
            height={500}
            className="w-[200px] md:w-[500px]"
          />
          <AboutDetail />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 divide-x-0 md:divide-x-2">
        <Exprerient />
        <Reward />
      </div>
    </Container>
  )
}

export default About
