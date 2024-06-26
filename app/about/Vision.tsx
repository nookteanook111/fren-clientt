import React from 'react'
import { FaEye } from "react-icons/fa6";

const Vision = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className="py-20">
                    {/* <div className='text-[20px] md:text-[24px] font-semibold '>
                        <span className='bg-primary py-2 px-4 rounded-3xl text-white'>
                            วิสัยทัศน์
                        </span>
                    </div> */}
                    <div className='flex justify-start -mb-4'>
                        <p className='bg-secondary flex items-center gap-2 py-2 px-4 rounded-full text-white'>
                            <span className='bg-sky-600 rounded-full p-2'>
                                <FaEye />
                            </span>
                            วิสัยทัศน์
                        </p>
                    </div>
                 
                </div>

            </div>

        </div>
    )
}

export default Vision