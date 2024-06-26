'use client'

import { useLoadUserQuery } from '@/redux/features/api/apiSlice'
import {
  useLogOutQuery,
  useSocialAuthMutation,
} from '@/redux/features/auth/authApi'

import React, { FC, useEffect, useState } from 'react'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { FaUser } from 'react-icons/fa6'
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from 'react-icons/hi'

import avatar from '../../public/assests/avatar.png'
import Login from '../components/Auth/Login'
import SignUp from '../components/Auth/SignUp'
import Verification from '../components/Auth/Verification'
import CustomModal from '../utils/CustomModal'
import NavItems from '../utils/NavItems'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  activeItem: number
  route: string
  setRoute: (route: string) => void
}

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
  const [active, setActive] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const { data: userData, isLoading, refetch } = useLoadUserQuery(undefined, {})
  const { data } = useSession()
  const [socialAuth, { isSuccess }] = useSocialAuthMutation()
  const [logout, setLogout] = useState(false)

  useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  })

  useEffect(() => {
    if (!isLoading) {
      if (!userData) {
        if (data) {
          if (!data?.user?.email) {
            alert('กรุณาเพิ่ม Email ใน Line ก่อนเข้าสู่ระบบ')
          } else {
            socialAuth({
              email: data?.user?.email,
              name: data?.user?.name,
              avatar: data.user?.image,
            })
          }
          setTimeout(() => {
            refetch()
          }, 2000)
        }
      }
      if (data === null) {
        if (isSuccess) {
          toast.success('Login Successfully')
        }
      }
      if (data === null && !isLoading && !userData) {
        setLogout(true)
      }
    }
  }, [data, userData, isLoading])

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 85) {
        setActive(true)
      } else {
        setActive(false)
      }
    })
  }

  const handleClose = (e: any) => {
    if (e.target.id === 'screen') {
      {
        setOpenSidebar(false)
      }
    }
  }

  return (
    <>
      <div className="w-full bg-white relative dark:bg-[#140342]">
        <div
          className={`${
            active
              ? 'dark:bg-opacity-50 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500'
              : 'w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow'
          }`}
        >
          <div className="w-[95%] 1024px:w-[92%] m-auto h-full">
            <div className="w-full h-[80px] flex items-center justify-between p-3 pl-0 md:pl-3">
              <div>
                <Link
                  href={'/'}
                  className={`text-[18px] md:text-[25px] flex items-center font-Poppins font-[500] text-black dark:text-white`}
                >
                  <Image src={'/logo.png'} width={60} height={60} alt="" />

                  {/* <span className="ml-[15px] text-[#2e2e2e]">
                          Expert8 Academy
                      </span> */}
                </Link>
              </div>

              <div className="flex items-center justify-between ">
                <NavItems activeItem={activeItem} isMobile={false} />
                {/* <ThemeSwitcher /> */}

                {/* only for mobile */}
                <div className="xl:hidden border border-gray-400 rounded p-1">
                  <HiOutlineMenuAlt3
                    size={30}
                    className="cursor-pointer dark:text-white text-gray-400"
                    onClick={() => setOpenSidebar(true)}
                  />
                </div>

                {userData ? (
                  <Link href={'/profile'}>
                    <Image
                      src={
                        userData?.user.avatar
                          ? userData.user.avatar.url
                          : avatar
                      }
                      alt=""
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px] rounded-full cursor-pointer"
                      style={{
                        border: activeItem === 5 ? '2px solid #37a39a' : 'none',
                        marginLeft: '15px',
                      }}
                    />
                  </Link>
                ) : (
                  <button
                    onClick={() => setOpen(true)}
                    className=" hidden sm:hidden shadow-md xl:flex ml-2 items-center gap-2 bg-primary p-2 rounded-xl ring-2 ring-sky-400"
                  >
                    <FaUser size={20} className="text-white" />
                    <p className="text-white">เข้าสู่ระบบเรียน</p>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* mobile sidebar */}
          {openSidebar && (
            <div
              className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
              onClick={handleClose}
              id="screen"
            >
              <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
                <NavItems activeItem={activeItem} isMobile={true} />
                {userData ? (
                  <Link href={'/profile'}>
                    <Image
                      src={
                        userData?.user.avatar
                          ? userData.user.avatar.url
                          : avatar
                      }
                      alt=""
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px] rounded-full ml-[20px] cursor-pointer"
                      style={{
                        border: activeItem === 5 ? '2px solid #37a39a' : 'none',
                      }}
                    />
                  </Link>
                ) : (
                  <HiOutlineUserCircle
                    size={25}
                    className="hidden xl:block cursor-pointer dark:text-white text-black"
                    onClick={() => setOpen(true)}
                  />
                )}
                <button
                  onClick={() => setOpen(true)}
                  className="flex ml-6 items-center gap-2 bg-primary p-2 rounded-xl ring-2 ring-orangetheme"
                >
                  <FaUser size={20} className="text-white" />
                  <p className="text-white">เข้าสู่ระบบเรียน</p>
                </button>
                <br />
                <br />
                <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
                  Copyright © 2023 LMS
                </p>
              </div>
            </div>
          )}
        </div>
        {route === 'Login' && (
          <>
            {open && (
              <CustomModal
                open={open}
                setOpen={setOpen}
                setRoute={setRoute}
                activeItem={activeItem}
                component={Login}
                refetch={refetch}
              />
            )}
          </>
        )}

        {route === 'Sign-Up' && (
          <>
            {open && (
              <CustomModal
                open={open}
                setOpen={setOpen}
                setRoute={setRoute}
                activeItem={activeItem}
                component={SignUp}
              />
            )}
          </>
        )}

        {route === 'Verification' && (
          <>
            {open && (
              <CustomModal
                open={open}
                setOpen={setOpen}
                setRoute={setRoute}
                activeItem={activeItem}
                component={Verification}
              />
            )}
          </>
        )}
      </div>
      {/* )
      } */}
    </>
  )
}

export default Header
