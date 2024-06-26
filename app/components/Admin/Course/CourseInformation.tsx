import { styles } from "@/app/styles/style";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { useGetTeacherListQuery } from "@/redux/features/user/userApi";
import React, { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

type Props = {
  courseInfo: any;
  setCourseInfo: (courseInfo: any) => void;
  active: number;
  setActive: (active: number) => void;
};

const requireFieldList = [
  "name",
  "description",
  "price",
  "tags",
  "level",
  "demoUrl",
  "status",
  "teacherId",
]

const CourseInformation: FC<Props> = ({
  courseInfo,
  setCourseInfo,
  active,
  setActive,
}) => {
  const [dragging, setDragging] = useState(false);
  const { data } = useGetHeroDataQuery("Categories", {});
  const [categories, setCategories] = useState([]);
  const { user } = useSelector((state: any) => state.auth);


  const {
    data: teacherList,
    isLoading: teacherListLoading,
    isSuccess: teacherListSuccess,
    error: teacherListError,
  } = useGetTeacherListQuery({});

  const [teacherListOptions, setTeacherListOptions] = useState([]);


  useEffect(() => {
    if (teacherListSuccess && teacherList.users?.length > 0) {
      setTeacherListOptions(teacherList?.users?.map((teacher) => ({
        value: teacher._id,
        label: teacher.name,
      })));
    }

    if (teacherListError) {
      if ("data" in teacherListError) {
        const errorMessage = teacherListError as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [teacherListSuccess, teacherListError]);

  useEffect(() => {
    if (data) {
      setCategories(data.layout.categories);
    }
  }, [data]);

  const validateInput = () => {
    let isValid = true;
    requireFieldList.forEach((field) => {
      if (!courseInfo[field]) {
        isValid = false;
        toast.error(`Please fill ${field}`);
      }
    });
    return isValid;
  }

  console.log('courseInfo', courseInfo)

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateInput()) {
      return;
    }
    setActive(active + 1);
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setCourseInfo({ ...courseInfo, thumbnail: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24">
      <form onSubmit={handleSubmit} className={`${styles.label}`}>
        <div>
          <label htmlFor="">Course Name</label>
          <input
            type="name"
            name=""
            required
            value={courseInfo.name}
            onChange={(e: any) =>
              setCourseInfo({ ...courseInfo, name: e.target.value })
            }
            id="name"
            placeholder="MERN stack LMS platform with next 13"
            className={`
            ${styles.input}`}
          />
        </div>
        <br />
        <div className="mb-5">
          <label className={`${styles.label}`}>Course Description</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={8}
            placeholder="Write something amazing..."
            className={`${styles.input} !h-min !py-2`}
            value={courseInfo.description}
            required
            onChange={(e: any) =>
              setCourseInfo({ ...courseInfo, description: e.target.value })
            }
          ></textarea>
        </div>
        <br />
        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label className={`${styles.label}`}>Course Price</label>
            <input
              type="number"
              name=""
              required
              value={courseInfo.price}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, price: e.target.value })
              }
              id="price"
              placeholder="29"
              className={`
            ${styles.input}`}
            />
          </div>
          <div className="w-[50%]">
            <label className={`${styles.label} w-[50%]`}>
              Estimated Price (optional)
            </label>
            <input
              type="number"
              name=""
              value={courseInfo.estimatedPrice}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, estimatedPrice: e.target.value })
              }
              id="price"
              placeholder="79"
              className={`
            ${styles.input}`}
            />
          </div>
        </div>
        <br />
        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label className={`${styles.label}`} htmlFor="email">
              Course Tags
            </label>
            <input
              type="text"
              required
              name=""
              value={courseInfo.tags}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, tags: e.target.value })
              }
              id="tags"
              placeholder="MERN,Next 13,Socket io,tailwind css,LMS"
              className={`
            ${styles.input}`}
            />
          </div>
          <div className="w-[50%]">
            <label className={`${styles.label} w-[50%]`}>
              Course Categories
            </label>
            <select
              name=""
              id=""
              className={`${styles.input}`}
              required
              value={courseInfo.categories}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, categories: e.target.value })
              }
            >
              <option value="">Select Category</option>
              {categories &&
                categories.map((item: any) => (
                  <option value={item.title} key={item._id}>
                    {item.title}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <br />
        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label className={`${styles.label}`}>Course Level</label>
            <input
              type="text"
              name=""
              value={courseInfo.level}
              required
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, level: e.target.value })
              }
              id="level"
              placeholder="Beginner/Intermediate/Expert"
              className={`
            ${styles.input}`}
            />
          </div>
          <div className="w-[50%]">
            <label className={`${styles.label} w-[50%]`}>Demo Url</label>
            <input
              type="text"
              name=""
              required
              value={courseInfo.demoUrl}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
              }
              id="demoUrl"
              placeholder="eer74fd"
              className={`
            ${styles.input}`}
            />
          </div>
        </div>
        <br />
        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label className={`${styles.label} w-[50%]`}>
              Status
            </label>
            <select
              name=""
              id=""
              className={`${styles.input}`}
              value={courseInfo.status}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, status: e.target.value })
              }
            >
              <option value={'Public'}>
                🌎 {'Public'}
              </option>
              <option value={'Private'}>
                🔒 {'Private'}
              </option>
            </select>
          </div>
          <div className="w-[50%]">
            <div>
              <label className={`${styles.label}`}>
                Teacher
              </label>
              <select
                required
                name=""
                id=""
                className={`${styles.input}`}
                value={courseInfo.teacherId}
                onChange={(e: any) =>
                  setCourseInfo({ ...courseInfo, teacherId: e.target.value })
                }
              >
                <option value="">Select Teacher</option>
                <option value={user._id}>{user.name} - me</option>
                {teacherListOptions &&
                  teacherListOptions.map((item: any) => (
                    <option value={item.value} key={item.value}>
                      {item.label}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        <br />
        <div className="w-full flex justify-between mb-5">
          <div className="w-[45%]">
            <label className={`${styles.label}`} htmlFor="email">
              % Commission
            </label>
            <input
              type="number"
              required
              name=""
              value={`${courseInfo.commission}`}
              onChange={(e: any) => {
                let commission = e.target.value;
                if (commission > 100) {
                  commission = 100;
                }
                if (commission < 0) {
                  commission = 0;
                }
                setCourseInfo({ ...courseInfo, commission })
              }
              }
              id="commission"
              placeholder="100"
              className={`
            ${styles.input}`}
            />
          </div>
          <div className="w-[50%]">
          </div>
        </div>
        <div className="w-full">
          <input
            type="file"
            accept="image/*"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className={`w-full min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center ${dragging ? "bg-blue-500" : "bg-transparent"
              }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {courseInfo.thumbnail ? (
              <img
                src={courseInfo.thumbnail}
                alt=""
                className="max-h-full w-full object-cover"
              />
            ) : (
              <span className="text-black dark:text-white">
                Drag and drop your thumbnail here or click to browse
              </span>
            )}
          </label>
        </div>
        <br />
        <div className="w-full flex items-center justify-end">
          <input
            type="submit"
            value="Next"
            className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          />
        </div>
        <br />
        <br />
      </form>
    </div>
  );
};

export default CourseInformation;
