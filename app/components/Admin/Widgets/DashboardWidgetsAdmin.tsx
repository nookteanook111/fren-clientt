import React, { FC, useEffect, useState } from "react";
import UserAnalytics from "../Analytics/UserAnalytics";
import { BiBorderLeft } from "react-icons/bi";
import { PiStudent, PiUsersFourLight } from "react-icons/pi";
import { Box, CircularProgress } from "@mui/material";
import OrdersAnalytics from "../Analytics/OrdersAnalytics";
import AllInvoices from "../Order/AllInvoices";
import {
  useGetOrdersAnalyticsQuery,
  useGetUsersAnalyticsQuery,
} from "@/redux/features/analytics/analyticsApi";
import CountUp from "react-countup";
import { GiMoneyStack, GiReceiveMoney } from "react-icons/gi";
import { MdAccountBalanceWallet, MdOutlineAttachMoney } from "react-icons/md";
import { DateRangePicker } from "rsuite";
import { THIS_MONTH, predefinedRanges } from "./constant";
import { useGetAdminAnalyticsMutation } from "@/redux/features/orders/ordersApi";
import DataTable from "./DataTable";
import OwnerEarnningTable from "./OwnerEarnningTable";
import TeacherEarnningTable from "./TeacherEarnningTable";

type Props = {
  open?: boolean;
  value?: number;
};

