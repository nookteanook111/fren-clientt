import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useRouter } from 'next/navigation'
import dayjs from "dayjs";
import "dayjs/locale/th";

type Props = {
  item: any;
  isProfile?: boolean;
};

const BlogCard: FC<Props> = ({ item, isProfile }) => {
  const router = useRouter()
  const linkUrl = `/blog/${item.slug}`
  dayjs.locale("th");

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(linkUrl)
  }

  return (
    <div onClick={handleClick} className="w-full hover:scale-105 duration-300 p-4 cursor-pointer bg-white dark:bg-slate-500 dark:bg-opacity-20 border dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg shadow-sm dark:shadow-inner">
      <div className="w-full dark:bg-slate-500 dark:bg-opacity-20  dark:border-[#ffffff1d]  dark:shadow-[bg-slate-700] rounded-lg  dark:shadow-inner">
        {!!item.thumbnail.url && (
          <Image
            src={item.thumbnail.url}
            width={500}
            height={300}
            objectFit="contain"
            className="rounded w-full"
            alt=""
          />
        )}
      </div>
      <br />
      <h1 className=" font-Poppins font-bold  text-[16px] md:text-[16px] text-[#032f59] dark:text-[#fff]">
        {item.title}
      </h1>
      <p className="text-gray-400 text-[12px] mb-2">{dayjs(item.createdAt).format("DD MMMM YYYY")} </p>
      <h2 className=" font-Poppins  text-[12px] md:text-[14px] text-[#777]">
        {
          add3Dots(item.description, 100)
        }
      </h2>
      <div className="flex justify-end py-2">
        <button className="bg-yellow-300 hover:bg-yellow-400 py-2 px-4 rounded-xl">อ่านเพิ่มเติม ...</button>
      </div>
    </div>
  );
};

function add3Dots(string: string, limit: number) {
  let dots = "...";
  if (string.length > limit) {
    string = string.substring(0, limit) + dots;
  }

  return string;
}


export default BlogCard;
