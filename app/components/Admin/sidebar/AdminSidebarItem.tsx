"use client";
import { FC, useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import {
    HomeOutlinedIcon,
    ArrowForwardIosIcon,
    ArrowBackIosIcon,
    PeopleOutlinedIcon,
    ReceiptOutlinedIcon,
    BarChartOutlinedIcon,
    MapOutlinedIcon,
    GroupsIcon,
    OndemandVideoIcon,
    VideoCallIcon,
    WebIcon,
    QuizIcon,
    WysiwygIcon,
    ManageHistoryIcon,
    SettingsIcon,
    ExitToAppIcon,
    DifferenceIcon,
    InsertDriveFileIcon,
} from "./Icon";
import avatarDefault from "../../../../public/assests/avatar.png";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { AiFillFileAdd } from "react-icons/ai";
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import ArticleIcon from '@mui/icons-material/Article';
import { RiVideoUploadLine } from "react-icons/ri";

interface itemProps {
    title: string;
    to: string;
    icon: JSX.Element;
    selected: string;
    setSelected: any;
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
    return (
        <MenuItem
            active={selected === title}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography className="!text-[16px] !font-Poppins">{title}</Typography>
            <Link href={to} />
        </MenuItem>
    );
};


const AdminSidebarItem = ({
    selected,
    setSelected,
    isCollapsed,
    logoutHandler,
}: {
    selected: string;
    setSelected: any;
    isCollapsed: boolean;
    logoutHandler: () => void;
}) => {
    return (
        <Box>
            <Item
                title="Dashboard"
                to="/admin"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 25px" }}
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
            >
                {!isCollapsed && "Data"}
            </Typography>
            <Item
                title="Users"
                to="/admin/users"
                icon={<GroupsIcon />}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title="Invoices"
                to="/admin/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
                variant="h5"
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                sx={{ m: "15px 0 5px 20px" }}
            >
                {!isCollapsed && "Content"}
            </Typography>
            <Item
                title="Create Course"
                to="/admin/create-course"
                icon={<VideoCallIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Live Courses"
                to="/admin/courses"
                icon={<OndemandVideoIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Create Ebook"
                to="/admin/create-ebook"
                icon={<DifferenceIcon />}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title="Live Ebook"
                to="/admin/ebook"
                icon={<InsertDriveFileIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Create Blog"
                to="/admin/create-blog"
                icon={<ArtTrackIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Live Blog"
                to="/admin/blogs"
                icon={<ArticleIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Upload Video"
                to="/admin/upload"
                icon={<RiVideoUploadLine size={25} />}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
                variant="h5"
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                sx={{ m: "15px 0 5px 20px" }}
            >
                {!isCollapsed && "Customization"}
            </Typography>
            <Item
                title="Hero"
                to="/admin/hero"
                icon={<WebIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="FAQ"
                to="/admin/faq"
                icon={<QuizIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Categories"
                to="/admin/categories"
                icon={<WysiwygIcon />}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
                variant="h5"
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                sx={{ m: "15px 0 5px 20px" }}
            >
                {!isCollapsed && "Controllers"}
            </Typography>
            <Item
                title="Manage Team"
                to="/admin/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
                variant="h6"
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                sx={{ m: "15px 0 5px 20px" }}
            >
                {!isCollapsed && "Analytics"}
            </Typography>
            <Item
                title="Courses Analytics"
                to="/admin/courses-analytics"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Orders Analytics"
                to="/admin/orders-analytics"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title="Users Analytics"
                to="/admin/users-analytics"
                icon={<ManageHistoryIcon />}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
                variant="h6"
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                sx={{ m: "15px 0 5px 20px" }}
            >
                {!isCollapsed && "Extras"}
            </Typography>
            <div onClick={logoutHandler}>
                <Item
                    title="Logout"
                    to="/"
                    icon={<ExitToAppIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
            </div>
        </Box>
    );
}

export default AdminSidebarItem