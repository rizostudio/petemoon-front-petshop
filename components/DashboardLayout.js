import React,{useState} from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx'; //for dynamic style
import {v4} from 'uuid';// for produce unique key

//component
import BottomNavigation from './common/BottomNavigation';

//media
import Home_Icon from '../assets/common/home.svg';
import Profile_Icon from '../assets/common/user-edit.svg';
import Address_Icon from '../assets/common/location.svg';
import MyPet_Icon from '../assets/common/pet.svg';
import Wallet_Icon from '../assets/common/empty-wallet.svg';
import Orders_Icon from '../assets/common/shopping-bag.svg';
import Favorite_Icon from '../assets/common/like.svg';
import Message_Icon from '../assets/common/sms.svg';
import Help_Icon from '../assets/common/alarm.svg';
import Search_Icon from '../assets/common/search-icon.svg'
import ArrowLeft_Icon from '../assets/common/arrow-left.svg';
import ArrowLeftWhite_Icon from '../assets/common/leftArrowWhite.svg'
import Profile_Alt_Pic from '../assets/common/profile-pic-alt.svg';
import Logout_Btn from '../assets/common/logout-btn.svg';
import Petemoon_Logo from '../assets/common/Petemoon.svg';
import Userpanel_Logo from '../assets/common/user-panel.svg';
import SellerPanel_Logo from '../assets/common/SellerPanelLogo.svg';
import ShopBag_Icon from '../assets/common/bagHeader.svg';
import ShopWhite_Icon from '../assets/common/shop2white.svg';
import OrdersWhite_Icon from '../assets/common/shopping-cartWhite.svg';


