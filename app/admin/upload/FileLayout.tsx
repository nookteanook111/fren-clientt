"use client";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import FileManager from "./FileManager";

type Props = {};

const FileLayout = (props: any) => {
    return (
        <div>
            <AdminProtected>
                <Heading
                    title="Elearning - Admin"
                    description="ELearning is a platform for students to learn and get help from teachers"
                    keywords="Programming,MERN,Redux,Machine Learning"
                />
                <div className="flex h-screen">
                    <div className="1500px:w-[16%] w-1/5">
                        <AdminSidebar />
                    </div>
                    <div className="w-[85%]">
                        <DashboardHero />
                        <FileManager />
                    </div>
                </div>
            </AdminProtected>
        </div>
    );
};

export default FileLayout;
