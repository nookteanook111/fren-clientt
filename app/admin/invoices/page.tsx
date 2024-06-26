'use client'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from '../../../app/utils/Heading';
import DashboardHeader from '../../../app/components/Admin/DashboardHeader';
import AllInvoices from "../../../app/components/Admin/Order/AllInvoices";
import { useSelector } from 'react-redux';
import AllInvoicesTeacher from '@/app/components/Admin/Order/AllInvoicesTeacher';

type Props = {}

const page = (props: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <div>
        <Heading
         title="Elearning - Admin"
         description="ELearning is a platform for students to learn and get help from teachers"
         keywords="Prograaming,MERN,Redux,Machine Learning"
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
               <DashboardHeader />
               {
                  user?.role === 'admin' ? <AllInvoices /> : <AllInvoicesTeacher />

               }              
            </div>
        </div>
    </div>
  )
}

export default page