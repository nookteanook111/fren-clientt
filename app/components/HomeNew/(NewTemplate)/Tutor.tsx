import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import CarouselTutor from './CarouselTutor';
import Link from 'next/link';

const Tutor = () => {
    return (
        <div>
            <div className='space-y-4 my-10'>
                <div className='text-center'>
                    <p className='text-[40px] text-primary'>เรียนคณิตง่ายๆ &nbsp;</p>
                    <p className='text-[40px] text-black'>สไตล์ครูอ๋อ!</p>
                    {/* <p className='text-[25px] text-black'>กับติวเตอร์คุณภาพมากมายของเรา</p> */}
                </div>
             
                {/* <div>
                    <CarouselTutor />
                </div> */}
            </div>
        </div>
    )
}

export default Tutor