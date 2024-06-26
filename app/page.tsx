import Home from "./components/HomeNew/Home";

export const metadata = {
  title: "extramaths คณิตครูอ๋อ",
  description:
  "คอร์สเรียนคณิตศาสตร์ออนไลน์ ม.ต้น ม.ปลาย | extramaths.net",
  keywords:
    "ONLINE,course,study,ระบบเรียนออนไลน์,ทำคอร์สเรียนออนไลน์ ทำระบบการเรียนออนไลน์ ทำกราฟฟิก ตัดต่อวีดีโอ เเละดูเเลการยิงโฆษณา ",
  openGraph: {
    title: "extramaths ",
    description: "คอร์สเรียนคณิตศาสตร์ออนไลน์ ม.ต้น ม.ปลาย | extramaths.net",
    url: "https://www.extramaths.net",

    siteName: "extramaths",
    images: [
      {
        url: "https://res.cloudinary.com/de6lgysk2/image/upload/v1717065215/logo-tab_j5odyt.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "th-TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "extramaths คณิตครูอ๋อ",
    description:
      "คอร์สเรียนคณิตศาสตร์ออนไลน์ ม.ต้น ม.ปลาย | extramaths.net",
    images: [
      "https://res.cloudinary.com/de6lgysk2/image/upload/v1717065215/logo-tab_j5odyt.png",
    ],
  },
};

export const revalidate = 180;

// http://localhost:8000/api/v1/get-layout/Banner
const Page = async () => {
  console.log("porcess env =>", process.env.NEXT_PUBLIC_SERVER_URI);

  const pmBanner = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Banner`,
    {}
  );
  const pmCategory = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Categories`,
    {}
  );
  const [resBanner, resCategory] = await Promise.all([pmBanner, pmCategory]);
  const banner = await resBanner.json();
  const category = await resCategory.json();

  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || [],
  };

  return <Home webInfo={webInfo} />;
};

export default Page;
