"use client";
import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardWidgetsAdmin from "./Widgets/DashboardWidgetsAdmin";
import { useSelector } from "react-redux";
import DashboardWidgetsTeacher from "./Widgets/DashboardWidgetsTeacher";

type Props = {
  isDashboard?: boolean;
};

const DashboardHero = ({ isDashboard }: Props) => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div>
      <DashboardHeader open={open} setOpen={setOpen} />
      {
        isDashboard && (
          <>
            {
              user?.role === 'admin' ? <DashboardWidgetsAdmin open={open} /> : <DashboardWidgetsTeacher open={open}/>
            }
          </>
        )
      }
    </div>
  );
};

export default DashboardHero;
