'use client'

import React, { useState } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Heading from '../utils/Heading'
import About from './About'
import Environment from './Environment'
import TutorTeam from './TutorTeam'
import Vision from './Vision'

type Props = {}

const Page = (_props: Props) => {
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState('Login')

  return (
    <div>
      <Heading
        title={'เกี่ยวกับเรา - Elearning'}
        description={'Elearning is a programming community.'}
        keywords={
          'programming community, coding skills, expert insights, collaboration, growth'
        }
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={5}
        setRoute={setRoute}
        route={route}
      />
      <About />
      
      {/* <Vision />
      <TutorTeam />
      <Environment /> */}
      <Footer />
    </div>
  )
}

export default Page
