import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import account_img from '../../images/account.webp'

const MobileSetting = () => {
    const [isSearch, setIsSearch] = useState(false)
    const [isNoti, setNoti] = useState(false)
    const [isAccount, setAccount] = useState(false)
    const notiRef = useRef()
    const accountRef = useRef()

    const handleClickOutside = useCallback((event) => {
        if (notiRef.current && !notiRef.current.contains(event.target)) {
            setNoti((prevState) => false)
        }
        if (accountRef.current && !accountRef.current.contains(event.target)) {
            setAccount((prevState) => false)
        }
    }, []);


    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    const searchChangeHandler = () => {
        setIsSearch((prevState) => !prevState)
    }
    const notiChangeHandler = () => {
        setNoti((prevState) => !prevState)
    }
    const accountChangeHandler = () => {
        setAccount((prevState) => !prevState)
    }
    return (
        <div className="md:hidden fixed top-[70px] right-0 left-0 z-40">
            <ul className="flex items-center justify-center">
                <li className="mx-2 relative">
                    <div onClick={searchChangeHandler} className=" cursor-pointer border-[1px] border-white p-2 rounded-full">
                        {
                            isSearch ? <RxCross1 size={15}/> : <BsSearch size={15}/>
                        }
                    </div>
                    {
                        isSearch &&
                        <div className="absolute top-[120%] left-0 right-[120%] flex shadow-2xl">
                            <input type="text" className="
                                border-0 outline-none rounded-l-xl text-black p-2
                            " placeholder="Search Movie"/>
                            <span className="p-2 px-3 flex justify-center items-center cursor-pointer bg-white rounded-r-xl text-black border-l-[1px] border-[#ddd]"><BsSearch size={13}/></span>
                        </div>
                    }
                </li>
                <li className="mx-2 relative">
                    <div ref={notiRef} onClick={notiChangeHandler} className=" cursor-pointer border-[1px] border-white p-2 rounded-full">
                        <IoMdNotifications size={15}/>
                    </div>
                    {
                        isNoti && 
                        <div className="absolute top-[120%] left-0 w-[200px] p-2 px-3 bg-white rounded text-black shadow-2xl">
                            <h1>Notifications</h1>
                            <div className="w-full h-[1px] bg-[#ddd] my-1" />
                            <div>
                                <div className="mb-2">
                                    <h1 className="mb-0">Boot Bitty</h1>
                                    <div className="text-[14px] text-[#333]">Just Now</div>
                                </div>
                                <div className="mb-2">
                                    <h1 className="mb-0">The last of us</h1>
                                    <div className="text-[14px] text-[#333]">15 minutes ago</div>
                                </div>
                                <div className="mb-2">
                                    <h1 className="mb-0">The Hero Camp</h1>
                                    <div className="text-[14px] text-[#333]">1 hour ago</div>
                                </div>
                            </div>
                        </div>
                    }
                </li>
                <li className="mx-2 relative">
                    <img ref={accountRef} onClick={accountChangeHandler} className=" cursor-pointer" src={account_img} alt="" />
                    {
                        isAccount &&
                        <div className="absolute top-[120%] left-0 w-[150px] p-2 px-4 bg-white rounded text-black text-[15px] shadow-2xl">
                            <div className="mb-2 hover:text-[red] duration-300"><Link to=''>History</Link></div>
                            <div className="mb-2 hover:text-[red] duration-300"><Link to=''>Watchlist</Link></div>
                            <div className="mb-2 hover:text-[red] duration-300"><Link to=''>My Account</Link></div>
                            <div className="mb-2 hover:text-[red] duration-300"><Link to=''>Log Out</Link></div>
                        </div>
                    }
                </li>
                <li><button>Subscribe Now</button></li>
            </ul>
        </div>
    );
};

export default MobileSetting;
