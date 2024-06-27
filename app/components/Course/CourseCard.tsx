import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Badge } from "flowbite-react";
import Slider from "react-slick";
import dayjs from "dayjs";


type Props = {
  item: any;
  isProfile?: boolean;
  expireIn?: number | null

};

const CourseCard: FC<Props> = ({ item, isProfile, expireIn = null }) => {
  const isExpire = expireIn !== null && expireIn <= 0

  let expireDateText = ''
  if (expireIn !== null) {
    expireDateText = dayjs(dayjs().add(+expireIn, 'day').toDate()).format('DD/MM/YYYY')
  }
  return (
    <div>
      {/* <div className="w-full h-[120px] md:min-h-[35vh]  box-shadow-grow  dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur  rounded-lg md:p-3 p-1"> */}

      <div className="w-full max-w-[300px] md:h-[initial] md:min-h-[35vh] bg-white flex flex-col md:block   dark:bg-slate-500 dark:bg-opacity-20 hover:scale-95 duration-300 rounded-lg md:p-3 p-1">
        <Image
          src={item.thumbnail.url}
          width={500}
          height={500}
          objectFit="contain"
          className="rounded "
          alt=""
        />
        <br />
        {/* for PC */}
        <div className="hidden md:block">
          <div>
            <h1 className="text-[16px] font-semibold md:text-[20px] text-[#555555] dark:text-[#fff]">
              {item.name}
            </h1>
          </div>
          <div className="mb-4">
            <p className=" text-[18px] md:text-[14px] text-[#777] dark:text-[#fff]">
              {item.description}
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <Ratings rating={item.ratings} />
            <h5
              className={`text-black dark:text-[#fff] text-[18px] md:text-[12px] ${isProfile && "hidden 800px:inline"
                }`}
            >
              {item.purchased} Students
            </h5>
          </div>
          <div className="w-full flex flex-col-reverse md:flex-row  items-center justify-between pt-1 md:pt-3">
            <div className="flex">
              <Badge color="warning" size={50}>
                <h3 className="text-[#dc3545] dark:text-[#fff]">
                  {item.price === 0 ? "Free" : item.price + "฿"}
                </h3>
              </Badge>

              <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-[#777] dark:text-[#fff]">
                {item.estimatedPrice}฿
              </h5>
            </div>
            <div className="flex items-center pb-3">
              <h5 className=" text-black dark:text-[#777] text-[10px] md:text-[12px]">
                {item.courseData?.length} Lectures
              </h5>
            </div>
          </div>
          {
            expireIn !== null ? <div className="flex items-center pb-3">
              <h5 className="text-[12px] text-black dark:text-[#fff] mt-2">
                {
                  expireIn > 0 ? <span> หมดอายุในอีก {expireIn} วัน <span className="text-gray-500">{expireDateText}</span></span> : <span className="text-[red]"> หมดอายุแล้ว</span>
                }
              </h5>
            </div>
              : ''
          }
          <div >
            <Link href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`} className="mt-4 flex">
              <button className="w-full bg-secondary py-2 sm:py-2 lg:py-4 rounded-xl text-white cursor-pointer hover:bg-primary duration-100 text-[12px] sm:text-[12px] lg:text-[16px]">เลือกซื้อคอร์สเรียน</button>
            </Link>
          </div>
        </div>
        {/* for Mobile */}
        <div className="block md:hidden p-3 w-full relative ">
          <h1 className=" text-[14px] font-semibold md:text-[16px] text-[#555555] dark:text-[#fff]">
            {item.name}
          </h1>
          <div >
            <p className=" text-[12px] md:text-[14px] text-[#777] dark:text-[#fff]">
              {item.description}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="w-full flex flex-col md:flex-row text-[#777]">
              <Ratings rating={item.ratings} />
              <h5
                className={`text-[#777] text-[10px] md:text-[12px] ${isProfile && "hidden 800px:inline"
                  }`}
              >
                {item.courseData?.length} Lectures | {item.purchased} Students
              </h5>
            </div>
            <div>
              <h5 className="pl-3 text-[10px] mt-[10px] line-through opacity-80 text-[#777] dark:text-[#fff] right-1 bottom-0">
                {item.estimatedPrice}฿
              </h5>
              <h3 className="text-[#dc3545] dark:text-[#fff] bottom-0">
                {item.price === 0 ? "Free" : item.price + "฿"}
              </h3>
            </div>
          </div>
          {
            expireIn !== null ? <div className="flex items-center pb-3">
              <h5 className="text-[12px] text-black dark:text-[#fff] mt-2">
                {
                  expireIn > 0 ? <span> หมดอายุในอีก {expireIn} วัน <span className="text-gray-500">{expireDateText}</span></span> : <span className="text-[red]"> หมดอายุแล้ว</span>
                }
              </h5>
            </div>
              : ''
          }
          <div >
            <Link
              href={(!isProfile || isExpire) ? `/course/${item._id}` : `course-access/${item._id}`}
              className="mt-4 flex">
              <button className="w-full bg-secondary py-2 sm:py-2 lg:py-4 rounded-xl text-white cursor-pointer hover:bg-primary duration-100 text-[12px] sm:text-[12px] lg:text-[16px]">เลือกซื้อคอร์สเรียน</button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseCard;
