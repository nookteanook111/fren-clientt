'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaBook } from "react-icons/fa6";

const LandingPage = () => {
    const [state, setState] = useState(0)
    console.log(state)
    return (
        <div className='bg-bgmain py-10'>
            <div className='container mx-auto'>
                <div>
                    <div className='p-8 space-y-8 text-white'>
                        <div className='text-black space-y-4'>
                            <p className='text-[50px] font-bold'>extramaths  <span className='text-[#427399]'>คณิตครูอ๋อ</span></p>
                            <p className='text-[15px]'>เรียนคณิตศาสตร์โดยเน้นสร้างพื้นฐานความเข้าใจจากง่ายไปยาก</p>
                        </div>
                        <div className='grid grid-cols-3 gap-3'>
                            <div className='flex justify-center items-center gap-4 px-10 cursor-pointer py-6 hover:scale-95 duration-300 rounded-xl bg-greentheme' onClick={() => setState(0)}>
                                <div className='bg-primary p-4 rounded-full'>
                                    <FaBook size={30} />
                                </div>
                                <div>
                                    <p className='text-[15px]'>ทำให้เห็นภาพรวมและ Concept สำคัญของแต่ละเรื่องที่เชื่อมโยงกัน</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-4 px-10 cursor-pointer py-6 hover:scale-95 duration-300 rounded-xl bg-red-800' onClick={() => setState(1)}>
                                <div className='bg-primary p-4 rounded-full'>
                                    <FaBook size={30} />
                                </div>
                                <div>
                                    <p className='text-[14px]'>เรียนรู้การคิด การแก้โจทย์คณิตศาสตร์ด้วยแนวคิดง่ายๆ ที่ใช้ได้จริง</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-4 px-10 cursor-pointer py-6 hover:scale-95 duration-300 rounded-xl bg-secondary' onClick={() => setState(2)}>
                                <div className='bg-primary p-4 rounded-full'>
                                    <FaBook size={30} />    
                                </div>
                                <div>
                                    <p className='text-[14px]'>สายนี้เป็นสายที่นอกเหนือจากสองสายเเรก คือ สายที่น้องๆทุกคนเลือกทางสายศิลป์ เช่น นิตศาสตร์ รัฐศาสตร์ นิเทศศาสตร์ สถาปัตยกรรมศาสตร์ อักษรศาสตร์ โดยเราจะวางเเผนสายนี้ว่าจะเตรียมอย่าไรให้สอบติด</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default LandingPage