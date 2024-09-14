import React from 'react'
import Container from '../Layouts/Container'

const Recipe = () => {
  return (
    <div className='bg-[#FFFAF5]'>
        <Container className="pt-[190px] pb-[140px]">
            <div>
                <div className='flex justify-between'>
                    <h2 className='text-[30px] font-cau font-bold leading-[39px]'>Latest recipes</h2>
                    <a className='font-hee text-[18px] leading-[21.6px] font-medium' href=""><u>View all recipes</u></a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Recipe