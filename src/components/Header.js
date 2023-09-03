import React, { useCallback, useEffect, useRef, useState } from "react";
import logo from "./../images/logo.png";
import { Link } from "react-router-dom";
import {BsSearch} from 'react-icons/bs'
import {IoMdNotifications} from 'react-icons/io'
import {CiMenuKebab} from 'react-icons/ci'
import {FiMenu} from 'react-icons/fi'
import {RxCross1} from 'react-icons/rx'
import {MdOutlineClose} from 'react-icons/md'
import {BiSolidRightArrow} from 'react-icons/bi'
import account_img from '../images/account.webp'
import MobileSetting from "./UI/MobileSetting";


const Header = () => {
    const [isSearch, setIsSearch] = useState(false)
    const [isNoti, setNoti] = useState(false)
    const [isAccount, setAccount] = useState(false)
    const [isMobileNav, setIsMobileNav] = useState(false)
    const [isMobileSetting, setIsMobileSetting] = useState(false)
    const notiRef = useRef()
    const accountRef = useRef()
    const mobileNavRef = useRef()
    const mobileRef = useRef()

    // let isHome = false
    // const currentUrl = window.location.pathname;
    // console.log(currentUrl === '/')
    // if(currentUrl === '/') {
    //     isHome = true
    // }

    const handleClickOutside = useCallback((event) => {
        if (notiRef.current && !notiRef.current.contains(event.target)) {
            setNoti((prevState) => false)
        }
        if (accountRef.current && !accountRef.current.contains(event.target)) {
            setAccount((prevState) => false)
        }
        if (mobileNavRef.current && !mobileNavRef.current.contains(event.target) && mobileRef.current && !mobileRef.current.contains(event.target)) {
            setIsMobileNav((prevState) => false)
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
    return  (
        <>
            <div className={`fixed bg-[#171310ed] top-0 left-0 right-0 py-3 z-50`}>
                <div className=" flex justify-between items-center container w-full">
                    <div className="lg:hidden" ref={mobileRef}>
                        <FiMenu size={25} onClick={() => setIsMobileNav(true)}/>
                    </div>
                    <img src={logo} className="h-[40px]" alt="" />

                    <div className="hidden lg:block">
                        <ul className="flex">
                            <li className="mx-2"><Link to='/'>Home</Link></li>
                            <li className="mx-2 relative group">
                                <Link to='/movie/popular'>Movies</Link>
                                <ul className="
                                    absolute top-[100%] rounded min-w-[250%] max-w-[320%]  p-2 px-3
                                    hidden group-hover:block bg-white
                                ">
                                    <li className="text-black hover:text-[red] duration-300 mb-2"><Link to='/movie/popular'>Popular</Link></li>
                                    <li className="text-black hover:text-[red] duration-300 mb-2"><Link to='/movie/now-playing'>Now Playing</Link></li>
                                    <li className="text-black hover:text-[red] duration-300 mb-2"><Link to='/movie/upcoming'>Up Coming</Link></li>
                                    <li className="text-black hover:text-[red] duration-300 mb-2"><Link to='/movie/top-rated'>Top Rated</Link></li>
                                </ul>
                            </li>
                            <li className="mx-2"><Link to='/series'>Series</Link></li>
                            <li className="mx-2"><Link to='/pricing'>Pricing</Link></li>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <ul className="flex items-center">
                            <li className="mx-2 relative">
                                <div onClick={searchChangeHandler} className=" cursor-pointer border-[1px] border-white p-2 rounded-full">
                                    {
                                        isSearch ? <RxCross1 size={15}/> : <BsSearch size={15}/>
                                    }
                                </div>
                                {
                                    isSearch &&
                                    <div className="absolute top-0 bottom-0 right-[120%] flex">
                                        <input type="text" className="
                                            border-0 outline-none rounded-l-xl text-black p-2
                                        " placeholder="Search Movie"/>
                                        <span className="p-2 px-3 cursor-pointer bg-white rounded-r-xl text-black border-l-[1px] border-[#ddd]"><BsSearch size={13}/></span>
                                    </div>
                                }
                            </li>
                            <li className="mx-2 relative">
                                <div ref={notiRef} onClick={notiChangeHandler} className=" cursor-pointer border-[1px] border-white p-2 rounded-full">
                                    <IoMdNotifications size={15}/>
                                </div>
                                {
                                    isNoti && 
                                    <div className="absolute top-[120%] right-0 w-[200px] p-2 px-3 bg-white rounded text-black">
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
                                    <div className="absolute top-[120%] right-0 w-[150px] p-2 px-4 bg-white rounded text-black text-[15px]">
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

                    <div className="md:hidden">
                        <CiMenuKebab onClick={() => setIsMobileSetting((prev) => !prev)} size={25}/>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div ref={mobileNavRef} className={`${isMobileNav ? 'translate-x-[0]' : '-translate-x-[120%]'} duration-300 lg:hidden -translate-x-[120%] bg-[#171310] w-[260px] sm:w-[350px] fixed top-0 left-0 bottom-0 py-3 z-50`}>
                <div className="absolute top-[10px] right-[10px]">
                    <MdOutlineClose size={25} onClick={() => setIsMobileNav(false)}/>
                </div>
                <ul className="flex flex-col justify-center h-full text-[18px]">
                    <li className="p-2 px-4 hover:bg-[#1713109d]"><Link to='/'>Home</Link></li>
                    <li className="p-2 px-4 hover:bg-[#1713109d] relative group">
                        Movies
                        <ul className="
                            top-[100%] rounded w-[100%]  p-2 px-3
                            hidden group-hover:block bg-[#171310] mt-1
                        ">
                            <li className=" hover:text-[red] duration-300 mb-2 flex items-center">
                                <span><BiSolidRightArrow size={15} className="mr-2"/></span><Link to='/movie/popular'>Popular</Link>
                            </li>
                            <li className=" hover:text-[red] duration-300 mb-2 flex items-center">
                                <span><BiSolidRightArrow size={15} className="mr-2"/></span><Link to='/movie/now-playing'>Now Playing</Link>
                            </li>
                            <li className=" hover:text-[red] duration-300 mb-2 flex items-center">
                                <span><BiSolidRightArrow size={15} className="mr-2"/></span><Link to='/movie/upcoming'>Up Coming</Link>
                            </li>
                            <li className=" hover:text-[red] duration-300 mb-2 flex items-center">
                                <span><BiSolidRightArrow size={15} className="mr-2"/></span><Link to='/movie/top-rated'>Top Rated</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="p-2 px-4 hover:bg-[#1713109d]"><Link to='/series'>Series</Link></li>
                    <li className="p-2 px-4 hover:bg-[#1713109d]"><Link>Pricing</Link></li>
                </ul>
            </div>

            {/* Mobile Setting */}
            {
                isMobileSetting && 
                <MobileSetting/>
            }
        </>
    );
};

export default Header;
