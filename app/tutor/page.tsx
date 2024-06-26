"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tutor from "./Tutor";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(2);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title={"เกี่ยวกับเรา - Elearning"}
        description={"Elearning is a programming community."}
        keywords={
          "programming community, coding skills, expert insights, collaboration, growth"
        }
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Tutor />
      <Footer />
    </div>
  );
};

export default Page;
