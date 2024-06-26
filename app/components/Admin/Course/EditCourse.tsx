"use client";
import React, { FC, useEffect, useState } from "react";
import CourseInformation from "./CourseInformation";
import CourseOptions from "./CourseOptions";
import CourseData from "./CourseData";
import CourseContent from "./CourseContent";
import CoursePreview from "./CoursePreview";
import {
  useEditCourseMutation,
  useGetAllCoursesQuery,
} from "../../../../redux/features/courses/coursesApi";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import { IVideoData } from "./CreateCourse";
import CourseContentNew from "./CourseContentNew";

type Props = {
  id: string;
};

const EditCourse: FC<Props> = ({ id }) => {
  const [editCourse, { isSuccess, error }] = useEditCourseMutation();
  const { data, refetch } = useGetAllCoursesQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  const [active, setActive] = useState(0);
  const [courseInfo, setCourseInfo] = useState({
    status: "Public",
    name: "",
    description: "",
    price: "",
    estimatedPrice: "",
    tags: "",
    level: "",
    categories: "",
    demoUrl: "",
    thumbnail: "",
    commission: 100,
    teacherId: "",
  });
  const [benefits, setBenefits] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
  const [courseContentData, setCourseContentData] = useState<IVideoData[]>([
    {
      videoSection: "Untitled Section",
      videoList: [
        {
          canPreview: false,
          videoUrl: "",
          title: "",
          description: "",
          videoLength: "",
          links: [
            {
              title: "",
              url: "",
            },
          ],
          suggestion: "",
        },
      ],
    },
  ]);

  const [courseData, setCourseData] = useState({});
  const editCourseData = data && data.courses.find((i: any) => i._id === id);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Course Updated successfully");
      redirect("/admin/courses");
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [isSuccess, error]);

  useEffect(() => {
    if (editCourseData) {
      setCourseInfo({
        name: editCourseData.name,
        description: editCourseData.description,
        price: editCourseData.price,
        estimatedPrice: editCourseData?.estimatedPrice,
        tags: editCourseData.tags,
        level: editCourseData.level,
        status: editCourseData.status || "Public",
        categories: editCourseData.categories,
        teacherId: editCourseData.teacherId,
        demoUrl: editCourseData.demoUrl,
        thumbnail: editCourseData?.thumbnail?.url,
        commission: editCourseData.commission,
      });
      setBenefits(editCourseData.benefits);
      setPrerequisites(editCourseData.prerequisites);
      const newFomatCourseData = genDataToNewFomat(editCourseData.courseData);
      setCourseContentData(newFomatCourseData);
    }
  }, [editCourseData]);

  const genDataToNewFomat = (courseData: any[]): IVideoData[] => {
    let newCourseData: IVideoData[] = [];

    for (let eachVideo of courseData) {
      const foundCurrentSectionIndex = newCourseData.findIndex((ele) => ele.videoSection === eachVideo.videoSection);
      if (foundCurrentSectionIndex > -1) {
        newCourseData[foundCurrentSectionIndex].videoList.push({
          canPreview: eachVideo.canPreview,
          videoUrl: eachVideo.videoUrl,
          title: eachVideo.title,
          description: eachVideo.description,
          videoLength: eachVideo.videoLength,
          links: eachVideo.links,
          suggestion: eachVideo.suggestion,
        });
      } else {
        newCourseData.push({
          videoSection: eachVideo.videoSection,
          videoList: [
            {
              canPreview: eachVideo.canPreview,
              videoUrl: eachVideo.videoUrl,
              title: eachVideo.title,
              description: eachVideo.description,
              videoLength: eachVideo.videoLength,
              links: eachVideo.links,
              suggestion: eachVideo.suggestion,
            },
          ],
        });
      }
    }
    return newCourseData;
  };

  const handleSubmit = async () => {
    // Format benefits array
    const formattedBenefits = benefits.map((benefit) => ({
      title: benefit.title,
    }));
    // Format prerequisites array
    const formattedPrerequisites = prerequisites.map((prerequisite) => ({
      title: prerequisite.title,
    }));

    let newCourseContentData: any = []
    courseContentData.forEach(
      (courseContent) => {
        courseContent.videoList.forEach((video) => {
          const formattedVideoList = {
            videoSection: courseContent.videoSection,
            videoUrl: video.videoUrl,
            title: video.title,
            description: video.description,
            videoLength: video.videoLength,
            links: video.links,
            suggestion: video.suggestion,
          }
          newCourseContentData.push(formattedVideoList)
        });
      }
    );

    //   prepare our data object
    const data = {
      name: courseInfo.name,
      description: courseInfo.description,
      categories: courseInfo.categories,
      price: courseInfo.price,
      estimatedPrice: courseInfo.estimatedPrice,
      tags: courseInfo.tags,
      thumbnail: courseInfo.thumbnail,
      status: courseInfo.status,
      level: courseInfo.level,
      demoUrl: courseInfo.demoUrl,
      totalVideos: courseContentData.length,
      benefits: formattedBenefits,
      prerequisites: formattedPrerequisites,
      courseData: newCourseContentData,
      teacherId: courseInfo.teacherId,
      commission: courseInfo.commission,
    };

    setCourseData(data);
  };

  const handleCourseCreate = async (e: any) => {
    const data = courseData;
    await editCourse({ id: editCourseData?._id, data });
  };

  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[80%]">
        {active === 0 && (
          <CourseInformation
            courseInfo={courseInfo}
            setCourseInfo={setCourseInfo}
            active={active}
            setActive={setActive}
          />
        )}

        {active === 1 && (
          <CourseData
            benefits={benefits}
            setBenefits={setBenefits}
            prerequisites={prerequisites}
            setPrerequisites={setPrerequisites}
            active={active}
            setActive={setActive}
          />
        )}

        {active === 2 && (
          <CourseContentNew
            active={active}
            setActive={setActive}
            courseContentData={courseContentData}
            setCourseContentData={setCourseContentData}
            handleSubmit={handleSubmit}
          />
        )}

        {active === 3 && (
          <CoursePreview
            active={active}
            setActive={setActive}
            courseData={courseData}
            handleCourseCreate={handleCourseCreate}
            isEdit={true}
          />
        )}
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
        <CourseOptions active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default EditCourse;
