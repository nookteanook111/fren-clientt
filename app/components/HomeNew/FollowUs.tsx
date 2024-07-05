


import React from 'react'

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok ,FaYoutube } from "react-icons/fa6";
import { FaLine } from "react-icons/fa";


const socialList = [
    {
        icon: FaTiktok,
        id: '@frenchpeakpeak',
        name: "tiktok",
        link: "https://www.tiktok.com/@frenchpeakpeak"
    },
    {
        icon: FaInstagram,
        id: '@frenchpeakpeak',
        name: "instagram",
        link: "https://www.instagram.com/frenchpeakpeak"
    },
    {
        icon: FaFacebookF,
        id: '@เรียนภาษาฝรั่งเศส ยังไงก็พีค French PeakPeak',
        name: "facebook",
        link: "https://www.facebook.com/FrenchPeakPeak"
    },

    {
        icon: FaLine,
        id: '@FrenchPeakPeak',
        name: "line",
        link: "https://lin.ee/sY0Ep2l"
    },
    {
      icon: FaYoutube,
      id: 'FrenchPeakPeak',
      name: 'youtube',
      link: 'https://www.youtube.com/@FrenchPeakPeak',
    },
]


const FollowUs = () => {
    return (
        <div className="w-full social-contact py-10">
            <p data-aos="fade-up"  className="text-center text-[22px] font-semibold  text-[#052e58] md:text-[35px] min-h-[80px]">
                ติตตามเราได้ที่<span className="text-[40px] text-[#fe9401]"></span></p>
            <div className="flex md:flex-row flex-col justify-center gap-5 px-10 md:px-0 flex-wrap" data-aos="fade-up" >
                {
                    socialList.map((item, index) => {
                        return (
                            <a key={`FollowUs-${index}`} href={item.link} target="_blank" className="flex gap-[10px] cursor-pointer hover:scale-110">
                                <div className={`w-[50px] h-[50px] bg-gradient-to-r ${item.name} rounded-md flex justify-center items-center px-2`}>
                                    <item.icon className="text-[40px] text-white" />
                                </div>
                                <div className={`w-[100%] md:w-auto min-w-[100px] h-[50px] bg-gradient-to-r ${item.name} rounded-md flex justify-center items-center`}>
                                    <p className="text-center text-white font-semibold px-2">
                                        {item.id}
                                    </p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default FollowUs