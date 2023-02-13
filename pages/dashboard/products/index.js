import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import {v4} from 'uuid';

//components
import DashboardLayout from '@/components/DashboardLayout';

//media
import search_Icon from '@/assets/common/SearchRedIcon.svg';
import logout_Icon from '@/assets/common/logoutIconRed.svg';
import boxRed_Icon from '@/assets/common/box-addIconRed.svg';
import boxWhite_Icon from '@/assets/common/box-addWhiteIcon.svg';
import product_Image from '@/assets/common/ProductPic1.svg';
import Filter_Icon from '@/assets/common/filterIcon.svg';
import DownArrow_Icon from '@/assets/common/downArrow.svg';
import Sort_Icon from '@/assets/common/sortIcon.svg';
import leftArrow_Icon from '@/assets/common/leftArrowWhite.svg';
import more_Icon from '@/assets/common/more.svg';



//for open & close filterBox in desktop
//it's defined out of main component, for prevent re-render other components
const FilterBoxDialog = ({brand, petKind, setFilterPageOpen, setMainPageOpen}) => {
    const [FilterBoxOpen, setFilterBoxOpen] = useState(false)  
    return (
        <div 
            className={clsx('lg:w-[300px] ml-5 lg:ml-4 lg:bg-white rounded-t-[25px] relative',{
            'rounded-b-[25px]' : FilterBoxOpen == false ,
            })}
        >
            <div className='flex justify-between items-center lg:px-6 py-2'>
                <div className="flex items-center cursor-pointer lg:cursor-auto" onClick={() => {setFilterPageOpen(true);setMainPageOpen(false)}}>
                    <Image src={Filter_Icon} alt="FilterIcon"/>
                    <p className='text-xl lg:text-base text-black font-medium leading-7 mr-2'>فیلترها</p>
                </div>
                <Image 
                    src={DownArrow_Icon} 
                    alt="DownArrowIcon"
                    onClick={()=>setFilterBoxOpen(!FilterBoxOpen)}
                    className={clsx(`hidden lg:block cursor-pointer`,{
                        'rotate-0' : FilterBoxOpen == false,
                        'rotate-180' : FilterBoxOpen == true
                    })}
                />
            </div>
            <div 
                className={clsx('hidden w-full px-6 py-2 bg-white absolute z-20 rounded-b-[25px]',{
                    'lg:block' : FilterBoxOpen == true
                })}
            >
                <div className='flex flex-col items-stretch'>
                    <p className="text-base text-black font-medium leading-7 ">برند</p>
                    <div>
                        {brand.map((item,index) => 
                            <div
                                key={v4()} 
                                className='flex items-center'>
                                <input 
                                    id={`brand${index}`}
                                    type="checkbox"
                                    className='h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]'
                                    />
                                <label
                                    htmlFor={`brand${index}`}
                                    className='mr-2 '
                                    ><bdi>{item.name}</bdi></label>
                            </div>
                        )}
                    </div>
                    <label className="text-base text-black font-medium leading-7 mt-6">بازه قیمتی</label>
                    <div className="w-full flex justify-between text-xs px-2">
                        <span>0</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>2500</span>
                    </div>
                    <style jsx>
                        {`
                        
                        `}
                    </style>
                    <input className="" type="range" min="1" max="100" step="1"/>
                    <p className="text-base text-black font-medium leading-7 mt-6">نوع پت</p>
                    <div>
                        {petKind.map((item, index) => 
                            <div
                                key={v4()} 
                                className='flex items-center'
                            >
                                <input 
                                    id={`kind${index}`}
                                    type="checkbox"
                                    className='h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]'
                                    />
                                <label
                                    htmlFor={`kind${index}`}
                                    className='mr-2'
                                    >{item}</label>
                            </div>
                        )}
                    </div>
                    <p  
                        onClick={() => setFilterBoxOpen(false)}
                        className='self-end text-base text-gray-400 font-medium leading-7 mt-5 cursor-pointer'
                    >حذف فیلترها</p>
                </div>
            </div>
        
        </div>
    )
}

