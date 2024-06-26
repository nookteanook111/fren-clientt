'use client'
import React, { useState } from "react";
import { FaNewspaper } from "react-icons/fa6";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useSearchParams } from "next/navigation";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Heading from "../utils/Heading";

const patData = [
    { year: "2552", items: [{ title: "มีนาคม", pdf: "/exam/1.PAT-2-มี.ค.-2552.pdf" }, { title: "กรกฏาคม", pdf: "/exam/2.PAT-2-ก.ค.-2552.pdf" }, { title: "ตุลาคม", pdf: "/exam/3.PAT-2-ต.ค.-2552.pdf" }] },
    { year: "2553", items: [{ title: "มีนาคม", pdf: "/exam/4.PAT-2-มี.ค.-2553.pdf" }, { title: "กรกฏาคม", pdf: "/exam/5.PAT-2-ก.ค.-2553.pdf" }, { title: "ตุลาคม", pdf: "/exam/6.PAT-2-ต.ค.2553.pdf" }] },
    { year: "2554", items: [{ title: "มีนาคม", pdf: "/exam/7.PAT-2-มี.ค.-2554.pdf" }, { title: "ตุลาคม", pdf: "/exam/8.PAT-2-ต.ค.-2554.pdf" }] },
    { year: "2555", items: [{ title: "มีนาคม", pdf: "/exam/9.PAT-2-มี.ค.-2555.pdf" }, { title: "ตุลาคม", pdf: "/exam/10.PAT-2-ต.ค.2555.pdf" }] },
    { year: "2556", items: [{ title: "มีนาคม", pdf: "/exam/11.PAT-2-มี.ค.-2556.pdf" }] },
    { year: "2557", items: [{ title: "มีนาคม", pdf: "/exam/12.PAT-2-มี.ค.-2557.pdf" }, { title: "เมษายน", pdf: "/exam/13.PAT-2-เม.ย-2557.pdf" }, { title: "พฤศจิกายน", pdf: "/exam/14.PAT-2-พ.ย-2557.pdf" }] },
    { year: "2558", items: [{ title: "พฤศจิกายน", pdf: "/exam/15.PAT-2-พ.ย-2558.pdf" }] },
    { year: "2559", items: [{ title: "มีนาคม", pdf: "/exam/16.PAT-2-มี.ค.-2559.pdf" }, { title: "ตุลาคม", pdf: "/exam/17.-PAT-2-ต.ค.-2559.pdf" }] },
    { year: "2560", items: [{ title: "มีนาคม", pdf: "/exam/18.-PAT-2-มี.ค.-2560.pdf" }] },
];

const alevelData = [
    { year: '2555', items: [{ pdf: "/exam/a_level/สามัญ 2555.pdf" }] },
    { year: '2556', items: [{ pdf: "/exam/a_level/สามัญ 2556.pdf" }] },
    { year: '2557', items: [{ pdf: "/exam/a_level/สามัญ 2557.pdf" }] },
    { year: '2558', items: [{ pdf: "/exam/a_level/สามัญ 2558.pdf" }] },
    { year: '2559', items: [{ pdf: "/exam/a_level/สามัญ 2559.pdf" }] },
    { year: '2560', items: [{ pdf: "/exam/a_level/สามัญ 2560.pdf" }] },
    { year: '2561', items: [{ pdf: "/exam/a_level/สามัญ 2561.pdf" }] },
    { year: '2562', items: [{ pdf: "/exam/a_level/สามัญ 2562.pdf" }] },
    { year: '2563', items: [{ pdf: "/exam/a_level/สามัญ 2563.pdf" }] },
    { year: '2564', items: [{ pdf: "/exam/a_level/สามัญ 2564.pdf" }] },
]

const physicData = [
    { year: '2560', items: [{ pdf: "/exam/physic/posn1-60-physics.pdf" }] },
    { year: '2561', items: [{ pdf: "/exam/physic/posn1-61-physics.pdf" }] },
    { year: '2562', items: [{ pdf: "/exam/physic/posn1-physics62.pdf" }] },
]

