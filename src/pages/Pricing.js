import React from "react";
import pricing_img from '../images/pricing.jpg'

const Pricing = () => {
    return (
        <>
            <div className="w-full relative"> 
                <img src={pricing_img} className="h-[80vh] w-full bg-cover bg-top object-cover" alt="" />
                <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-[#1919196d]">
                    <h1 className="text-[30px] font-bold">Pricing Plan</h1>
                </div>
            </div>
            <div className="container py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center bg-[#222222] rounded-lg p-3 py-6 group overflow-hidden">
                        <div className="before:block before:absolute before:-inset-full before:rounded-[100%] before:rotate-[180deg] before:translate-y-[-30%] before:-skew-y-3 before:bg-[#333333] group-hover:before:bg-[#F4181C] duration-300 ease-linear relative inline-block">
                            <div className="flex justify-center items-end relative z-30">
                                <h1 className="text-[30px] font-bold mr-2">$100</h1> <div> / Month</div>
                            </div>
                            <h1 className="text-[28px] font-bold relative z-30">Basic</h1>
                        </div>
                        <div className="mt-8">
                            <div className="text-center text-[#ddd] mb-3">HD available</div>
                            <div className="text-center text-[#ddd] mb-3">Ultra HD available</div>
                            <div className="text-center text-[#ddd] mb-3">Watch on your laptop</div>
                            <div className="text-center text-[#ddd] mb-3">Watch on your TV</div>
                            <div className="text-center text-[#ddd] mb-3">Watch on your mobile phone</div>
                            <div className="text-center text-[#ddd] mb-3">Watch on your tablet</div>
                            <div className="text-center text-[#ddd] mb-3">Unlimited movies, TV shows</div>
                            <div className="text-center text-[#ddd] mb-3">Unlimited mobile games</div>
                        </div>
                        <button className="bg-[#333333] mt-3 p-3 px-4 group-hover:bg-[#F4181C] group-hover:text-[#fff]">Choose A Plan</button>
                    </div>

                    <div className="text-center bg-[#222222] rounded-lg p-3 py-6 group overflow-hidden">
                        <div className="before:block before:absolute before:-inset-full before:rounded-[100%] before:rotate-[180deg] before:translate-y-[-30%] before:-skew-y-3 before:bg-[#333333] group-hover:before:bg-[#F4181C] duration-300 ease-linear relative inline-block">
                            <div className="flex justify-center items-end relative z-30">
                                <h1 className="text-[30px] font-bold mr-2">$200</h1> <div> / Month</div>
                            </div>
                            <h1 className="text-[28px] font-bold relative z-30">Standard</h1>
                        </div>
                        <div className="mt-8">
                            <div className="text-center text-[#ddd] mb-3">HD available</div>
                            <div className="text-center text-[#ddd] mb-3">Ultra HD available</div>
                            <div className="text-center text-[#ddd] mb-3">Watch on your laptop</div>
                            <div className="text-center text-[#ddd] mb-3">Watch on your TV</div>
                            <div className="text-center text-[#ddd] mb-3">Watch on your mobile phone</div>
                            <div className="text-center text-[#ddd] mb-3">Watch on your tablet</div>
                            <div className="text-center text-[#ddd] mb-3">Unlimited movies, TV shows</div>
                            <div className="text-center text-[#ddd] mb-3">Unlimited mobile games</div>
                        </div>
                        <button className="bg-[#333333] mt-3 p-3 px-4 group-hover:bg-[#F4181C] group-hover:text-[#fff]">Choose A Plan</button>
                    </div>

                    <div className="text-center bg-[#222222] rounded-lg p-3 py-6 group overflow-hidden">
                        <div className="before:block before:absolute before:-inset-full before:rounded-[100%] before:rotate-[180deg] before:translate-y-[-30%] before:-skew-y-3 before:bg-[#333333] group-hover:before:bg-[#F4181C] duration-300 ease-linear relative inline-block">
                            <div className="flex justify-center items-end relative z-30">
                                <h1 className="text-[30px] font-bold mr-2">$300</h1> <div> / Month</div>
                            </div>
                            <h1 className="text-[28px] font-bold relative z-30">Premium</h1>
                        </div>
                        <div className="mt-8">
                            <div className="text-center text-[#ddd] mb-3">HD available</div>
                            <div className="text-center text-[#ddd] mb-3">Ultra HD available</div>
                            <div className="text-center text-[#ddd] mb-3">Watch on your laptop</div>
                            <div className="text-center text-[#ddd] mb-3">Watch on your TV</div>
                            <div className="text-center text-[#ddd] mb-3">Watch on your mobile phone</div>
                            <div className="text-center text-[#ddd] mb-3">Watch on your tablet</div>
                            <div className="text-center text-[#ddd] mb-3">Unlimited movies, TV shows</div>
                            <div className="text-center text-[#ddd] mb-3">Unlimited mobile games</div>
                        </div>
                        <button className="bg-[#333333] mt-3 p-3 px-4 group-hover:bg-[#F4181C] group-hover:text-[#fff]">Choose A Plan</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;
