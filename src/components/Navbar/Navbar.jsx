import React from 'react'
import logo from "../../assets/logo.svg"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Container from '../Layouts/Container'

const Navbar = () => {
  return (
    <div>
        <Container className="py-7">
            <div className='flex items-center justify-between'>
                <div>
                    <img src={logo} alt="" />
                </div>

                <div>
                    <ul className='flex items-center gap-x-9'>
                        <li><a className='flex items-center text-primary font-hee text-[17px] leading-[30.6px]' href="">Home <MdOutlineKeyboardArrowDown/></a></li>
                        <li><a className='hover:text-primary font-hee text-[17px] leading-[30.6px] text-black' href="">About</a></li>
                        <li><a className='hover:text-primary font-hee text-[17px] leading-[30.6px] text-black' href="">Recipes</a></li>
                        <li><a className='hover:text-primary font-hee text-[17px] leading-[30.6px] text-black' href="">Guides</a></li>
                        <li><a className='hover:text-primary font-hee text-[17px] leading-[30.6px] text-black' href="">Journal</a></li>
                        <li><a className='flex items-center text-black hover:text-primary font-hee text-[17px] leading-[30.6px]' href="">Shop <MdOutlineKeyboardArrowDown/></a></li>
                        <li><a className='hover:text-primary font-hee text-[17px] leading-[30.6px] text-black' href="">Contact</a></li>
                    </ul>
                </div>

                <div className='flex items-center gap-x-4'>
                    <CiShoppingBasket className='text-2xl'/>
                    <CiUser className='text-2xl'/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar