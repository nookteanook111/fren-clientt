import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";

const experience = [
    {
        text: 'ปริญญาตรี คณะอักษรศาสตร์ เอกภาษาอังกฤษ มหาวิทยาลัยศิลปากร เกียรตินิยมอันดับ 2',
        secondText: ''
    },
    {
        text: 'ประสบการณ์สอนม.ปลายมากกว่า 10 ปีพาน้องๆสอบเข้ามหาลัยนับพันคน',
        secondText: ''
    },
    {
        text: 'เจ้าของเพจ engaholic ที่ให้ความรู้ภาษาอังกฤษ ผู้ติดตามมากกว่า 50,000 คน',
        secondText: ''
    },
]

const Pleum = () => {
    return (
        <div style={{backgroundImage:"url(/paper.png)"}}>
            <div className="w-full container mx-auto pt-[40px] flex justify-center flex-col text-[#052e58] pb-10">
                <div data-aos="fade-up" className="w-full flex justify-center flex-col lg:flex-row items-center teacherExper">
                    <div className="">
                        <Image
                            src="/tutor/ครูพี่ปลื้ม.jpg"
                            alt="Teacher"
                            width={500}
                            height={500}
                            className="w-[200px] md:w-[500px]"
                        />
                    </div>
                    <div className="pt-0 md:pt-20">
                        <div className="md:w-[500px] bg-white shadow-lg relative px-5">
                            <div className=" text-[18px] md:text-[22px] font-bold mt-0 md:mt-0 md:absolute top-0 md:top-[-30px] px-10 py-2 bg-pink-500 text-white rounded-full drop-shadow-md">
                                <p className="text-center md:text-left"> ภาษาอังกฤษพี่ปลื้ม </p>
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
                                            สนใจเรียนกับพี่ปลื้ม
                                        </button>
                                    </Link>
                                    <Link href={"https://www.facebook.com/krupleumengaholic"}>
                                        <button className="bg-secondary flex justify-center items-center gap-2 px-4 py-2 hover:scale-95 duration-200 rounded-xl text-white">
                                            <span><FaSquareFacebook /></span>
                                            ติดตามพี่ปลื้มได้ที่
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

export default Pleum;