const DashboardLayout = ({children}) => {
    const [openly,setOpenly] = useState(true); //for open and close dashboard in mobile
    const router = useRouter()
    const [Minify, setMinify] = useState(false); // for minify dashboard
    const openHandler = () => {
        setOpenly(true)
    }
    //dashboard menu
    const menuArr = [   {id:"home", name:"داشبورد", icon:Home_Icon},
                        {id:"products", name:"محصولات", icon:ShopWhite_Icon,notification:0},
                        {id:"orders", name:"سفارش های من", icon:OrdersWhite_Icon},
                        {id:"wallet", name:"کیف پول", icon:Wallet_Icon},
                        {id:"my-messages", name:"پیام های من", icon:Message_Icon, notification:10},
                        {id:"support", name:"پشتیبانی", icon:Help_Icon},
                    ]
    const pageName = menuArr.find(item => router.asPath.includes(item.id)) // for showing the title of page in mobile
    return (
        <div className='w-full h-screen flex flex-row justify-between items-stretch relative'>
            {/* Drawer */}
            <div id="Drawer" className='h-screen w-auto overflow-y-scroll scrollbar hidden lg:flex flex-col justify-between items-stretch py-10 bg-fourth lg:bg-[#313131]'>
                {/* LogoBox  */}
                <div className='flex justify-center h-full w-full px-12'>
                    <Image 
                        src={SellerPanel_Logo} 
                        alt="SellerPanelLogo" 
                        className='w-10 ml-3'
                    />
                    <Image 
                        src={Petemoon_Logo} 
                        alt="PetemoonLogo" 
                        className={clsx("w-40",{
                            'block' : Minify == false,
                            'hidden' : Minify == true
                        })}
                    />
                </div>
                {/* Store Credit */}
                <div className={clsx('flex-col mx-10 my-1 border-b-[1px] border-[#eeeeee26] py-3',{
                    'flex' : Minify == false,
                    'hidden' : Minify == true
                })}>
                    <h3 className='text-lg text-white font-bold leading-8'><bdi>اعتبار فروشگاه:</bdi></h3>
                    <p className='text-xl text-warning font-extrabold leading-9 self-end mt-1 after:content-["تومان"] after:text-sm after:mr-1'><bdi>{(2200300).toLocaleString()}</bdi></p>
                </div>
                {/* menu */}
                <ul className='w-full h-full'>
                    {menuArr.map(item => 
                        <li 
                            key={v4()}  
                            className={clsx("border-b-[1px] border-silver solid lg:border-[#eeeeee26] lg:my-0 lg:mx-9 py-4 px-8 lg:px-0",{
                                ""  : Minify == false , 
                                "lg:border-none" : Minify == true
                            })}
                        >
                            <Link 
                                href={`/dashboard/${item.id}`} 
                                onClick={openHandler}
                                className={clsx('flex justify-between items-center w-full',{
                                    "flex-row" :  Minify == false ,
                                                            "flex-row lg:flex-col" : Minify == true 
                                                        })}
                            >
                                <div className='flex flex-row items-stretch relative'>
                                    <Image 
                                        src={item.icon} 
                                        alt={item.name} 
                                        width='20' 
                                        height='20' 
                                        className={clsx('',{

                                        })}
                                    />
                                    <h3 className={clsx('text-base text-black lg:text-secondary font-bold w-full mr-3',{
                                        'block' : Minify == false , 
                                        'lg:hidden' : Minify == true                                       
                                        })}
                                    >{item.name}</h3>
                                </div>
                                {/* showing notification numbers for each section */}
                                {item.notification > 0 && 
                                    <p className={clsx('absolute left-20 lg:relative lg:left-0 text-white text-center text-xs bg-primary px-[5px] py-[3px] rounded-[5px]',{
                                        'lg:block' : Minify == false , 
                                        'lg:hidden' : Minify == true
                                        })}
                                    >{item.notification}</p>
                                }
                                <Image 
                                    src={ArrowLeft_Icon} 
                                    alt="ArrowLeftIcon" 
                                    className="lg:hidden"
                                    />
                            </Link>
                        </li>
                    )}
                </ul>
                <div className='w-full h-full flex flex-col justify-center items-stretch mt-5'>
                    {/* user information */}
                    <div className={clsx('flex-col mr-10', {
                        'flex' : Minify == false,
                        'hidden' : Minify == true
                    })}>
                        <p className='text-base text-white text-right font-black'>علی حسینی نسب</p>
                        <p className='text-base text-gray-400 text-right font-medium'>۰۹۳۰۱۲۳۴۵۶۷</p>
                    </div>
                    {/* logout */}
                    <div 
                        className={clsx("flex justify-between items-center self-center w-3/4 mx-auto mt-2 py-2 rounded-[12px]",{
                            'bg-[#3A4750] px-4 py-2 mx-10'   : Minify == false,
                            'bg-transparent flex-col p-0 mx-0' : Minify == true
                        })}
                    >
                        <p 
                            className={clsx('text-base text-white font-medium leading-7 ml-3',{
                                'block' : Minify == false,
                                'hidden' : Minify == true
                            })}
                        >خروج از حساب</p>
                        <Image 
                            src={Logout_Btn} 
                            alt="LogOutBtn" 
                            width="20" 
                            height="20"
                        />
                    </div>
                </div>
            </div>
            {/* main box */}
            <div 
                className={clsx('lg:flex flex-col justify-between items-stretch w-full h-full bg-fourth',{
                'hidden' : openly == false ,
                'flex' : openly == true 
                })}
            >
                <div className='w-full h-[140px] bg-white hidden lg:flex flex-row justify-between items-center px-12 py-5 relative'>
                        {/* for minify dashboard in desktop */}
                        <Image 
                            src={ArrowLeft_Icon} 
                            alt="ArrowLeftIcon" 
                            onClick={() => setMinify(!Minify)} 
                            className={clsx('bg-[#eee] p-3 rounded-full w-10 h-10 absolute top-[25%] right-[-2%] rotate-180',{
                                'rotate-0' :  Minify == true
                            })} 
                        />

                        <div className='flex flex-col'>
                            <p className="text-2xl text-black font-black leading-10">خوش آمدی، علی عزیز</p>
                            <p className='text-base text-black font-light opacity-[0.9] leading-7'>۰۹۳۰۱۲۳۴۵۶۷</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <div className='flex flex-row h-12 px-5 bg-[#eee] rounded-[10px]'>
                                <Image 
                                    src={Search_Icon} 
                                    alt="SearchIcon" 
                                    className='invert'
                                />
                                <input 
                                    type="text" 
                                    placeholder="جستجو" 
                                    className='text-base text-right text-black opacity-[0.8] font-bold p-2 w-full border-none bg-transparent peer-focus:border-none'
                                />
                            </div>
                            <div className='w-0.5 h-10 bg-[#3A4750] opacity-50 mx-2.5 rounded-[5px]'></div>
                            <button className='text-base text-white font-bold leading-7 px-10 py-2.5 bg-primary rounded-[15px]'><bdi>افزودن محصول</bdi></button>
                        </div>
                </div>
                <div className=' w-full h-screen overflow-y-scroll p-10 pb-[100px] lg:px-20 lg:py-12 '>
                    {/* for showing page title and return to home */}
                    {/* {pageName && 
                        <div className='w-full flex lg:hidden flex-row justify-between items-center mb-10'>
                            <p className='text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]'>{pageName.name}</p>
                            <Link 
                                href='/dashboard/home' 
                                onClick={() => setOpenly(false)} 
                                className='bg-primary opacity-[0.8] p-4 rounded-[15px]'
                            >
                                <Image 
                                    src={ArrowLeftWhite_Icon} 
                                    alt="ArrowIcon" 
                                    className='w-full'
                                />
                            </Link>
                        </div>
                    } */}

                    {children}
                </div>
            </div>
            <BottomNavigation/>
        </div>
    );
};
export default DashboardLayout;