import React from 'react'
import SubScreenHeader from '../../../components/commons/SubScreenHeader'
import GradientButton from '../../../ui/Button/Button'

function WhyPBD() {
    return (
        <div className='block md:flex md:justify-center'>
            <div className='md:w-1/3'>
                <SubScreenHeader
                    Title='Results You Can Measure. Timelines You Can Trust.'
                    Heading='Wy Choose Project Based Delivery'
                    Description={`Ideal for businesses with clearly defined goals,  our structured project model ensures efficiency and accountability from concept to completion.`}
                />
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


            <div className='my-16 pl-2'>
                <div className="mt-4 bg-[#EFF0FF] border-r border-b border-[#D4D5E9] flex justify-center items-center md:w-100 h-16 rounded-[19%_81%_0%_100%/100%_0%_100%_0%]">
                    <p className=" font-main font-semibold ml-10 md:ml-4 text-sm md:text-base">
                        Fixed Scope, Fixed Cost, and Fixed Deadline
                    </p>
                </div>
                <div className="mt-4 bg-[#FDFFEF] border-r border-b border-[#D4D5E9] flex justify-center items-center md:w-100 h-16 rounded-[19%_81%_0%_100%/100%_0%_100%_0%] ml-20">
                    <p className="font-main font-semibold ml-10 md:ml-4 text-sm md:text-base">
                        End-to-end ownership with expert oversight
                    </p>
                </div>
                <div className="mt-4 bg-[#FEEFFF] border-r border-b border-[#D4D5E9] flex justify-center items-center md:w-100 h-16 rounded-[19%_81%_0%_100%/100%_0%_100%_0%]">
                    <p className="font-main font-semibold ml-10 md:ml-4 text-sm md:text-base">
                        Rapid turnaround with top-tier quality assurance
                    </p>
                </div>
                <div className="mt-4 bg-[#FFEFEF] border-r border-b border-[#D4D5E9] flex justify-center items-center md:w-100 h-16 rounded-[19%_81%_0%_100%/100%_0%_100%_0%] ml-24">
                    <p className="font-main font-semibold ml-10 md:ml-4 text-sm md:text-base">
                        Transparent progress tracking at every stage
                    </p>
                </div>

            </div>


            
        </div>
    )
}

export default WhyPBD