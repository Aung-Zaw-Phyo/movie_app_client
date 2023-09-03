import React from "react";
import {FaFacebookF, FaGooglePlusG, FaTwitter} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import logo from './../images/logo.png'
import play_store from '../images/play_store.jpg'
import app_store from '../images/app_store.jpg'

const Footer = () => {
    return (
        <div className="bg-[#191919] mt-auto">
            <div className="container py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                        <div className="h-[60px] flex items-center mb-2">
                            <img src={logo} className="h-[40px]" alt="" />
                        </div>
                        <div>
                            Eiusmod tempor incididunt ut la abore et minim ven exerc itation ulla mco lboris naliquip comm.
                        </div>
                    </div>
                    <div className="flex md:justify-center">
                        <div>
                            <div className="h-[60px] flex items-center mb-2">
                                <h1 className="text-[24px]">Follow Us</h1>
                            </div>
                            <div className="flex">
                                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full mr-2 bg-[#252525] cursor-pointer hover:shadow-lg duration-300">
                                    <FaFacebookF size={20}/>
                                </div>
                                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full mr-2 bg-[#252525] cursor-pointer hover:shadow-lg duration-300">
                                    <FaTwitter/>
                                </div>
                                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full mr-2 bg-[#252525] cursor-pointer hover:shadow-lg duration-300">
                                    <AiFillInstagram/>
                                </div>
                                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full mr-2 bg-[#252525] cursor-pointer hover:shadow-lg duration-300">
                                    <FaGooglePlusG/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-[60px] flex items-center mb-2">
                            <h1 className="text-[24px]">Streamit App</h1>
                        </div>
                        <div className="flex flex-wrap">
                            <img className="h-[50px] cursor-pointer mr-3" src={play_store} alt="" />
                            <img className="h-[50px] cursor-pointer" src={app_store} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
