'use client'

import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import CategoryCourse from './(NewTemplate)/CategoryCourse'
import CategorySubject from './(NewTemplate)/CategorySubject'
import LandingPage from './(NewTemplate)/LandingPage'
import { ModalPromotion } from './(NewTemplate)/ModalPromotion'
import Tutor from './(NewTemplate)/Tutor'
import Blogs from './Blogs'
import Courses from './Course'
import Ebooks from './Ebooks'
import ExampleTeach from './ExampleTeach'
import FollowUs from './FollowUs'
import LandingBanner from './LandingBanner'
import SlideOverview from './SlideOverview'
import LineFix from './(NewTemplate)/LineFix'

function Home({ webInfo }: any) {
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState('Login')
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('light')
  }, [])

  return (
    <div>
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={0}
        setRoute={setRoute}
        route={route}
      />
      <LandingBanner />
    
      {/* <LandingPage /> */}
      <CategorySubject />
      <Tutor />
      <CategoryCourse />

      {/* <TeacherExperience />
            <PeopleReview />
            <CourseReview />
            <Slide />
            <BtnLinkCourse />  */}

      {/*<PeopleReview />*/}

      <Courses />
      <Ebooks />


      <ExampleTeach />
      <Blogs />

      <FollowUs />
      <LineFix />
      {/* <WhyLearnCourse /> */}
      {/* <FAQ /> */}
      {/* <TrustBy /> */}

      <Footer />
    </div>
  )
}

const Slide = () => (
  <div data-aos="fade-up" className="w-full flex justify-center teacherExper">
    <div className="max-w-[400px] md:max-w-[600px] px-5">
      <div className="max-w-[90%] m-auto BtnLinkCourse">
        <SlideOverview />
      </div>
    </div>
  </div>
)
export default Home