const CircularProgressWithLabel: FC<Props> = ({ open, value }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={45}
        color={value && value > 99 ? "info" : "error"}
        thickness={4}
        style={{ zIndex: open ? -1 : 1 }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
};

const DashboardWidgets: FC<Props> = ({ open }) => {
  const [ordersComparePercentage, setOrdersComparePercentage] = useState<any>();
  const [selectedDate, setSelectedDate] = useState<[Date, Date]>(THIS_MONTH);
  const [userComparePercentage, setuserComparePercentage] = useState<any>();
  const [getOrderAnalytics, { data: orderData, isLoading: orderLoading }] = useGetAdminAnalyticsMutation();

  const { data, isLoading } = useGetUsersAnalyticsQuery({});
  const { data: ordersData, isLoading: ordersLoading } =
    useGetOrdersAnalyticsQuery({});

  useEffect(() => {
    setSelectedDate(THIS_MONTH)
    fetchAnalytics(THIS_MONTH)
  }, [])

  const fetchAnalytics = async (date: any) => {
    const [startDate, endDate] = date;
    startDate.setHours(0, 0, 0, 0);
    console.log(startDate, endDate)
    await getOrderAnalytics({ startDate, endDate })
  }


  useEffect(() => {
    if (isLoading && ordersLoading) {
      return;
    } else {
      if (data && ordersData) {
        const usersLastTwoMonths = data.users.last12Months.slice(-2);
        const ordersLastTwoMonths = ordersData.orders.last12Months.slice(-2);

        if (
          usersLastTwoMonths.length === 2 &&
          ordersLastTwoMonths.length === 2
        ) {
          const usersCurrentMonth = usersLastTwoMonths[1].count;
          const usersPreviousMonth = usersLastTwoMonths[0].count;
          const ordersCurrentMonth = ordersLastTwoMonths[1].count;
          const ordersPreviousMonth = ordersLastTwoMonths[0].count;

          const usersPercentChange = usersPreviousMonth !== 0 ?
            ((usersCurrentMonth - usersPreviousMonth) / usersPreviousMonth) *
            100 : 100;

          const ordersPercentChange = ordersPreviousMonth !== 0 ?
            ((ordersCurrentMonth - ordersPreviousMonth) / ordersPreviousMonth) *
            100 : 100;

          setuserComparePercentage({
            currentMonth: usersCurrentMonth,
            previousMonth: usersPreviousMonth,
            percentChange: usersPercentChange,
          });

          setOrdersComparePercentage({
            currentMonth: ordersCurrentMonth,
            previousMonth: ordersPreviousMonth,
            percentChange: ordersPercentChange,
          });
        }
      }
    }
  }, [isLoading, ordersLoading, data, ordersData]);

  const totalEarning = orderData?.data?.totalEarning + orderData?.data?.ownerEarning?.totalOwnerEarning || 0;
  const totalProfit = orderData?.data?.netBalance + orderData?.data?.ownerEarning?.totalOwnerEarning || 0;

  return (
    <div className="mt-[30px] min-h-screen">
      <div className="px-8 mt-[120px]">
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
              if (shortcut.value) {
                fetchAnalytics(shortcut?.value)
              };
            }}
          />
        </div>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-4 gap-[20px]">
          <div className="rounded-md bg-white shadow-sm p-5">
            <div className="flex flex-col justify-around h-[100%]">
              <div className="flex justify-between">
                <p className="text-2xl font-bold">
                  <CountUp end={(totalEarning)} suffix=" ฿" />
                </p>
                <GiMoneyStack size={50} className="text-gray-300" />
              </div>
              <p className=" text-md text-gray-500">
                Total Earn
              </p>
            </div>
          </div>
          <div className="rounded-md bg-white shadow-sm p-5">
            <div className="flex flex-col justify-around h-[100%]">
              <div className="flex justify-between">
                <p className="text-2xl font-bold">
                  <CountUp end={orderData?.data?.commission} suffix=" ฿" />
                </p>
                <GiReceiveMoney size={50} className="text-gray-300" />
              </div>
              <p className=" text-md text-gray-500">
                Commission
              </p>
            </div>
          </div>
          <div className="rounded-md bg-white shadow-sm p-5">
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
          <div className="rounded-md bg-white shadow-sm p-5">
            <div className="flex flex-col justify-around h-[100%]">
              <div className="flex justify-between">
                <p className="text-2xl font-bold">
                  <CountUp end={totalProfit} suffix=" ฿" />
                </p>
                <MdAccountBalanceWallet size={50} className="text-gray-300" />
              </div>
              <p className=" text-md text-gray-500">
                Total Profit
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-[75%,25%]">
        <div className="p-8 ">
          <h5 className="dark:text-[#fff] text-black text-[20px] font-[400] font-Poppins pb-3">
            Teacher Earnning
          </h5>
         <TeacherEarnningTable
             rows={orderData?.data?.teacherEarn}
             totalEarning={orderData?.data?.totalEarning}
             totalCommission={orderData?.data?.commission}
             total={orderData?.data?.netBalance}
          />
          <div className="mt-[40px]">
            <h5 className="dark:text-[#fff] text-black text-[20px] font-[400] font-Poppins pb-3">
              Owner Earnning
            </h5>
            <OwnerEarnningTable
              rows={orderData?.data?.ownerEarning?.ownerEarning}
              total={orderData?.data?.ownerEarning?.totalOwnerEarning}
            />
          </div>
          <UserAnalytics isDashboard={true} />
        </div>

        <div className="pt-[80px] pr-8">
          <div className="rounded-md bg-white shadow-sm p-5 w-full ">
            <div className="flex items-center p-5 justify-between">
              <div className="">
                <BiBorderLeft className="dark:text-[#45CBA0] text-[#000] text-[30px]" />
                <h5 className="pt-2 font-Poppins dark:text-[#fff] text-black text-[20px]">
                  {ordersComparePercentage?.currentMonth}
                </h5>
                <h5 className="py-2 font-Poppins dark:text-[#45CBA0] text-black text-[20px] font-[400]">
                  Sales Obtained
                </h5>
              </div>
              <div>
                <CircularProgressWithLabel value={
                  ordersComparePercentage?.percentChange > 0
                    ? 100
                    : 0
                } open={open} />
                <h5 className="text-center pt-4">
                  {
                    ordersComparePercentage?.percentChange > 0
                      ? "+" + ordersComparePercentage?.percentChange.toFixed(2)
                      : "-" + ordersComparePercentage?.percentChange.toFixed(2)
                  } %
                </h5>
              </div>
            </div>
          </div>

          <div className="w-full dark:bg-[#111C43] rounded-sm shadow my-8">
            <div className="ounded-md bg-white shadow-sm p-5 w-full  flex items-center justify-between">
              <div className="">
                <PiUsersFourLight className="dark:text-[#45CBA0] text-[#000] text-[30px]" />
                <h5 className="pt-2 font-Poppins dark:text-[#fff] text-black text-[20px]">
                  {userComparePercentage?.currentMonth}
                </h5>
                <h5 className="py-2 font-Poppins dark:text-[#45CBA0] text-black text-[20px] font-[400]">
                  New Users
                </h5>
              </div>
              <div>
                <CircularProgressWithLabel value={
                  userComparePercentage?.percentChange > 0
                    ? 100
                    : 0
                } open={open} />
                <h5 className="text-center pt-4">
                  {userComparePercentage?.percentChange > 0
                    ? "+" + userComparePercentage?.percentChange.toFixed(2)
                    : "-" + userComparePercentage?.percentChange.toFixed(2)} %
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-[65%,35%] mt-[-20px]">
        <div className="dark:bg-[#111c43] w-[94%] mt-[30px] h-[40vh] shadow-sm m-auto">
          <OrdersAnalytics isDashboard={true} />
        </div>
        <div className="p-5">
          <h5 className="dark:text-[#fff] text-black text-[20px] font-[400] font-Poppins pb-3">
            Recent Transactions
          </h5>
          <AllInvoices isDashboard={true} />
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;
