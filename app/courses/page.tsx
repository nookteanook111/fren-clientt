"use client";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { useRouter, useSearchParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import { styles } from "../styles/style";
import CourseCard from "../components/Course/CourseCard";
import Footer from "../components/Footer";

import { MdEngineering } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { BiBarChartAlt } from "react-icons/bi";

type Props = {};

const mapIcon = [
  {
    icon: <MdEngineering />,
    title: "คอร์สวิศวะ",
  },
  {
    icon: <FaUserDoctor />,
    title: "คอร์สสายแพทย์",
  },
  {
    icon: <PiStudent />,
    title: "คอร์ส ม.ปลาย",
  },
  {
    icon: <BiBarChartAlt />,
    title: "คอร์สตะลุยโจทย์/รวบรัด",
  },
];

const Page = (props: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = searchParams?.get("title");
  const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
  const { data: categoriesData } = useGetHeroDataQuery("Categories", {});
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const [courses, setcourses] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    handleChangeList()
  }, [data, category, search]);


  const handleChangeList = () => {
    if (search) {
      if (search === 'All') {
        setcourses(data?.courses);
        setCategory(search);
        return
      }

      // if (search === 'คอร์สเตรียมสอบ') {
      //   const filterCourse = data?.courses.filter((item: any) => item.categories.includes(search))
      //   setcourses(filterCourse);
      //   setCategory(search);
      //   return
      // }

      const filterCourse = data?.courses.filter((item: any) => item.categories === search)
      setcourses(filterCourse);
      setCategory(search);
    } else {
      setcourses(data?.courses);
      setCategory('All');
    }
  }

  const handleCategoryClick = (value) => {
    router.push(`/courses?title=${value}`)
  }

  const categories = categoriesData?.layout?.categories ?? [];

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
            activeItem={1}
          />
          <div className="w-full text-black" style={{ backgroundImage: `url(/paper.png)` }}>
            <div className="w-[95%] 800px:w-[85%] m-auto min-h-[70vh]">
              <Heading
                title={"All courses - Elearning"}
                description={"Elearning is a programming community."}
                keywords={
                  "programming community, coding skills, expert insights, collaboration, growth"
                }
              />
              <br />
              <div className="w-full flex items-center flex-wrap border-2 border-secondary rounded-xl">
                <div
                  className={`h-[35px] ${category === "All"
                    ? "bg-primary font-bold text-white"
                    : "border-primary text-black border-2"
                    } m-3 px-3 rounded-xl flex items-center justify-center font-Poppins cursor-pointer`}
                  onClick={() => handleCategoryClick("All")}
                >
                  ทั้งหมด
                </div>
                {/* <div
                  className={`h-[35px] ${category === "คอร์สเตรียมสอบ"
                    ? "bg-primary font-bold text-white"
                    : "border-primary text-black border-2"
                    } m-3 px-3 rounded-xl flex items-center justify-center font-Poppins cursor-pointer`}
                  onClick={() => handleCategoryClick("คอร์สเตรียมสอบ")}
                >
                  คอร์สเตรียมสอบ
                </div> */}
                {categories &&
                  categories.map((item: any, index: number) => (
                    <div key={index}>
                      <div
                        className={`h-[35px] ${category?.trim() === item.title?.trim()
                          ? "bg-primary font-bold text-white"
                          : "border-primary text-black border-2"
                          } m-3 px-3 rounded-xl flex items-center justify-center font-Poppins cursor-pointer`}
                        onClick={() => handleCategoryClick(item.title)}
                      >
                        {item.title}
                      </div>
                    </div>
                  ))}
              </div>
              {courses && courses.length === 0 && (
                <p
                  className={`${styles.label} text-black text-[24px] justify-center min-h-[50vh] flex items-center`}
                >
                  {search
                    ? "No courses found!"
                    : "No courses found in this category. Please try another one!"}
                </p>
              )}
              <br />
              <br />
              <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] pb-12 border-0">
                {courses &&
                  courses.map((item: any, index: number) => (
                    <CourseCard item={item} key={index} />
                  ))}
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
};

export default Page;
