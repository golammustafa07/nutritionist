import React from 'react'
import fitness from "../../assets/fitness.jpg"
import diet from "../../assets/diet.jpg"
import health from "../../assets/health.jpg"
import Container from '../Layouts/Container'

const Guides = () => {
  return (
    <div>
        <Container className="py-20">
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-9'>
                    <img className='w-[110px] h-[110px] rounded-full' src={health} alt="" />
                    <div>
                        <h3 className='text-[19px] leading-[34px] font-hee'>Health & wellness guides</h3>
                        <p className='font-hee text-base  w-[220px]'>Massa turpis ullamcorper congue in in adipiscing ornare.</p>
                        <a className='text-primary' href=""><u>Learn more</u></a>
                    </div>
                </div>
                <div className='flex items-center gap-x-9'>
                    <img className='w-[110px] h-[110px] rounded-full' src={fitness} alt="" />
                    <div>
                        <h3 className='text-[19px] leading-[34px] font-hee'>Body & fitness guides</h3>
                        <p className='font-hee text-base  w-[235px]'>Id ornare nullam ut libero pellentesque eu orci bibendum.</p>
                        <a className='text-primary' href=""><u>Learn more</u></a>
                    </div>
                </div>
                <div className='flex items-center gap-x-9'>
                    <img className='w-[110px] h-[110px] rounded-full' src={diet} alt="" />
                    <div>
                        <h3 className='text-[19px] leading-[34px] font-hee'>Diet & nutrition guides</h3>
                        <p className='font-hee text-base  w-[220px]'>Massa turpis ullamcorper congue in in adipiscing ornare.</p>
                        <a className='text-primary' href=""><u>Learn more</u></a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Guides