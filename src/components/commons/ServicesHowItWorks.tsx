
const ServicesHowItWorks = () => (
    <section>
        <div className='w-[95%] mx-auto px-4 sm:px-6 lg:px-8'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 my-10">
                <div className="bg-gray flex flex-col justify-center p-4 sm:p-4.5 rounded-[14px] gap-y-10 sm:gap-y-20 relative min-h-[200px] sm:min-h-[250px]">
                    <div>
                        <h3 className="font-main font-medium text-xl sm:text-2xl mb-2">Discover</h3>
                        <p className="font-main font-normal text-para text-base sm:text-lg lh-1">We map your workflows, pain points, and potential.</p>
                    </div>
                    <div>
                        <img src="/discover.png" alt="Discover" className="w-12 sm:w-15" />
                    </div>
                    <div className="hidden lg:flex absolute top-1/2 right-[-7px] z-10 translate-x-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                        <div className="p-2 rounded-full w-7 h-7 flex justify-center items-center bg-black">
                            <img src="/arrow.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray flex flex-col justify-center p-4 sm:p-4.5 rounded-[14px] gap-y-10 sm:gap-y-20 relative min-h-[200px] sm:min-h-[250px]">
                    <div>
                        <h3 className="font-main font-medium text-xl sm:text-2xl mb-2">Design</h3>
                        <p className="font-main font-normal text-para text-base sm:text-lg">Rapidly prototype to test real-world impact.</p>
                    </div>
                    <div>
                        <img src="/design.png" alt="Design" className="w-12 sm:w-15" />
                    </div>
                    <div className="hidden lg:flex absolute top-1/2 right-[-7px] z-10 translate-x-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                        <div className="p-2 rounded-full w-7 h-7 flex justify-center items-center bg-black">
                            <img src="/arrow.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray flex flex-col justify-center p-4 sm:p-4.5 rounded-[14px] gap-y-10 sm:gap-y-20 relative min-h-[200px] sm:min-h-[250px]">
                    <div>
                        <h3 className="font-main font-medium text-xl sm:text-2xl mb-2">Develop</h3>
                        <p className="font-main font-normal text-para text-base sm:text-lg"> Train and deploy AI models tuned for your business.</p>
                    </div>
                    <div>
                        <img src="/develop.png" alt="Develop" className="w-12 sm:w-15" />
                    </div>
                    <div className="hidden lg:flex absolute top-1/2 right-[-7px] z-10 translate-x-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                        <div className="p-2 rounded-full w-7 h-7 flex justify-center items-center bg-black">
                            <img src="/arrow.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray flex flex-col justify-center p-4 sm:p-4.5 rounded-[14px] gap-y-10 sm:gap-y-20 relative min-h-[200px] sm:min-h-[250px]">
                    <div>
                        <h3 className="font-main font-medium text-xl sm:text-2xl mb-2">Refine</h3>
                        <p className="font-main font-normal text-para text-base sm:text-lg">Continuously monitor, adapt, and optimize performance.</p>
                    </div>
                    <div>
                        <img src="/refine.png" alt="Refine" className="w-12 sm:w-15" />
                    </div>
                </div>
            </div>
            <p className="font-main text-center font-medium text-base sm:text-lg w-full sm:w-[80%] lg:w-[55%] opacity-[60%] mx-auto px-4">
                Each phase is collaborative, transparent, and outcome-focused. You'll know exactly how your AI evolves — and what value it's creating.
            </p>
        </div>
    </section>
)

export default ServicesHowItWorks;
