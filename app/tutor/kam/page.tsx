"use client";
import React, { useState } from "react";
import Heading from "@/app/utils/Heading";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Kam from "./Kam";

type Props = {};

const Page = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(2);
    const [route, setRoute] = useState("Login");

    return (
        <div>
            <Heading
                title={"ครูพีเเก้ม - Elearning"}
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
            <Kam />
            <Footer />
        </div>
    );
};

export default Page;
