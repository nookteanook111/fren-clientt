import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useTheme } from "next-themes";
import { useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import Loader from "../../Loader/Loader";
import { format } from "timeago.js";
import { useGetAllOrdersQuery, useGetAllOrdersTeacherQuery } from "@/redux/features/orders/ordersApi";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { AiOutlineMail } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa";
import { Button, Modal } from "flowbite-react";
import toast from "react-hot-toast";

type Props = {
  isDashboard?: boolean;
};

const AllInvoices = ({ isDashboard }: Props) => {
  const { theme, setTheme } = useTheme();
  const { isLoading, data } = useGetAllOrdersQuery({});
  const { data: usersData } = useGetAllUsersQuery({});
  const { data: coursesData } = useGetAllCoursesQuery({});
  const { data: ordersTeacher } = useGetAllOrdersTeacherQuery({});
  console.log("🚀 ~ AllInvoices ~ ordersTeacher:", ordersTeacher)
  const [openModal, setOpenModal] = useState(false);

  const [orderData, setOrderData] = useState<any>([]);
  const [modalContent, setModalContent] = useState({
    fullname: '',
    address: '',
    phone: ''
  });

  useEffect(() => {
    if (ordersTeacher) {
      const temp = ordersTeacher.orders.map((item: any) => {
        const user = usersData?.users.find(
          (user: any) => user._id === item.teacherId
        );
        const course = coursesData?.courses.find(
          (course: any) => course._id === item.courseId
        );
        return {
          ...item,
          userName: user?.name,
          userEmail: user?.email,
          title: course?.name,
          price: item?.totalPrice?.toLocaleString() + "฿",
        };
      });
      setOrderData(temp);
      console.log("🚀 ~ temp ~ temp:", temp)
    }
  }, [data, usersData, ordersTeacher]);

  const columns: any = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "userName", headerName: "Name", flex: isDashboard ? 0.6 : 0.5 },
    ...(isDashboard
      ? []
      : [
          { field: "userEmail", headerName: "Email", flex: 1 },
          { field: "title", headerName: "Course Title", flex: 1 },
          // {
          //   field: "     ",
          //   headerName: "Detail",
          //   flex: 0.25,
          //   renderCell: (params: any) => {
          //     return (
          //       <>
          //       {
          //         params.row.addressInfo && (
          //           <FaFileInvoice className="text-[22px] cursor-pointer" onClick={() => {
          //             setModalContent(params.row.addressInfo)
          //             setOpenModal(true)
          //           }}/>
          //         )
          //       }
          //       </>
          //     );
          //   },
          // },
        ]),
    { field: "price", headerName: "Price", flex: 0.5 },
    { field: "commission", headerName: "Commission", flex: 0.5 },
    { field: "commissionRate", headerName: "Commission Rate", flex: 0.5 },
    ...(isDashboard
      ? [{ field: "created_at", headerName: "Created At", flex: 0.5 }]
      : [
          // {
          //   field: " ",
          //   headerName: "Email",
          //   flex: 0.2,
          //   renderCell: (params: any) => {
          //     return (
          //       <a href={`mailto:${params.row.userEmail}`}>
          //         <AiOutlineMail
          //           className="dark:text-white text-black"
          //           size={20}
          //         />
          //       </a>
          //     );
          //   },
          // },
        ]),
  ];

  const rows: any = [];

  orderData &&
    orderData.forEach((item: any) => {
      rows.push({
        id: item._id,
        userName: item.userName,
        userEmail: item.userEmail,
        title: item.title,
        price: item.price,
        addressInfo: item.addressInfo ?? null,
        created_at: format(item.createdAt),
        commission: item.commission.toLocaleString() + "฿",
        commissionRate: item.commissionRate + '%',
      });
    });
    console.log("🚀 ~ AllInvoices ~ orderData:", orderData)
  return (
    <div className={!isDashboard ? "mt-[120px]" : "mt-[0px]"}>
      {isLoading ? (
        <Loader />
      ) : (
        <Box m={isDashboard ? "0" : "40px"}>
          <Box
            m={isDashboard ? "0" : "40px 0 0 0"}
            height={isDashboard ? "35vh" : "90vh"}
            overflow={"hidden"}
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                outline: "none",
              },
              "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-sortIcon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-row": {
                color: theme === "dark" ? "#fff" : "#000",
                borderBottom:
                  theme === "dark"
                    ? "1px solid #ffffff30!important"
                    : "1px solid #ccc!important",
              },
              "& .MuiTablePagination-root": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none!important",
              },
              "& .name-column--cell": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
                borderBottom: "none",
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: theme === "dark" ? "#1F2A40" : "#F2F0F0",
              },
              "& .MuiDataGrid-footerContainer": {
                color: theme === "dark" ? "#fff" : "#000",
                borderTop: "none",
                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
              },
              "& .MuiCheckbox-root": {
                color:
                  theme === "dark" ? `#b7ebde !important` : `#000 !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `#fff !important`,
              },
            }}
          >
            <DataGrid
              checkboxSelection={isDashboard ? false : true}
              rows={rows}
              columns={columns}
              // components={isDashboard ? {} : { Toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      )}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>รายละเอียด</Modal.Header>
        <Modal.Body className="text-black">
         <p><span className="text-gray-500">ชื่อ</span>  {modalContent.fullname}</p>
         <p><span className="text-gray-500">ที่อยู่</span>  {modalContent.address}</p>
         <p><span className="text-gray-500">เบอร์โทรศัพท์</span>  {modalContent.phone}</p>
        <div className="mt-5">
          <Button color="light" onClick={()=>{
           navigator.clipboard.writeText(`
           ชื่อ ${modalContent.fullname}\n
           ที่อยู่ ${modalContent.address}\n
           เบอร์โทรศัพท์ ${modalContent.phone}\n
           `)
           toast.success('คัดลอกสำเร็จ')
          }
        }
          >Copy</Button>
        </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};


export default AllInvoices;
