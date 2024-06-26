import { useGetCourseContentQuery, useGetUserProgressQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import CourseContentMedia from "./CourseContentMedia";
import Header from "../Header";
import CourseContentList from "./CourseContentList";
import { Progress } from "flowbite-react";
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FaAward } from "react-icons/fa6";



function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
      <Box sx={{ width: '100%', mr: 1, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 20, backgroundColor: '#fef5e7', padding: '5px', marginLeft: '5px' }}>
          <FaAward size={20} className="text-[#faa718]" />
        </Box>
      </Box>
      <Box sx={{ minWidth: 40, display: 'flex', gap: 1, marginTop: '-10px' }}>
        <Typography variant="body2" color="text.secondary">
          {`${Math.round(
            props.value,
          )}%`}</Typography>
        <Typography variant="body2" color="text.secondary">
          completed
        </Typography>

      </Box>
    </Box>
  );
}


type Props = {
  id: string;
  user: any;
};

const CourseContent = ({ id, user }: Props) => {
  const {
    data: contentData,
    isLoading,
    refetch,
  } = useGetCourseContentQuery(id, { refetchOnMountOrArgChange: true });

  const {
    data: userProgressData,
    isLoading: userProgressLoading,
    refetch: refetchUserProgress,
  } = useGetUserProgressQuery(id, { refetchOnMountOrArgChange: true });

  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");
  const data = contentData?.content;

  const [activeVideo, setActiveVideo] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const percentage = data?.length ? ((userProgressData?.userProgress?.video_compleated_id?.length || 0) / data.length) * 100 : 0;

  useEffect(() => {
    if (data?.length && userProgressData?.userProgress?.video_compleated_id?.length && activeVideo === 0) {
      const lastVideo = userProgressData?.userProgress?.video_compleated_id?.[userProgressData?.userProgress?.video_compleated_id?.length - 1];
      const index = data.findIndex((item) => item._id === lastVideo?.video_id);
      if (index !== data.length - 1) {
        setActiveVideo(index + 1);
      }
    }

    return () => {

    }
  }, [data, userProgressData])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            activeItem={1}
            open={open}
            setOpen={setOpen}
            route={route}
            setRoute={setRoute}
          />
          <div className="w-full">
            <Heading
              title={data?.[activeVideo]?.title}
              description="anything"
              keywords={data?.[activeVideo]?.tags}
            />
            <div className="w-full bg-gradient-9 text-black mt-5">
              <div className="flex flex-col-reverse md:flex-row px-5 md:px-10">
                <div className=" text-black max-w-[665px]">
                  <div>
                    <LinearProgressWithLabel value={percentage} />
                  </div>
                  <CourseContentList
                    userProgress={userProgressData?.userProgress || {}}
                    setActiveVideo={setActiveVideo}
                    data={data}
                    activeVideo={activeVideo}
                  />
                </div>
                <div className="md:pl-3 pt-3 w-full flex justify-center">
                  <CourseContentMedia
                    refetchUserProgress={refetchUserProgress}
                    data={data}
                    id={id}
                    activeVideo={activeVideo}
                    setActiveVideo={setActiveVideo}
                    user={user}
                    refetch={refetch}
                  />
                </div>
              </div>

            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseContent;