const pat3Engineer = [
    { year: '2557', items: [{ title: "มีนาคม", pdf: "/exam/pat3/ปี57/PAT3 มีนาคม 57.pdf" }, { title: "เมษายน", pdf: "/exam/pat3/ปี57/PAT3 เมษา 57.pdf" }, { title: "พฤศจิกายน", pdf: "/exam/pat3/ปี57/PAT3 พฤศจิกา 57.pdf" }] },
    { year: '2558', items: [{ title: "มีนาคม", pdf: "/exam/pat3/ปี58/PAT3 มีนา 58.pdf" }, { title: "พฤศจิกายน", pdf: "/exam/pat3/ปี58/PAT3พฤศจิกา 58.pdf" }] },
    { year: '2559', items: [{ title: "มีนาคม", pdf: "/exam/pat3/ปี59/PAT3 มีนาคม 2559.pdf" }, { title: "ตุลาคม", pdf: "/exam/pat3/ปี59/PAT3 ตุลาคม 2559.pdf" }] },
    { year: '2560', items: [{ title: "มีนาคม", pdf: "/exam/pat3/ปี60/PAT3 มีนาคม 2560.pdf" }] },
    { year: '2561', items: [{ title: "มีนาคม", pdf: "/exam/pat3/ปี61/PAT3 มีนาคม 2561.pdf" }] },
]

const subjectCategory = [
    {
        title: "ข้อสอบทั้งหมด",
        color: "border-gray-600 border-2"
    },
    {
        title: "ข้อสอบ PAT2",
        color: "border-[#febe01] border-2"
    },
    {
        title: "ข้อสอบ A LEVEL",
        color: "border-[#004B7D] border-2"

    },
    {
        title: "ข้อสอบสอวน.ฟิสิกส์ คัดค่าย 1",
        color: "border-orange-500 border-2"

    },
    {
        title: "ข้อสอบความถนัดวิศวกรรม (TPAT3)",
        color: "border-red-800 border-2"
    }
]

