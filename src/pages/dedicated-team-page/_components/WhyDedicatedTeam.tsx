import React from 'react'
import SubScreenHeader from '../../../components/commons/SubScreenHeader'
import GradientButton from '../../../ui/Button/Button'


function WhyDedicatedTeam() {
    return (
        <div className='block md:flex md:justify-center'>
            <div className='md:w-1/3'>
                <SubScreenHeader
                    Heading="Why Choose a Dedicated Team"
                    Title="Focus on Growth. We Handle the Rest."
                    Description="Scale faster, cut overheads, and get elite talent without the recruitment hassle."
                />
                <div className='ml-2 hidden md:flex'>
                    <GradientButton
                        to="/contact"
                        text="Contact Us"
                        width="165px"
                        height="55px"
                        arrowSize="20px"
                        arrowBgSize="40px"
                        fontSize="15px"
                        hideArrowOnMobile={true}
                        textTranslate="59px"
                        arrowTranslate="-105px"

                    />
                </div>
            </div>

            <div className='md:mt-16'>
                <div className='md:flex'>
                    <div className='rounded-2xl md:w-40 h-40 m-2 bg-[#FFFFF2] border border-gray-300 shadow-sm font-main p-4 flex justify-center items-center'>
                        <p className='font-semibold'>No Hiring Delays or Hidden Costs</p>
                    </div>
                    <div className='rounded-2xl md:w-40 h-40 m-2 bg-[#F2F5FF] border border-gray-300 shadow-sm font-main p-4
                    flex justify-center items-center'>
                        <p className='font-semibold'>Direct Communication with your Team</p>
                    </div>
                </div>

                <div className='md:flex'>
                    <div className='rounded-2xl md:w-40 h-40 m-2 bg-[#FFF2FA] border border-gray-300 shadow-sm font-main p-4 flex justify-center items-center'>
                        <p className='font-semibold'>Flexible Scaling and Long Term Consistency</p>
                    </div>
                    <div className='rounded-2xl md:w-40 h-40 m-2 bg-[#E7FFF3] border border-gray-300 shadow-sm font-main p-4 flex justify-center items-center'>
                        <p className='font-semibold'>Proven Experts across the industry </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyDedicatedTeam