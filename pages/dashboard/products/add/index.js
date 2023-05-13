import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { v4 } from "uuid";

//component
import DashboardLayout from "@/layout/DashboardLayout";

//media
import logout_Icon from "@/assets/common/logoutIconRed.svg";
import search_Icon from "@/assets/common/SearchRedIcon.svg";
import Search2_Icon from "@/assets/common/search-icon.svg";

import filter_Icon from "@/assets/common/filterIcon.svg";
import petBig_Icon from "@/assets/common/petBigIcon.svg";
import searchPlus_Icon from "@/assets/common/search-zoom-in.svg";
import StarGold_Icon from "@/assets/common/startGold.svg";
import StarEmpty_Icon from "@/assets/common/starEmpty.svg";

import boxRed_Icon from "@/assets/common/box-addIconRed.svg";
import boxWhite_Icon from "@/assets/common/box-addWhiteIcon.svg";
import product_Image from "@/assets/common/ProductPic1.svg";
import DownArrow_Icon from "@/assets/common/downArrow.svg";
import Sort_Icon from "@/assets/common/sortIcon.svg";
import leftArrow_Icon from "@/assets/common/leftArrowWhite.svg";
import more_Icon from "@/assets/common/more.svg";
import TrashRed_Icon from "@/assets/common/TrashIconRed.svg";
import CloseButton_Icon from "@/assets/common/close-button.svg";
import Edit2_Icon from "@/assets/common/EditIcon2.svg";
import addProduct_Icon from "@/assets/common/shop-addPrimaryIcon.svg";
import PetShopProducts from "@/components/dashboard/petShopProducts";
import PetemoonProducts from "@/components/dashboard/PetemoonProducts";

//for open & close filterBox in desktop
//it's defined out of main component, for prevent re-render other components
// const FilterBoxDialog = ({
//   brand,
//   petKind,
//   setFilterPageOpen,
//   setMainPageOpen,
// }) => {
//   const [FilterBoxOpen, setFilterBoxOpen] = useState(false);
//   return (
//     <div
//       className={clsx("lg:w-[300px] lg:bg-white rounded-t-[25px] relative", {
//         "rounded-b-[25px]": FilterBoxOpen == false,
//       })}
//     >
//       <div className="flex justify-between items-center lg:px-6 py-2">
//         <div
//           className="flex items-center cursor-pointer lg:cursor-auto"
//           onClick={() => {
//             setFilterPageOpen(true);
//             setMainPageOpen(false);
//           }}
//         >
//           <Image src={filter_Icon} alt="FilterIcon" />
//           <p className="text-xl lg:text-base text-black font-medium leading-7 mr-2">
//             فیلترها
//           </p>
//         </div>
//         <Image
//           src={DownArrow_Icon}
//           alt="DownArrowIcon"
//           onClick={() => setFilterBoxOpen(!FilterBoxOpen)}
//           className={clsx(`hidden lg:block cursor-pointer`, {
//             "rotate-0": FilterBoxOpen == false,
//             "rotate-180": FilterBoxOpen == true,
//           })}
//         />
//       </div>
//       <div
//         className={clsx(
//           "hidden w-full px-6 py-2 bg-white absolute z-20 rounded-b-[25px]",
//           {
//             "lg:block": FilterBoxOpen == true,
//           }
//         )}
//       >
//         <div className="flex flex-col items-stretch">
//           <p className="text-base text-black font-medium leading-7 ">برند</p>
//           <div>
//             {brand.map((item, index) => (
//               <div key={v4()} className="flex items-center">
//                 <input
//                   id={`brand${index}`}
//                   type="checkbox"
//                   className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
//                 />
//                 <label htmlFor={`brand${index}`} className="mr-2 ">
//                   <bdi>{item.name}</bdi>
//                 </label>
//               </div>
//             ))}
//           </div>
//           <label className="text-base text-black font-medium leading-7 mt-6">
//             بازه قیمتی
//           </label>
//           <div className="w-full flex justify-between text-xs px-2">
//             <span>0</span>
//             <span></span>
//             <span></span>
//             <span></span>
//             <span>2500</span>
//           </div>
//           <style jsx>{``}</style>
//           <input className="" type="range" min="1" max="100" step="1" />
//           <p className="text-base text-black font-medium leading-7 mt-6">
//             نوع پت
//           </p>
//           <div>
//             {petKind.map((item, index) => (
//               <div key={v4()} className="flex items-center">
//                 <input
//                   id={`kind${index}`}
//                   type="checkbox"
//                   className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
//                 />
//                 <label htmlFor={`kind${index}`} className="mr-2">
//                   {item}
//                 </label>
//               </div>
//             ))}
//           </div>
//           <p
//             onClick={() => setFilterBoxOpen(false)}
//             className="self-end text-base text-gray-400 font-medium leading-7 mt-5 cursor-pointer"
//           >
//             حذف فیلترها
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

const add = () => {
  const [data, setData] = useState([
    {
      title: "غذای سگ خشک 700 گرمی",
      Image: product_Image,
      code: "#750GH",
      price: 75000,
      availabilityAmount: 60,
      group: "دسته خوراکی",
      score: 4,
    },
    {
      title: "غذای سگ خشک 700 گرمی",
      Image: product_Image,
      code: "#750GH",
      price: 75000,
      availabilityAmount: 60,
      group: "دسته خوراکی",
      score: 3,
    },
    {
      title: "غذای سگ خشک 700 گرمی",
      Image: product_Image,
      code: "#750GH",
      price: 75000,
      availabilityAmount: 60,
      group: "دسته خوراکی",
      score: 5,
    },
    {
      title: "غذای سگ خشک 700 گرمی",
      Image: product_Image,
      code: "#750GH",
      price: 75000,
      availabilityAmount: 60,
      group: "دسته خوراکی",
      score: 2,
    },
    {
      title: "غذای سگ خشک 700 گرمی",
      Image: product_Image,
      code: "#750GH",
      price: 75000,
      availabilityAmount: 0,
      group: "دسته خوراکی",
      score: 1,
    },
  ]);
  const brand = [
    { name: "پت بازار", id: "petBazzar" },
    { name: "پت شاپ۱", id: "petShop1" },
    { name: "پت ایران", id: "petIran" },
    { name: "تهران پت", id: "tehranPet" },
    { name: "کافه پت", id: "petCafe" },
  ];
  const petKind = ["سگ خانگی", "سگ شکارچی", "سگ وحشی", "سگ گله", "سگ نگهبان"];
  const [FilterBoxOpen, setFilterBoxOpen] = useState(false);

  // for showing stars
  const starsBoxHandler = (stars) => {
    const starsBox = [];
    for (let i = 0; i < stars; i++) {
      starsBox.push(<Image src={StarGold_Icon} alt="GoldenStarIcon" />);
    }
    for (let i = 0; i < 5 - stars; i++) {
      starsBox.push(<Image src={StarEmpty_Icon} alt="EmptyStarIcon" />);
    }
    return starsBox;
  };

  //Dynamic
  const [MainPageOpen, setMainPageOpen] = useState(true); //for open & close Main Page in mobile
  const [FilterPageOpen, setFilterPageOpen] = useState(false); //for open & close filter Page in mobile
  const [SortPageOpen, setSortPageOpen] = useState(false); //for open & close Sort Page in mobile
  return <PetemoonProducts />;
};

export default add;
