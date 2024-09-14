import React from 'react'
import Container from '../Layouts/Container'
import about from "../../assets/about.jpg"
import cn from "../../assets/cn.png"

const About = () => {
  return (
    <div>
        <Container>
            <div className='flex items-center justify-between relative'>
                <div>
                    <h2 className='font-cau text-[43px] leading-[58.05px] font-bold w-[448px]'>One cannot think well, love well, sleep well, if one has not dined well.</h2>
                    <p className='text-[19px] font-hee leading-[34.2px] text-[#212934] w-[450px]'>Fames amet, amet elit nulla tellus, arcu pulvinar bibendum leo. Nunc tristique eu enim sem mattis.</p>

                    <div className='mt-[70px] flex items-center gap-x-10'>
                        <button className='bg-black text-white w-[244px] hover:bg-primary py-4 px-9 font-hee text-[18px] leading-[21px]'>Learn about nutrition</button>
                        <a className='font-hee text-[18px] leading-[21px] text-[#212934] hover:text-primary' href="">Buy now</a>
                    </div>
                </div>

                <img className='w-[130px] h-[130px] rounded-full absolute top-[150px] left-[550px]' src={cn} alt="" />

                <div className='cursor-pointer'>
                    <img className='w-[652px] h-[724px] rounded-bl-[40px]' src={about} alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default About