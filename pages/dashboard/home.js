import React,{useState} from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { v4 } from 'uuid';
//component
import DashboardLayout from '../../components/DashboardLayout';
//media
import BagTick_Icon from '../../assets/common/bag-tick2.svg';
import CartTotal_Icon from '../../assets/common/card-receive2.svg';
import search_Icon from '../../assets/common/searchIcon3.svg';
import logout_Icon from '../../assets/common/logoutIconRed.svg';
import shop_Icon from '../../assets/common/shopIcon3.svg';
import message_Icon from '../../assets/common/messageIcon3.svg';
const Home = () => {
    const [data,setData] = useState([
            {month:"فروردین", sumIncome:"57600500", sumSaleAmount:"7654",
            salesDetail:[
                {date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"},
                {date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"},
                {date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"},
                {date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"}]
            },
            {month:"اردیبهشت", sumIncome:"57600500", sumSaleAmount:"7654",salesDetail:[{date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"}]},
            {month:"خرداد", sumIncome:"57600500", sumSaleAmount:"7654",salesDetail:[{date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"}]},
            {month:"تیر", sumIncome:"57600500", sumSaleAmount:"7654",salesDetail:[
                {date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"},
                {date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"},
                {date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"},
                {date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"}]
            },,
            {month:"مرداد",sumIncome:"", sumSaleAmount:"",salesDetail:[]},
            {month:"شهریور",sumIncome:"", sumSaleAmount:"",salesDetail:[]},
            {month:"مهر",sumIncome:"", sumSaleAmount:"",salesDetail:[]},
            {month:"آبان",sumIncome:"", sumSaleAmount:"",salesDetail:[]},
            {month:"آذر", sumIncome:"", sumSaleAmount:"",salesDetail:[]},
            {month:"دی", sumIncome:"57600500", sumSaleAmount:"7654",salesDetail:[
                {date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"},
                {date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"},
                {date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"},
                {date:"۰۸/۱۰/۱۴۰۱", sumSale:220000, benefit:125000, checkoutDate:"۱۸ آبان ۱۴۰۱", checkoutStatus:"تسویه شده"}]
            },
            {month:"بهمن", sumIncome:"", sumSaleAmount:"",salesDetail:[]},
            {month:"اسفند", sumIncome:"", sumSaleAmount:"",salesDetail:[]},
    ])
    const months = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]
    const years = []
    for(let i=1390; i <= 1403; i++) {
        years.push(i)
    }    
    // for select the date
    const [monthSelected,setMonthSelected] = useState("فروردین")
    const [yearSelected,setYearSelected] = useState(1401)
    const dataSelected = data.filter(item => item.month == monthSelected)[0]

    // for open and close the box
    const [dateShowBox,setDateShowBox] = useState(true)
    const [monthselectorBox,setMonthSelectorBox] = useState(false)
    const [yearselectorBox,setYearSelectorBox] = useState(false)

    return (
        <DashboardLayout>
            <div className='h-screen lg:h-full flex flex-col items-stretch'>
                {/* Heading for mobile  */}
                <div className='lg:hidden flex items-center'>
                    <div className='flex h-12 w-full px-5 py-3 bg-[#F2CDC8] rounded-[15px]'>
                        <input                             
                            type="text" 
                            placeholder="جستجوی محصول، فروشگاه و..."
                            className='h-full w-full text-base text-right text-white placeholder:text-primary placeholder:opacity-50 font-bold border-none bg-transparent appearance-none focus:ring-0 focus:outline-none focus:border-none peer'
                        />
                        <Image 
                            src={search_Icon} 
                            alt="SearchIcon" 
                        />
                    </div>
                    <div 
                        className='p-3 bg-[#F2CDC8] rounded-[15px] mr-1'
                    >
                        <Image src={logout_Icon} alt="LogOut Icon"/>
                    </div> 
                </div>
                {/* summary Information */}
                <div className='flex flex-col lg:flex-row items-stretch lg:justify-center mt-10'>
                    {/* orders sum */}
                    <div className='order-2 lg:order-1 w-full lg:w-1/4 h-full flex flex-row-reverse lg:flex-col justify-between items-stretch bg-white px-6 py-5 lg:py-7.5 my-1 lg:mx-5 rounded-[15px] lg:rounded-[25px] shadow-shadowB'>
                        <Image 
                            src={CartTotal_Icon} 
                            alt="CartTotalIcon" 
                        />
                        <div className='text-right flex flex-col lg:mt-10'>
                            <p className='text-base lg:text-lg text-[#3A4750] font-bold leading-6'>مجموع درآمد فروشگاه</p>
                            <p className='text-xl lg:text-2xl text-[#3A4750] font-extrabold leading-10 mt-1.5 after:content-["تومان"] after:text-sm after:mr-2'><bdi>{(+dataSelected.sumIncome).toLocaleString()}</bdi></p>
                        </div>
                        <p className='hidden lg:block text-base text-black font-noramal opacity-60 mt-4 self-end'><bdi>در یک ماه گذشته</bdi></p>
                    </div>
                    {/* orders Amount */}
                    <div className='order-2 lg:order-3 w-full lg:w-1/4 h-full flex flex-row-reverse lg:flex-col justify-between items-stretch bg-white px-6 py-5 lg:py-7.5 my-1 lg:mx-5 rounded-[15px] lg:rounded-[25px] shadow-shadowB'>
                        <Image 
                            src={BagTick_Icon} 
                            alt="BagTickIcon" 
                        />
                        <div className='text-right flex flex-col lg:mt-10'>
                            <p className='text-base lg:text-lg text-[#3A4750] font-bold leading-6'>تعداد سفارشات فروشگاه</p>
                            <p className='text-xl lg:text-2xl text-[#3A4750] font-extrabold leading-10 mt-1.5 after:content-["عدد"] after:text-sm after:mr-2'><bdi>{(+dataSelected.sumSaleAmount).toLocaleString()}</bdi></p>
                        </div>
                        <p className='hidden lg:block text-base text-black font-noramal opacity-60 mt-4 self-end'><bdi>در یک ماه گذشته</bdi></p>
                    </div>
                    {/* products Amount */}
                    <div className='order-2 lg:order-3 w-full lg:w-1/4 h-full flex flex-row-reverse lg:flex-col justify-between items-stretch bg-white px-6 py-5 lg:py-7.5 my-1 lg:mx-5 rounded-[15px] lg:rounded-[25px] shadow-shadowB'>
                        <Image 
                            src={shop_Icon} 
                            alt="Shop Icon" 
                        />
                        <div className='text-right flex flex-col lg:mt-10'>
                            <p className='text-base lg:text-lg text-[#3A4750] font-bold leading-6'>تعداد اجناس فروشگاه</p>
                            <p className='text-xl lg:text-2xl text-[#3A4750] font-extrabold leading-10 mt-1.5 after:content-["عدد"] after:text-sm after:mr-2'><bdi>{(7565).toLocaleString()}</bdi></p>
                        </div>
                        <p className='hidden lg:block text-base text-black font-noramal opacity-60 mt-4 self-end'><bdi>در یک ماه گذشته</bdi></p>
                    </div>
                    {/* Messages Amount */}
                    <div className='order-2 lg:order-3 w-full lg:w-1/4 h-full flex flex-row-reverse lg:flex-col justify-between items-stretch bg-white px-6 py-5 lg:py-7.5 my-1 lg:mx-5 rounded-[15px] lg:rounded-[25px] shadow-shadowB'>
                        <Image 
                            src={message_Icon} 
                            alt="Message Icon" 
                        />
                        <div className='text-right flex flex-col lg:mt-10'>
                            <p className='text-base lg:text-lg text-[#3A4750] font-bold leading-6'>تعداد پیام های فروشگاه</p>
                            <p className='text-xl lg:text-2xl text-[#3A4750] font-extrabold leading-10 mt-1.5 after:content-["عدد"] after:text-sm after:mr-2'><bdi>{(5000).toLocaleString()}</bdi></p>
                        </div>
                        <p className='hidden lg:block text-base text-black font-noramal opacity-60 mt-4 self-end'><bdi>در یک ماه گذشته</bdi></p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;