const Page = () => {
    const searchParams = useSearchParams();
    const search = searchParams?.get("title");
    const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
    const [route, setRoute] = useState("Login");
    const [open, setOpen] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState("ข้อสอบทั้งหมด");
    console.log(selectedCategory)

    const handlePDFClick = (pdfUrl) => {
        window.open(`/view-exam?file=${pdfUrl.replace('/exam/', '')}`, "_blank");
    };

    return (
        <div>
            <Heading
                title={"คลังข้อสอบ - Elearning"}
                description={"Elearning is a programming community."}
                keywords={
                    "programming community, coding skills, expert insights, collaboration, growth"
                }
            />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Header route={route} setRoute={setRoute} open={open} setOpen={setOpen} activeItem={4} />
                    <div className="container mx-auto p-4">
                        <p className="text-[40px]">คลังข้อสอบ</p>
                        <div className="flex flex-wrap gap-4 rounded-xl border-2 border-secondary p-2 mb-8">
                            {subjectCategory.map((item, index) => (
                                <div key={index}>
                                    <button className={`${item.color} text-black cursor-pointer text-[14px] md:text-[18px] px-5 py-2 font-medium rounded-lg drop-shadow hover:drop-shadow-lg hover:scale-105 flex justify-center items-center`} onClick={() => setSelectedCategory(item.title)}>{item.title}</button>
                                </div>
                            ))}
                        </div>
                        {selectedCategory == "ข้อสอบทั้งหมด"
                            ?
                            <>
                                <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">ข้อสอบ PAT2</p>
                                <div className="h-[5px] rounded-xl bg-[#febe01]"></div>
                                {patData.map((yearData, yearIndex) => (
                                    <div key={yearIndex} className="my-8">
                                        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold my-2 text-black">ข้อสอบ PAT2 วิชา ฟิสิกส์ ปี {yearData.year}</p>
                                        <div className="flex flex-wrap gap-4">
                                            {yearData.items.map((item, itemIndex) => (
                                                <button
                                                    key={itemIndex}
                                                    onClick={() => handlePDFClick(item.pdf)}
                                                    className="cursor-pointer text-[14px] md:text-[18px] px-5 bg-[#febe01] py-2 font-medium rounded-lg drop-shadow hover:drop-shadow-lg text-black hover:scale-105 flex justify-center items-center"
                                                >
                                                    <FaNewspaper className="mx-2" />
                                                    {item.title}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">ข้อสอบ A LEVEL</p>
                                <div className="h-[5px] rounded-xl bg-[#004B7D]"></div>
                                {alevelData.map((yearData, yearIndex) => (
                                    <div key={yearIndex} className="my-8">
                                        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold my-2 text-black">ข้อสอบ A LEVEL ปี {yearData.year}</p>
                                        <div className="flex flex-wrap gap-4">
                                            {yearData.items.map((item, itemIndex) => (
                                                <button
                                                    key={itemIndex}
                                                    onClick={() => handlePDFClick(item.pdf)}
                                                    className="cursor-pointer text-[14px] md:text-[18px] px-5 bg-[#004B7D] py-2 font-medium rounded-lg drop-shadow hover:drop-shadow-lg text-white hover:scale-105 flex justify-center items-center"
                                                >
                                                    <FaNewspaper className="mx-2" />
                                                    {yearData.year}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">ข้อสอบสอวน.ฟิสิกส์ คัดค่าย 1</p>
                                <div className="h-[5px] rounded-xl bg-orange-500"></div>
                                {physicData.map((yearData, yearIndex) => (
                                    <div key={yearIndex} className="my-8">
                                        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold my-2 text-black">ข้อสอบ A LEVEL ปี {yearData.year}</p>
                                        <div className="flex flex-wrap gap-4">
                                            {yearData.items.map((item, itemIndex) => (
                                                <button
                                                    key={itemIndex}
                                                    onClick={() => handlePDFClick(item.pdf)}
                                                    className="cursor-pointer text-[14px] md:text-[18px] px-5 bg-orange-500 py-2 font-medium rounded-lg drop-shadow hover:drop-shadow-lg text-white hover:scale-105 flex justify-center items-center"
                                                >
                                                    <FaNewspaper className="mx-2" />
                                                    {yearData.year}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">ข้อสอบความถนัดวิศวกรรม (TPAT3)</p>
                                <div className="h-[5px] rounded-xl bg-red-800"></div>
                                {pat3Engineer.map((yearData, yearIndex) => (
                                    <div key={yearIndex} className="my-8">
                                        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold my-2 text-black">ข้อสอบ A LEVEL ปี {yearData.year}</p>
                                        <div className="flex flex-wrap gap-4">
                                            {yearData.items.map((item, itemIndex) => (
                                                <button
                                                    key={itemIndex}
                                                    onClick={() => handlePDFClick(item.pdf)}
                                                    className="cursor-pointer text-[14px] md:text-[18px] px-5 bg-red-800 py-2 font-medium rounded-lg drop-shadow hover:drop-shadow-lg text-white hover:scale-105 flex justify-center items-center"
                                                >
                                                    <FaNewspaper className="mx-2" />
                                                    {item.title}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </>
                            :
                            <></>
                        }
                        {selectedCategory == "ข้อสอบ PAT2"
                            ?
                            <>
                                <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">ข้อสอบ PAT2</p>
                                <div className="h-[5px] rounded-xl bg-[#febe01]"></div>
                                {patData.map((yearData, yearIndex) => (
                                    <div key={yearIndex} className="my-8">
                                        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold my-2 text-black">ข้อสอบ PAT2 วิชา ฟิสิกส์ ปี {yearData.year}</p>
                                        <div className="flex flex-wrap gap-4">
                                            {yearData.items.map((item, itemIndex) => (
                                                <button
                                                    key={itemIndex}
                                                    onClick={() => handlePDFClick(item.pdf)}
                                                    className="cursor-pointer text-[14px] md:text-[18px] px-5 bg-[#febe01] py-2 font-medium rounded-lg drop-shadow hover:drop-shadow-lg text-black hover:scale-105 flex justify-center items-center"
                                                >
                                                    <FaNewspaper className="mx-2" />
                                                    {item.title}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </>
                            :
                            <></>
                        }
                        {selectedCategory == "ข้อสอบ A LEVEL"
                            ?
                            <>
                                <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">ข้อสอบ A LEVEL</p>
                                <div className="h-[5px] rounded-xl bg-[#004B7D]"></div>
                                {alevelData.map((yearData, yearIndex) => (
                                    <div key={yearIndex} className="my-8">
                                        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold my-2 text-black">ข้อสอบ A LEVEL ปี {yearData.year}</p>
                                        <div className="flex flex-wrap gap-4">
                                            {yearData.items.map((item, itemIndex) => (
                                                <button
                                                    key={itemIndex}
                                                    onClick={() => handlePDFClick(item.pdf)}
                                                    className="cursor-pointer text-[14px] md:text-[18px] px-5 bg-[#004B7D] py-2 font-medium rounded-lg drop-shadow hover:drop-shadow-lg text-white hover:scale-105 flex justify-center items-center"
                                                >
                                                    <FaNewspaper className="mx-2" />
                                                    {yearData.year}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </>
                            :
                            <></>
                        }
                        {selectedCategory == "ข้อสอบสอวน.ฟิสิกส์ คัดค่าย 1"
                            ?
                            <>
                                <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">ข้อสอบสอวน.ฟิสิกส์ คัดค่าย 1</p>
                                <div className="h-[5px] rounded-xl bg-orange-500"></div>
                                {physicData.map((yearData, yearIndex) => (
                                    <div key={yearIndex} className="my-8">
                                        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold my-2 text-black">ข้อสอบ A LEVEL ปี {yearData.year}</p>
                                        <div className="flex flex-wrap gap-4">
                                            {yearData.items.map((item, itemIndex) => (
                                                <button
                                                    key={itemIndex}
                                                    onClick={() => handlePDFClick(item.pdf)}
                                                    className="cursor-pointer text-[14px] md:text-[18px] px-5 bg-orange-500 py-2 font-medium rounded-lg drop-shadow hover:drop-shadow-lg text-white hover:scale-105 flex justify-center items-center"
                                                >
                                                    <FaNewspaper className="mx-2" />
                                                    {yearData.year}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </>
                            :
                            <></>
                        }
                        {selectedCategory == "ข้อสอบความถนัดวิศวกรรม (TPAT3)"
                            ?
                            <>
                                <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">ข้อสอบความถนัดวิศวกรรม (TPAT3)</p>
                                <div className="h-[5px] rounded-xl bg-red-800"></div>
                                {pat3Engineer.map((yearData, yearIndex) => (
                                    <div key={yearIndex} className="my-8">
                                        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold my-2 text-black">ข้อสอบ A LEVEL ปี {yearData.year}</p>
                                        <div className="flex flex-wrap gap-4">
                                            {yearData.items.map((item, itemIndex) => (
                                                <button
                                                    key={itemIndex}
                                                    onClick={() => handlePDFClick(item.pdf)}
                                                    className="cursor-pointer text-[14px] md:text-[18px] px-5 bg-red-800 py-2 font-medium rounded-lg drop-shadow hover:drop-shadow-lg text-white hover:scale-105 flex justify-center items-center"
                                                >
                                                    <FaNewspaper className="mx-2" />
                                                    {item.title}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </>
                            :
                            <></>
                        }

                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Page;
