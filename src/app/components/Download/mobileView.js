"use client";
import React from 'react'
import "./style.css";
import Image from 'next/image';

//images... 
import MobileViewImg1 from "../../../../public/images/bgImgs/man-img-1.png"
import MobileViewImg2 from "../../../../public/images/bgImgs/man-img-2.png"
import MobileViewImg3 from "../../../../public/images/bgImgs/man-img-3.png"
import MobileViewImg4 from "../../../../public/images/bgImgs/man-img-4.png"
import FassaIMg from "../../../../public/images/bgImgs/fissa.png"

//icons ...
import { FaWifi } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { PiBatteryChargingBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";

export default function mobileView() {
    return (
        <div>
            <div className='pl-2 pr-2 pt-3 flex justify-between align-middle'>
                <p className='text-[9px] sm:text-[10px]  p-1 rounded-[20px] bg-black text-white translate-y-[-15px] md:translate-y-[0px]' >9.41</p>
                <div className='flex gap-1 translate-y-[-8px] md:translate-y-[0px]'>
                    <FaWifi className='text-[10px] bg-black text-white rounded-[20px] p-[1px]' />
                    <GiNetworkBars className='text-[10px] bg-black text-white rounded-[20px] p-[1px]' />
                    <PiBatteryChargingBold className='text-[10px] bg-black text-white rounded-[20px] p-[1px]' />
                </div>

            </div>
            <div className='pl-3 pr-2 pt-1 flex justify-between translate-y-[-20px] md:translate-y-[-7px]'>
                <p className='text-center text-[15px] translate-y-[-3px] md:translate-y-[0px] md:text-[20px]'><FaSearch className=' bg-gray-200 text-black ml-1 rounded-[20px] p-[3px]' /></p>
                <div className='flex gap-2 align-top justify-between'>
                    <LiaFlagUsaSolid className='text-[24px] md:text-[30px] text-green-400 pr-[8px] translate-y-[-9px] md:translate-y-[-13px]' />
                    <div className='md:w-[20px] md:h-[20px] w-[15px] h-[15px] translate-y-[-9px] md:translate-y-[-13px] bg-blue-200 rounded-[50%] grid justify-center align-middle m-auto'>
                        <Image
                            src="https://th.bing.com/th/id/OIP.n35dfoYxzkOGICqrCuCJrAHaE8?rs=1&pid=ImgDetMain"
                            layout="fill"
                            objectFit="cover"  // Adjust how the image fits the container
                            className="rounded-[50%]  m-auto"
                            alt="Full width and height image"
                        />
                    </div>
                </div>
            </div>
            <div className='pl-3 pr-2 leading-3 translate-y-[-30px] md:translate-y-[-7px]'>
                <h6 className='Earning text-[13px] md:text-[15px] rounded-[10px] bg-blue-300 w-[50%] md:w-[40%] text-center font-bold'>Earnings</h6>
                <p className='w-[50%] md:w-[40%] text-center text-gray-400 text-[7px] md:text-[9px] font-bold translate-y-[-4px]'>Total Expense</p>
                <div className='translate-y-[-8px]'>
                    <h6 className=' text-[15px] md:text-[24px] rounded-[10px] text-gray-500 font-bold'>$6078.76</h6>
                    <p className='text-[7px] md:text-[9px] rounded-[10px] text-gray-500 font-bold translate-y-[-8px]'>Frofit is 48% More than first <br />
                        Month
                    </p>
                </div>

            </div>
            <div className='p-1 translate-y-[-57px] md:translate-y-[-30px] bg-transparent overflow-hidden'>
                <div className='w-full md:h-[80px] h-[55px] relative text-black  grid justify-center'>
                    <div className=' bg-transparent border-[23px] md:border-[30px] border-[rgb(226,201,218)] rounded-[50%] grid justify-center align-middle realative opacity-65'>
                        <div className='absolute top-[35%] md:top-[35%] right-[25%] w-[5px] rounded-[15px] rotate-[50deg] h-[40px] md:h-[43px] bg-[rgb(226,201,218)] shadow-md '>

                        </div>
                        <div className='w-[60px] md:w-[95px] bg-transparent rounded-[60%] md:h-[95px]  h-[48px] grid justify-center align-middle m-auto pt-2 font-bold'>
                            <p className='pt-[-6px] text-[15px] md:pt-[-2px] md:text-[30px] rounded-[10px] text-gray-500 font-bold'>80%</p>
                        </div> <br />

                    </div>
                </div>
            </div>
            <div className='w-full h-auto p-[5px] shadow-inner shadowMobileView rounded-[8px] text-black translate-y-[-50px] md:translate-y-[-12px]'>
                <h6 className=' text-[10px] md:text-[13px] pl-2 rounded-[10px] text-gray-500 font-bold'>Groups</h6>
                <div className='flex pr-2 pl-2 justify-between align-middle translate-y-[-3px]'>
                    <div className='grid grid-cols-1 gap-2 justify-center align-middle'>
                        <div className='rounded-[50%] w-[15px] md:w-[33px] m-auto h-[15] md:h-[33px] bg-red-500'>
                            <Image
                                src={MobileViewImg1}
                                className="rounded-[50%] w-full h-full"
                                alt="Full width and height image"
                            />
                        </div>

                        <p className='text-[7px] translate-y-[-3px] text-center text-gray-500'>Moggle</p>
                    </div>
                    <div className='grid grid-cols-1 gap-2 justify-center align-middle '>
                        <div className='rounded-[50%] w-[15px] md:w-[33px] m-auto h-[15] md:h-[33px] bg-red-500'>
                            <Image
                                src={MobileViewImg2}
                                className="rounded-[50%] w-full h-full"
                                alt="Full width and height image"
                            />
                        </div>
                        <p className='text-[7px] translate-y-[-3px] text-center text-gray-500'>Romanies</p>
                    </div>
                    <div className='grid grid-cols-1 gap-2 justify-center align-middle'>
                        <div className='rounded-[50%] w-[15px] md:w-[33px] m-auto h-[15] md:h-[33px] bg-red-500'>
                            <Image
                                src={MobileViewImg3}
                                className="rounded-[50%] w-full h-full"
                                alt="Full width and height image"
                            />
                        </div>
                        <p className='text-[7px] translate-y-[-3px] text-center text-gray-500'>Emilly</p>
                    </div>
                    <div className='grid grid-cols-1 gap-2 justify-center align-middle '>
                        <div className='rounded-[50%] w-[15px] md:w-[33px] m-auto h-[15] md:h-[33px] bg-red-500'>
                            <Image
                                src={MobileViewImg4}
                                className="rounded-[50%] w-full h-full"
                                alt="Full width and height image"
                            />
                        </div>
                        <p className='text-[7px] translate-y-[-3px] text-center text-gray-500'>Harry</p>
                    </div>

                </div>
                <div className='w-full grid justify-center translate-y-[-9px] sm:translate-y-[0px]'>
                    <button className='w-auto p-[5px] translate-y-[-6px] rounded-[20px] text-center text-black text-[6px] md:text-[9px] bg-[rgb(226,201,218)] '>New Payment or Group</button>
                </div>
                <h6 className=' text-[8px] md:text-[13px] pl-1 rounded-[10px] text-gray-500 font-bold translate-y-[-20px] sm:translate-y-[0px]'>Transations</h6>
                <div className='p-2 flex rounded-[10px] gap-2 justify-center align-middle shadow-md translate-y-[-15px] md:translate-y-[-6px] shadowMobileView border-gray-50'>
                    <Image
                        src={FassaIMg}
                        className="rounded-[50%] w-[14px] h-[14px] md:h-[25px] md:w-[25px]  m-auto translate-y-[-9px] md:translate-y-[-5px]"
                        alt="Full width and height image"
                    />
                    <p className='text-[5px] md:text-[8px] pl-1 rounded-[10px] text-gray-500 font-bold translate-y-[-3px]'>Fassa Drinks and Vaverage
                        Saturday
                    </p>
                </div>
            </div>
        </div>
    )
}
