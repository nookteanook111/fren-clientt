import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";

const experience = [
    {
        text: 'คณิตศาสตร์สายตรง เน้นเข้าใจ เเละเทคนิคมองโจทย์ตัวทอป sec คะเเนนวิชา calculus ของคณะครุศาสตร์ จุฬาฯ',
        secondText: ''
    },
    {
        text: 'ป.ตรี คณะครุศาสตร์ สาขามัธยมศึกษา(วิทยาศาสตร์) เอกคณิตศาสตร์(เดี่ยว) เกียรตินิยมอันดับ1 จุฬาลงกรณ์มหาวิทยาลัย',
        secondText: ''
    },
    {
        text: 'ป.โท สาขาวิธีวิทยานวัตกรรมทางการศึกษา คณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
        secondText: ''
    },
    {
        text: 'ประสบการณ์การสอนมากกว่า 5 ปีพาน้องๆ เข้าสู่มหาวิทยาลัย',
        secondText: ''
    },
]

const Pleng = () => {
    return (
        <div style={{ backgroundImage: "url(/paper.png)" }}>
            <div className="w-full container mx-auto pt-[40px] flex justify-center flex-col text-[#052e58] pb-10">
                <div data-aos="fade-up" className="w-full flex justify-center flex-col lg:flex-row items-center teacherExper">
                    <div className="">
                        <Image
                            src="/tutor/ครูพี่เพลง.jpg"
                            alt="Teacher"
                            width={500}
                            height={500}
                            className="w-[200px] md:w-[500px]"
                        />
                    </div>
                    <div className="pt-0 md:pt-20">
                        <div className="md:w-[500px] bg-white shadow-lg relative px-5">
                            <div className=" text-[18px] md:text-[22px] font-bold mt-0 md:mt-0 md:absolute top-0 md:top-[-30px] px-10 py-2 bg-blue-500 text-white rounded-full drop-shadow-md">
                                <p className="text-center md:text-left"> คณิตศาสตร์พี่เพลง จุฬา </p>
                            </div>
                            <div className="marker pt-0 md:pt-5 px-[20px] py-5">
                                <ul className="list-inside mt-3">
                                    {
                                        experience.map((item, index) => (
                                            <li key={`experience-${index}`} className="mt-2">
                                                <span className=" text-[16px] md:text-[20px] font-medium">
                                                    <Bullet />{item.text}
                                                </span>

                                                {
                                                    item.secondText && <>
                                                        <br />
                                                        <span className="pl-2 text-[14px] md:text-[18px]" >
                                                            {item.secondText}
                                                        </span>
                                                    </>
                                                }

                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="flex justify-end gap-4 my-4">
                                    <Link href={'/tutor'}>
                                        <button className="bg-primary flex justify-center items-center gap-2 px-4 py-2 hover:scale-95 duration-200 rounded-xl text-white">
                                            <span><FaChalkboardTeacher /></span>
                                            สนใจเรียนกับพี่เพลง
                                        </button>
                                    </Link>
                                    <Link href={""}>
                                        <button className="bg-secondary flex justify-center items-center gap-2 px-4 py-2 hover:scale-95 duration-200 rounded-xl text-white">
                                            <span><FaSquareFacebook /></span>
                                            ติดตามพี่เพลงได้ที่
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Bullet = () => <span className="mr-1 text-2xl">
    •
</span>

export default Pleng;
