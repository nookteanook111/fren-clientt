import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import SlideOverview from "./SlideOverview";

const experience = [
    {
        text: 'ที่ 1 ฟิสิกส์สามัญ ประเทศ ',
        secondText: ''
    },
    {
        text: 'ชนะเลิศการแข่งขันฟิสิกส์สัประยุทธ์ กลุ่มภาคกลางและกลุ่มภาคตะวันออก',
        secondText: ''
    },
    {
        text: 'ที่ 1 ชนะเลิศการตอบปัญหาวิศวกรรมศาสตร์',
        secondText: '( มหาวิทยาลัยเกษตรศาสตร์ )'
    },
    {
        text: 'นักเรียนฟิสิกส์โอลิมปิค มหาวิทยาลัยศิลปากร',
        secondText: '(สนามจันทร์)'
    },
    {
        text: 'นักเรียนทุนส่งเสริมความเป็นเลิศทางวิทยาศาสตร์และ เทคโนโลยี JSTP ของสวทช และอพวช',
        secondText: ''
    },
    {
        text: 'รับเชิญเข้าร่วมประชุมสัมนาฟิสิกส์ศึกษา',
        secondText: 'เกี่ยวกับการเรียนการสอนและงานวิจัยด้านฟิสิกส์ศึกษาของประเทศไทย)'
    },
]

const settingPeopleSay = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // className: 'notes-slider',
    autoplay: true,
    autoplaySpeed: 2000,

}

const reviewImage = [
    {
        url: '/teacher-slide/banner-1.jpeg'
    },
    {
        url: '/teacher-slide/banner-2.jpeg'
    },
    {
        url: '/teacher-slide/banner-3.jpeg'
    },
    {
        url: '/teacher-slide/banner-4.jpeg'
    },
    {
        url: '/teacher-slide/banner-5.jpeg'
    },
    {
        url: '/teacher-slide/banner-6.jpeg'
    },
    {
        url: '/teacher-slide/banner-7.jpeg'
    },
    {
        url: '/teacher-slide/banner-8.jpeg'
    },
]


const TeacherExperience = () => {
    return (
        <div className="w-full font-Poppins pt-[40px] flex justify-center flex-col text-[#052e58] pb-10">
            <p data-aos="fade-up" className="text-center text-[#052e58] text-[22px] md:text-[35px] font-bold min-h-[100px]">
                พี่เต้ย (อ.เชษฐา)
                <br />
                <span className="text-[16px] md:text-[30px] font-semibold">โรงเรียนกวดวิชาฟิสิกส์อาจารย์เต้ย
                    <br />
                    <span className="text-[12px] md:text-[28px] font-normal">(ในความควบคุมของกระทรวงศึกษาธิการ)</span>
                </span>

            </p>
            <div data-aos="fade-up" className="w-full flex justify-center flex-col lg:flex-row items-center teacherExper">
                <div className="">
                    <Image
                        src="/teacher.png"
                        alt="Teacher"
                        width={500}
                        height={500}
                        className="w-[200px] md:w-[500px]"
                    />
                </div>

                {/* <div className="max-w-[400px] md:max-w-[600px] px-5 md:hidden">
                    <div className="max-w-[90%] m-auto">
                    <SlideOverview/>
                    </div>
                </div> */}
                <div className="pt-0 md:pt-20">
                    <div className="md:w-[500px] shadow-lg relative px-5">
                        <div className=" text-[18px] md:text-[22px] font-bold mt-0 md:mt-0 md:absolute top-0 md:top-[-30px] px-10 py-2 bg-yellow-300 rounded-full drop-shadow-md">
                            <p className="text-center md:text-left"> ประวัติ / ประสบการณ์การสอน</p>
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
                            <div className="md:hidden mb-4 text-[18px] md:text-[22px] font-bold mt-5 md:mt-0 md:absolute top-0 md:top-[-30px] px-10 py-2 bg-yellow-300 rounded-full drop-shadow-md">
                                <p className="text-center md:text-left"> ปัจจุบัน</p>
                            </div>
                            <div className="text-[20px] mt-2 font-semibold md:block hidden">ปัจจุบัน</div>
                            <div className="text-[18px] ">- อาจารย์ฟิสิกส์ สถาบันฟิสิกส์ อ.เต้ย</div>
                            <div className="text-[18px] ">- อาจารย์พิเศษห้องเรียนพิเศษทั่วประเทศ</div>
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

export default TeacherExperience;
