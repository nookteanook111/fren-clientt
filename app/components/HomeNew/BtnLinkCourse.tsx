import { useRouter } from 'next/navigation'
import { MdLiveTv, MdVideoLibrary } from 'react-icons/md'

const BtnLinkCourse = () => {
    const router = useRouter()
    return (
        <div>
            <div className="text-black  flex justify-center flex-row min-h-[350px] md:min-h-[400px] px-5">
                <div className="flex justify-center items-center flex-col">
                    <p data-aos="fade-up" className="text-center text-[22px] font-semibold  text-[#052e58] md:text-[35px] min-h-[80px]">เรียนฟิสิกส์อย่างเป็นระบบกับฟิสิกส์พี่เต้ย
                    </p>
                    <p data-aos="fade-up" className="text-center  text-[18px] md:text-[30px]">  <span className="text-[40px] text-[#fe9401]">อยากเก่ง</span> ฟิสิกส์ <br className='md:hidden' />ต้องเรียนกับนักฟิสิกส์ตัวจริง</p>
                    <div data-aos="fade-up" className="flex gap-10 justify-center mt-10">
                        <button onClick={() => { router.push('/courses') }} className=" cursor-pointer text-[16px] md:text-[25px] px-5 bg-[#2688df] py-2 font-medium rounded-lg drop-shadow hover:drop-shadow-lg text-white hover:scale-125 flex justify-center items-center">
                            <span>คอร์สออนไลน์</span>
                            <MdVideoLibrary className="text-[40px] pl-2 text-[#ffffff]" />
                        </button>
                        <button onClick={() => { router.push('/livestudy') }} className=" cursor-pointer text-[16px] md:text-[25px] px-5 bg-[#febe01] py-2 font-medium rounded-lg drop-shadow hover:drop-shadow-lg text-black hover:scale-125 flex justify-center items-center">
                            <span>คอร์สสอนสด Live</span>
                            <MdLiveTv className="text-[40px] pl-2 text-[red]" />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BtnLinkCourse