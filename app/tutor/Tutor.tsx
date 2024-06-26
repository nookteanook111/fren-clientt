import Image from 'next/image'
import React from 'react'
import { Rating } from "flowbite-react";
import Link from 'next/link';

const Tutor = () => {
    return (
        <div>
            <div className='container mx-auto my-20'>
                <div className='flex flex-col items-center justify-center my-4'>
                    <p className='text-center text-[40px]'>ทีมอาจารย์เกียรตินิยม</p>
                    <Rating size={"lg"}>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                    </Rating>
                </div>

                <div className='grid gap-4 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3'>
                    <Link href={'/tutor/pleum'} className='hover:scale-95 duration-200'>
                        <Image className=' rounded-xl' src={"/tutor/ครูพี่ปลื้ม.jpg"} width={500} height={500} alt='' />
                        <div className='mt-4 text-center'>
                            <p className='text-[30px] bg-pink-400 py-4 mb-4 text-white rounded-full'> ภาษาอังกฤษพี่ปลื้ม</p>
                            <p className='text-[18px] text-black'>พี่ปลื้มผู้เชี่ยวชาญด้านภาษาจากคณะอักษรศาสตร์ มหาวิทยาลัยศิลปากร ที่สอนลูกศิษย์มานับพันเเละพาน้องๆ เข้าสู่มหาวิทยาลัยในฝัน โดยปํพื้นฐานเเละต่อยอดอย่างเเม่นยำ</p>
                        </div>
                    </Link>
                    <Link href={'/tutor/pleng'} className='hover:scale-95 duration-200'>
                        <Image className=' rounded-xl' src={"/tutor/ครูพี่เพลง.jpg"} width={500} height={500} alt='' />
                        <div className='mt-4 text-center'>
                            <p className='text-[30px] bg-sky-500 py-4 mb-4 text-white rounded-full'>คณิตศาสตร์ ครูเพลง จุฬา</p>
                            <p className='text-[18px] text-black'>ครูเพลง เน้นสอน concept เเล้วพาลุยข้อสอบพร้อมทริคเทคนิคการทำ ในสนามต่างๆ ตั้งเเต่เนื้อหาระดับเเยกเทอมจนสอบเข้ามหาวิทยาลัย สอนเเน่น รู้ลึก พร้อมเทคนิคมากมาย</p>
                        </div>
                    </Link>
                    <Link href={'/tutor/fluk'} className='hover:scale-95 duration-200'>
                        <Image className=' rounded-xl' src={"/tutor/ครูพี่ฟลุ๊ก.jpg"} width={500} height={500} alt='' />
                        <div className='mt-4 text-center'>
                            <p className='text-[30px] bg-green-500 py-4 mb-4 text-white rounded-full'> ฟิสิกส์ พี่ฟลุ๊ก </p>
                            <p className='text-[18px] text-black'>สอนตั้งเเต่พื้นฐานจากง่ายไปยากครอบคลุมทุดสนามที่น้องต้อวสอบ เน้นการอธิบายละเอียด เเละเเนวข้อสอบที่หลากหลาย พาน้องพิชิตข้อสอบทุกสนาม</p>
                        </div>
                    </Link>
                    <Link href={'/tutor/et'} className='hover:scale-95 duration-200'>
                        <Image className=' rounded-xl' src={"/tutor/ครูพี่อี๊ด.jpg"} width={500} height={500} alt='' />
                        <div className='mt-4 text-center'>
                            <p className='text-[30px] bg-red-700 py-4 mb-4 text-white rounded-full'> ครูพี่อี๊ด </p>
                            <p className='text-[18px] text-black'>อาจารย์รุ่นใหม่ไฟเเรงที่มากด้วยประสบการณ์ในการสอบวิชาเคมี พร้อมถ่ายทอดวิชานี้ให้กับน้องได้หลงรัก เเละเข้าใจได้อย่างง่าย พร้อมเทคนิคเเละเเนวข้อสอบสำคัญในการสอบเข้ามหาวิทยาลัย</p>
                        </div>
                    </Link>
                    <Link href={'/tutor/kam'} className='hover:scale-95 duration-200'>
                        <Image className=' rounded-xl' src={"/tutor/ครูพี่แก้ม.jpg"} width={500} height={500} alt='' />
                        <div className='mt-4 text-center'>
                            <p className='text-[30px] bg-yellow-400 py-4 mb-4 text-white rounded-full'> ครูพี่แก้ม </p>
                            <p className='text-[18px] text-black'>ผู้มีประสบการณ์ในการสอบเข้าคณะสายสุขภาพอย่างมาก เเละสอบติดคณะที่น้องหลายคนใฝ่ฝัน พร้อมเทคนิคการทำข้อสอบความถนัดที่ทำให้พิชิตสายสุขภาพ อย่างง่ายดาย</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Tutor