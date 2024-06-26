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
    dataList?: any;
    columnsList?: any;
};

const DataTable = ({ dataList = [],  columnsList = []}: Props) => {
    const { theme, setTheme } = useTheme();
    const [orderData, setOrderData] = useState<any>([]);

    useEffect(() => {
        setOrderData(dataList.map((item: any) => ({id: item._id, ...item})) || []);
    }, [dataList]);

    return (
        <Box>
            <Box                               
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
                    autoHeight
                    rows={orderData}
                    columns={columnsList}
                />
            </Box>
        </Box>
    );
};

export default DataTable;
