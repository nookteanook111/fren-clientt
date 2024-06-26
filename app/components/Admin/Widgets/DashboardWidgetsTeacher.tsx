import React, { FC, useEffect, useState } from "react";
import { PiStudent, PiUsersFourLight } from "react-icons/pi";
import {
  useGetCoursesAnalyticsQuery,
} from "@/redux/features/analytics/analyticsApi";
import { DateRangePicker, Stack } from 'rsuite';
import { MdOutlineAttachMoney } from "react-icons/md";
import CountUp from 'react-countup';
import { GiMoneyStack } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import OrdersAnalyticsTeacher from "../Analytics/OrdersAnalyticsTeacher";
import { useGetTeacherAnalyticsMutation } from "@/redux/features/orders/ordersApi";
import { THIS_MONTH, predefinedRanges } from "./constant";

type Props = {
  open?: boolean;
  value?: number;
};

const DashboardWidgetsTeacher: FC<Props> = ({ open }) => {
  const { data, isLoading } = useGetCoursesAnalyticsQuery({});
  const [selectedDate, setSelectedDate] = useState<[Date, Date]>(THIS_MONTH);
  const [getOrderAnalytics, { data: orderData, isLoading: orderLoading }] = useGetTeacherAnalyticsMutation();

  useEffect(() => {
    setSelectedDate(THIS_MONTH)
    fetchAnalytics(THIS_MONTH)
  }, [])

  const fetchAnalytics = async (date: any) => {
    const [startDate, endDate] = date;
    startDate.setHours(0, 0, 0, 0);
    await getOrderAnalytics({ startDate, endDate, teacherId: "663fae05c6ca63caddffbf86" })
  }

  const analyticsData: any = [];

  data &&
    data.courses.last12Months.forEach((item: any) => {
      analyticsData.push({ name: item.month, uv: item.count });
    });

  return (
    <div className="mt-[120px] min-h-screen text-black pr-[80px]">
      <div className="grid grid-cols pt-80px">
        <div className="flex justify-end">
          <DateRangePicker
            ranges={predefinedRanges}
            defaultValue={selectedDate}
            format="dd/MM/yyyy"
            showOneCalendar
            placeholder="One calendar"
            style={{ width: 300 }}            
            onOk={date => {
              fetchAnalytics(date)            
            }}
            onShortcutClick={(shortcut, event) => {
              if(shortcut.value){
                fetchAnalytics(shortcut?.value)
              };
            }}
          />
        </div>
        <div className="grid grid-cols-4 gap-[20px] mt-[40px]">
          <div className="rounded-md bg-white shadow-sm p-5 h-[140px]">
            <div className="flex flex-col justify-around h-[100%]">
              <div className="flex justify-between">
                <p className="text-2xl font-bold">
                  <CountUp end={orderData?.data?.totalEarning} suffix="฿" />
                </p>
                <GiMoneyStack size={50} className="text-gray-300" />
              </div>
              <p className=" text-md text-gray-500">
                Total Earn
              </p>
            </div>
          </div>
          <div className="rounded-md bg-white shadow-sm p-5 h-[140px]">
            <div className="flex flex-col justify-around h-[100%]">
              <div className="flex justify-between">
                <p className="text-2xl font-bold">
                  <CountUp end={orderData?.data?.commission} suffix="฿" />
                </p>
                <GiReceiveMoney size={50} className="text-gray-300" />
              </div>
              <p className=" text-md text-gray-500">
                Commission
              </p>
            </div>
          </div>
          <div className="rounded-md bg-white shadow-sm p-5 h-[140px]">
            <div className="flex flex-col justify-around h-[100%]">
              <div className="flex justify-between">
                <p className="text-2xl font-bold">
                  <CountUp end={orderData?.data?.commissionRate} suffix="%" />
                </p>
                <MdOutlineAttachMoney size={50} className="text-gray-300" />
              </div>
              <p className=" text-md text-gray-500">
                Avg. Commission Rate
              </p>
            </div>
          </div>
          <div className="rounded-md bg-white shadow-sm p-5 h-[140px]">
            <div className="flex flex-col justify-around h-[100%]">
              <div className="flex justify-between">
                <p className="text-2xl font-bold">
                  <CountUp end={orderData?.data?.totalStudent} suffix=" person" />
                </p>
                <PiStudent size={50} className="text-gray-300" />
              </div>
              <p className=" text-md text-gray-500">
                Student
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[70%,30%] gap-[20px] mt-[40px]">
          <div className="rounded-md bg-white shadow-sm p-5 h-[400px]">
            <p className="text-xl text-gray-500 font-bold">
              
            Purchased course
            </p>
            <OrdersAnalyticsTeacher isDashboard data={orderData?.data?.graphDataCourseCount || []}/>
          </div>
          <div className="rounded-md bg-white shadow-sm p-5 h-[140px]">
            <div className="flex flex-col justify-around h-[100%]">
              <div className="flex flex-col justify-between">
                <p className="text-xl text-gray-500 font-bold">
                  Top Seller Course
                </p>
                <div>
                  <div className="flex justify-around text-xs text-gray-500">
                    <span>course</span>
                    <span>count</span>
                  </div>
                  <ul>
                    {
                      orderData?.data?.topSellerCourse?.map((item: any, idx: number) => (
                        <li key={item.courseId} className="flex justify-between">
                          <span>{+idx+1}. {item.courseName}</span>
                          <span>{item.count}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardWidgetsTeacher;
