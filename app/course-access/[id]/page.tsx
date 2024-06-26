'use client'
import CourseContent from "@/app/components/Course/CourseContent";
import Loader from "@/app/components/Loader/Loader";
import Header from "@/app/components/Header";
import dayjs from "dayjs";

import SimpleBackdrop from "@/app/components/Loading/SimpleBackdrop";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  params: any;
}

const Page = ({ params }: Props) => {
  const id = params.id;
  const { isLoading, error, data, refetch } = useLoadUserQuery(undefined, {});
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState('Login')

  const router = useRouter();
  const [isloadingCheck, setIsLoadingCheck] = useState(false)

  const searchParams = useSearchParams();
  const paymentToken = searchParams?.get("ptoken");
  const addressInfo = searchParams?.get("addressInfo");

  useEffect(() => {
    if (paymentToken) {
      checkPaymentToken()
    }
  }, [])

  const checkPaymentToken = async () => {
    try {
      setIsLoadingCheck(true)
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/create-order-postback`, { paymentToken, addressInfo: JSON.parse(decodeURIComponent(addressInfo || '{}')) })
      window.location.href = `/course-access/${id}`
    } catch (err) {
      router.replace("/");
    }
    setIsLoadingCheck(false)
  }

  useEffect(() => {
    if (!paymentToken) {
      if (data) {
        const isPurchased = data.user.courses.find(
          (item: any) => item.courseId === id
        );
        if (!isPurchased) {
          router.replace("/");
        }
      }
    }
  }, [data, error]);

  const foundUserCourse = data?.user?.courses?.find(ele => ele.courseId === id)
  let diffDays = 0
  if(foundUserCourse){
    const expireDate = new Date(dayjs(foundUserCourse.expireDate).format('MM/DD/YYYY')).getTime()
    const currentDate = new Date(dayjs().format('MM/DD/YYYY')).getTime()
    const diffTime = expireDate - currentDate
    diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }


  return (
    <>
      {
        (isLoading) ? (
          <Loader />
        ) : (
          <>
            {
              isloadingCheck ? <Loader text="กำลังตรวจสอบ..." /> :           <div>
              {
                diffDays <= 0 ? <>
                  <Header activeItem={1} open={open} setOpen={setOpen} route={route} setRoute={setRoute} />
                  <div className="w-full text-center min-h-full text-black">
                    <span className="text-[24px]"> Course Expired</span>
                  </div>
  
                </>
                  :
                  <CourseContent id={id} user={data.user} />
              }
  
            </div>
  
            }
          </>

        )
      }
    </>
  )
}

export default Page