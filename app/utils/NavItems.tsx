import Link from "next/link";
import React, { useState } from "react";
import { ListGroup } from "flowbite-react";
import { GoChevronDown } from "react-icons/go";
import { useRouter, usePathname } from "next/navigation";
export const navItemsData = [
  {
    name: "หน้าแรก",
    url: "/",
  },
  {
    name: "คอร์สออนไลน์",
    url: "/courses",
    subMenu: [
      {
        name: "คอร์สเรียน ม.ต้น",
        url: "/courses?title=คอร์ส ม.ต้น",
        supersubMenu: [
          {
            name: "คอร์สเรียน ม.ต้น(แยกบท)",
            url: "/courses"
          },
          {
            name: "คอร์สเรียน ม.ต้น(Package)",
            url: "/courses"
          }
        ]
      },
      {
        name: "คอร์สเรียน ม.ปลาย",
        url: "/courses?title=คอร์ส ม.ปลาย",
        supersubMenu: [
          {
            name: "คอร์สเรียน ม.ปลาย(แยกบท)",
            url: "/courses"
          },
          {
            name: "คอร์สเรียน ม.ปลาย(Package)",
            url: "/courses"
          }
        ]
      },
      {
        name: "คอร์ส Package",
        url: "/courses?title=คอร์ส Package",
      },
      {
        name: "คอร์สเตรียมสอบ NETSAT",
        url: "/courses?title=คอร์สเตรียมสอบ NETSAT",
      },
      {
        name: "คอร์สเตรียม A-level",
        url: "/courses?title=คอร์สเตรียมสอบ A-Level",
      },
      {
        name: "คอร์สเตรียมสอบ ก.พ.",
        url: "/courses?title=คอร์สเตรียมสอบ",
      },
      {
        name: "คอร์สเตรียมสอบครูผู้ช่วย",
        url: "/courses?title=คอร์สเตรียมสอบ",
      },
      {
        name: "คอร์สเตรียมสอบนายสิบ",
        url: "/courses?title=คอร์สเตรียมสอบ",
      },
    ]
  },
  {
    name: "ห้องเรียนฟรี",
    url: "/courses?title=คอร์สเรียนฟรี",
  },
  {
    name: "Ebook",
    url: "/ebook",
  },
  {
    name: "คลังข้อสอบ",
    url: "https://extramaths.net/blog/%E0%B8%84%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%93%E0%B8%B4%E0%B8%95%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C?fbclid=IwZXh0bgNhZW0CMTAAAR3Uld_wY6gIx2vUuqOdCqaiUM_ypAlVRk7L5SofzwKzKj9iIIaZ_ksxBUI_aem_AceXYVGTmzrQJBgTEGP_eq5Ze40KB60-6qLnfdZtRJfUqRF3sojkidvRvXspV5aAPkRyjbI4fG7V7u3tM-9QrqHX",
  },
  {
    name: "เกี่ยวกับเรา",
    url: "/about"
  },

  // {
  //   name: "Contact",
  //   url: "/"
  // },
];

const navItemDataMobile = navItemsData.filter((item) => ['หน้าแรก', 'คอร์สออนไลน์', 'Ebook' ].includes(item.name));

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [active, setActive] = useState('');
  const router = useRouter()
  const pathname = usePathname()

  const resetActive = () => {
    setActive('')
  }
  const hightlightMenu = 'เข้าสู่ห้องเรียน'

  return (
    <>
      <div className="hidden 800px:flex">
        {navItemsData &&
          navItemsData.map((item, index) => {
            if (item.subMenu?.length) {
              return <div className="relative"
              >
                <span
                  className={`${pathname === item.url
                    ? ""
                    : "dark:text-white text-black"
                    } text-[16px] px-6 font-[400] cursor-pointer flex items-center justify-center gap-1 `}
                  onMouseOver={() => setActive(item.name)}
                >
                  <div>{item.name}</div>
                  <GoChevronDown />
                </span>
                <div onMouseLeave={resetActive} className={`flex text-black dark:text-white justify-center absolute z-10 top-[28px] min-w-[143px] transition  ease-out ${active === item.name ? 'visible' : 'hidden'}`}>
                  <ListGroup className="w-48">
                    {
                      item.subMenu.map((subItem, subIndex) => {
                        return <ListGroup.Item onClick={() => router.push(subItem.url)} key={`sub-${subIndex}`}>
                          {subItem.name}
                        </ListGroup.Item>
                      })
                    }
                  </ListGroup>
                </div>
              </div>
            }

            return <Link href={`${item.url}`} key={index} passHref>
              <span
                onMouseOver={resetActive}
                className={`${pathname === item.url
                  ? "text-white bg-primary rounded-md dark:text-white"
                  : "dark:text-white text-black"
                  } text-[16px] px-4 py-2 font-[400] hover:bg-primary hover:text-white hover:px-4 hover:py-2 hover:rounded-md ${item.name === hightlightMenu ? 'border-solid border-2 border-red-300 py-1 rounded-md' : null} `}
              >
                {item.name}
              </span>
            </Link>
          })}
      </div>
      {isMobile && (
        <div className="800px:hidden mt-5 pb-3">
          <div className="w-full text-center py-6">
            <Link href={"/"} passHref>
              <span
                className={`text-[25px] font-[500] text-black dark:text-white`}
              >ELearning</span>
            </Link>
          </div>
          {navItemsData &&
            navItemsData.map((item, index) => {

              if (item.subMenu?.length) {
                return <div className="relative"
                >
                  <span
                    className={`${pathname === item.url
                      ? "text-black font-bold"
                      : "dark:text-white text-black"
                      } text-[16px] px-6 font-[400] cursor-pointer flex justify-left gap-1 py-5 w-[95%]`}
                    onMouseOver={() => setActive(item.name)}
                  >
                    <div>{item.name}</div>
                    <GoChevronDown />
                  </span>
                  <div onMouseLeave={resetActive} className={`flex justify-left px-8 py-2 z-10 top-[28px] min-w-[143px] transition  ease-out ${active === item.name ? 'visible' : 'hidden'}`}>
                    <ul>
                      {
                        item.subMenu.map((subItem, subIndex) => {
                          return <li onClick={() => router.push(subItem.url)} key={`sub-${subIndex}`} className="py-2">
                            <span className="text-[8px] pr-2 text-black dark:text-white"></span> {subItem.name}
                            <hr />
                          </li>
                        })
                      }
                    </ul>
                  </div>
                </div>
              }

              return (
                <Link onMouseOver={resetActive} href={`${item.url}`} passHref key={index}>
                  <span
                    className={`${pathname === item.url
                      ? "text-primary dark:text-primary font-bold"
                      : "dark:text-white text-black"
                      } block py-5 text-[16px] px-6 font-[400] ${item.name === hightlightMenu ? 'border-solid border-2 border-red-300 py-1 rounded-md' : null}`}
                  >
                    {item.name}
                  </span>
                </Link>
              )
            }
            )}
        </div>
      )}
    </>
  );
};

export default NavItems;