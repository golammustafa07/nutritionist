import React from 'react'
import Container from '../Layouts/Container'
import virginia from "../../assets/virginia.jpg"
import signature from "../../assets/signature.jpg"


const Banner = () => {
    return (
        <div className='bg-banner bg-no-repeat bg-center bg-cover'>
            <div className='bg-overlay'>
                <Container className="py-[155px] relative">
                    <div>
                        <p className='font-hee text-[20px] leading-[30px] text-white'>Eating healthy does not need to be a chore. Instead, it can be a culinary adventure.</p>
                        <h1 className='font-cau font-bold leading-[62.4px] w-[715px] text-[52px] text-white pt-12 pb-16'>Teach your family to have a healthy relationship with food.</h1>

                        <div className='flex items-center gap-x-8'>
                            <button className='w-[202px] bg-primary py-4 font-hee text-[18px] leading-[21px] text-white'>Buy now</button>
                            <a className='font-hee text-[18px] leading-[21px] text-white' href="">View Nutrition Guides</a>
                        </div>
                    </div>

                    <div className='w-[340px] bg-primary absolute bottom-[-30px] right-0 rounded-lg cursor-pointer'>
                        <div className='py-11 px-12 text-center'>
                            <img className='w-[120px] h-[120px] rounded-full mx-auto' src={virginia} alt="" />
                            <h3 className='text-[19px] leading-[34.2px] font-bold font-hee text-white pt-10'>Hey, I'm Virginia!</h3>
                            <p className='text-white text-base mx-auto w-[276px] text-center pr-10 pt-4 pb-5'>Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat praesent sapien massa.</p>
                            <img src={signature} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Banner