const Prodcuts = () => {
    const data = [
                    {title:"غذای سگ خشک 700 گرمی", Image:product_Image, code:"#750GH", price:"75000", availabilityAmount:"60"},
                    {title:"غذای سگ خشک 700 گرمی", Image:product_Image, code:"#750GH", price:"75000", availabilityAmount:"60"},
                    {title:"غذای سگ خشک 700 گرمی", Image:product_Image, code:"#750GH", price:"75000", availabilityAmount:"60"},
                    {title:"غذای سگ خشک 700 گرمی", Image:product_Image, code:"#750GH", price:"75000", availabilityAmount:"60"},
                    {title:"غذای سگ خشک 700 گرمی", Image:product_Image, code:"#750GH", price:"75000", availabilityAmount:"60"},
    ]
    const brand = [{name:"پت بازار", id:"petBazzar"}, {name:"پت شاپ۱", id:'petShop1'}, {name:"پت ایران",id:'petIran'}, {name:"تهران پت", id:'tehranPet'}, {name:"کافه پت",id:'petCafe'}]
    const petKind = ["سگ خانگی","سگ شکارچی","سگ وحشی","سگ گله","سگ نگهبان"]

    // the array of sort options
    const [sortArr, setSortArr] = useState([{title:"پرفروش ترین"},{title:"محبوب ترین"},{title:"جدید ترین"},{title:"ارزان ترین"},{title:"گران ترین"}])
    // for change the color of choosen option in sorting
    const [sortValue, setSortValue] = useState("پرفروش ترین")


        // for showing stars
        const starsBoxHandler = (stars) => {
            const starsBox = [] ; 
            for(let i=0; i < stars; i++) {
                starsBox.push(<Image src={StarGold_Icon} alt="GoldenStarIcon"/>)
            }
            for(let i=0; i < (5 - stars) ; i++) {
                starsBox.push(<Image src={StarEmpty_Icon} alt="EmptyStarIcon"/>)
            }
            return starsBox;
        }
    
        //Dynamic
        const [MainPageOpen, setMainPageOpen] = useState(true) //for open & close Main Page in mobile
        const [FilterPageOpen, setFilterPageOpen] = useState(false); //for open & close filter Page in mobile
        const [SortPageOpen, setSortPageOpen] = useState(false); //for open & close Sort Page in mobile

    return (
        <div className='h-screen'>
            {/* Filter Page */}
            <div className={clsx('lg:hidden w-full h-screen bg-white',{
               'block' : FilterPageOpen == true,
               'hidden' : FilterPageOpen == false
            })}>
                <div className='h-[40px] w-full flex lg:hidden justify-between items-center p-10'>
                    <div className="flex items-center">
                        <Image src={Filter_Icon} alt="FilterIcon"/>
                        <p className='text-xl lg:text-base text-black font-medium leading-7 mr-2'>فیلترها</p>
                    </div>
                    <div 
                        onClick={() => {setFilterPageOpen(false); setMainPageOpen(true)} } 
                        className='px-4 py-3 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer'
                    >
                        <Image
                            src={leftArrow_Icon}
                            alt="LeftArrowIcon"
                        />
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-between items-stretch mt-5'>
                        <div className='px-10 py-4 border-b-[1px] border-solid border-secondary'>
                            <p className="text-base text-black font-medium leading-7 ">برند</p>
                            <div>
                                {brand.map((item, index) => 
                                    <div 
                                        key={v4()}
                                        className='flex items-center'>
                                        <input 
                                            id={`brand${index}`}
                                            type="checkbox"
                                            className='h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]'
                                        />
                                        <label
                                            htmlFor={`brand${index}`}
                                            className='mr-2'
                                        >{item.name}</label>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='px-10 py-4 border-b-[1px] border-solid border-secondary mt-2'>
                            <label className="text-base text-black font-medium leading-7">بازه قیمتی</label>
                            <div className="w-full flex justify-between text-xs px-2">
                                <span>0</span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>2500</span>
                            </div>
                            <input className="w-full border-[3px] border-red-500" type="range" min="1" max="100" step="1"/>
                        </div>
                        <div className='px-10 py-4 flex flex-col border-b-[1px] border-solid border-secondary pb-10'>
                            <p className="text-base text-black font-medium leading-7 mt-2">نوع پت</p>
                            <div>
                                {petKind.map((item, index) => 
                                    <div 
                                        key={v4()}
                                        className='flex items-center'
                                    >
                                        <input 
                                            id={`kind${index}`}
                                            type="checkbox"
                                            className='h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]'
                                        />
                                        <label
                                            htmlFor={`kind${index}`}
                                            className='mr-2'
                                        >{item}</label>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center px-10 py-5'>
                            <button 
                                className='w-2/3 text-base text-center text-black font-medium leading-7 p-3 bg-[#CFEBD8] border-[1px] border-solid border-verify rounded-[12px]'
                            >اعمال</button>
                            <p  
                                className='w-1/3 text-base text-center text-black font-medium leading-7 p-3 cursor-pointer'
                                >حذف فیلترها</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sort Page */}
            <div 
                className={clsx('lg:hidden w-full h-screen bg-white',{
                    'block' : SortPageOpen == true,
                    'hidden' : SortPageOpen == false
                })}
            >
                <div className='h-[40px] w-full p-10 flex lg:hidden justify-between items-center'>
                    <div className='flex items-center'>
                        <Image 
                            src={Sort_Icon} 
                            alt="SortIcon"
                        />
                        <p className='text-xl text-black font-medium leading-8 mx-2'>مرتب سازی</p>
                    </div>
                    <div 
                        onClick={() => {setSortPageOpen(false); setMainPageOpen(true) }} 
                        className='h-full px-4 py-5 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer flex justify-center items-center'
                    >
                        <Image
                            src={leftArrow_Icon}
                            alt="LeftArrowIcon"
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    {sortArr.map(item => 
                        <p  
                            key={v4()}
                            onClick={() => {setSortValue(item.title);setSortPageOpen(false);setMainPageOpen(true)}}
                            className={clsx('text-base font-medium leading-6 opacity-90 cursor-pointer px-10 py-4 border-b-[1px] border-solid border-secondary',{
                                'text-primary' : item.title == sortValue ,
                                'text-black opacity-80' : item.title !== sortValue
                                    })}
                        >{item.title}</p> 
                    )}
                </div>
            </div>
        <DashboardLayout>
            <div className={clsx('flex flex-col h-full justify-between items-stretch',{
                    'block' : MainPageOpen == true,
                    'hidden' : MainPageOpen == false 
                    }
                )}
            >
                <div className='flex flex-col items-stretch'>
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
                {!data ? 
                    <p className='text-base lg:text-xl text-error font-black leading-9 tracking-tight mt-8'><bdi>هنوز هیچ محصولی اضافه نکرده اید!</bdi></p>
                    :
                    <div className=''>
                        {/*Arrangment Box*/}
                        <div className='flex mt-5'>
                            {/* FilterBox */}
                            <FilterBoxDialog 
                                brand={brand} 
                                petKind={petKind} 
                                setFilterPageOpen={setFilterPageOpen}
                                setMainPageOpen={setMainPageOpen}
                            />
                            {/* Sort Box */}
                            <div className='flex items-center'>
                                <div
                                    onClick={() => {setSortPageOpen(true); setMainPageOpen(false)}} 
                                    className='flex items-center'
                                >
                                    <Image 
                                        src={Sort_Icon} 
                                        alt="SortIcon"
                                        className='cursor-pointer lg:cursor-auto'
                                    />
                                    <p 
                                        className='hidden lg:block text-xl text-black font-medium leading-8 mx-2'
                                    ><bdi>مرتب سازی:</bdi></p>
                                    <p 
                                        className='lg:hidden text-xl text-black font-medium leading-8 mx-2 cursor-pointer'
                                    >{sortValue}</p>
                                </div>
                                <ul className='hidden lg:flex items-center'>
                                    {sortArr.map(item => 
                                        <li  
                                            key={v4()}
                                            onClick={() => setSortValue(item.title)}
                                            className={clsx('text-xl font-medium leading-8 mx-2 cursor-pointer',{
                                                'text-primary' : item.title == sortValue ,
                                                'text-gray-400 opacity-80' : item.title !== sortValue
                                            })}
                                        >{item.title}</li> 
                                    )}
                                    
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col mt-4'>
                            {data && data.map((item,index) => 
                                <div className='flex w-full my-1 px-5 py-4 border-[1px] border-secondary rounded-[15px] shadow-shadowB'>
                                    <div className='w-[100px] h-[100px] border-[1px] border-primary rounded-[12px] overflow-hidden'>
                                        <Image src={product_Image} alt="Product Image" className='w-full h-full object-cover'/>
                                    </div>
                                    <div className='flex flex-col justify-between w-full mr-3.5'>
                                        <div className='flex flex-row justify-between items-start w-full'>
                                            <h1 className='text-base text-black font-medium leading-5'><bdi>{item.title}</bdi></h1>
                                            <Image src={more_Icon} alt="More Icon" className=''/>
                                        </div>
                                        <div className='flex justify-between w-full mt-2'>

                                        <div className='flex flex-col'>
                                            <p className='text-xs text-primary font-medium leading-4 opacity-90 mb-2'><bdi>{`شناسه: ${item.code}`}</bdi></p>
                                            <p className='text-xs text-primary font-medium leading-4 opacity-90'><bdi>{`موجودی: ${item.availabilityAmount}`}</bdi></p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='text-xs text-primary font-medium leading-4 opacity-90 mb-2'><bdi>قیمت:</bdi></p>
                                            <p className='text-sm text-primary font-medium leading-4 opacity-90 after:content-["تومان"] after:text-xs after:mr-1'><bdi>{item.price.toLocaleString()}</bdi></p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                }
                </div>
                {/* Add new Product */}
                <div className='flex flex-row-reverse lg:flex-col items-center justify-center w-full mt-10 p-5 lg:p-[60px] bg-primary lg:bg-white rounded-[12px] lg:rounded-[25px] lg:shadow-shadowB'>
                    <Image src={boxRed_Icon} alt="Box Icon" className='hidden lg:block'/>
                    <Image src={boxWhite_Icon} alt="Box Icon" className='lg:hidden mr-1'/>
                    <p className='text-base lg:text-2xl lg:text-center text-white lg:text-primary font-medium lg:font-black leading-7 lg:leading-10 lg:mt-10'><bdi>ثبت محصول جدید</bdi></p>
                </div>
            </div>
        </DashboardLayout>
            
        </div>

    );
};

export default Prodcuts;