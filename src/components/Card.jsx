import React from 'react'
import profile from '../images/profile.jpg'

import { IoRemoveCircleOutline } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";

import { NavLink } from 'react-router-dom';


const Card = (props) => {

    return (
        <div>
            <div className='flex justify-end gap-2'>
                <NavLink to={`/video-update/${props.id}`}>
                    <span onClick={props.onClickUpdate} className='cursor-pointer text-gray-500 text-xl flex justify-end mb-4'><TbEdit /></span>
                </NavLink>
                <span onClick={props.onClickRemove} className='cursor-pointer text-red-500 text-xl flex justify-end mb-4'><IoRemoveCircleOutline /></span>
            </div>
            <NavLink to={`/video-details/${props.id}`}>
                <div className='relative w-[300px]'>
                    <img src={props.img || profile} className='w-[300px] rounded-xl' alt="" />
                    <span className='absolute bottom-1 right-2 px-[5px] bg-[#000000be] text-white rounded-md font-semibold text-[12px]'>{props.time}</span>
                </div>
                <div className='flex w-[300px] p-4 gap-3'>
                    <img src={props.profileImg} className='w-[42px] h-[42px] rounded-full' alt="" />
                    <div>
                        <h2 className='text-[14px] font-medium text-[#f1f1f1]'>{props.title}</h2>
                        <h6 className='text-[13px] font-medium text-[#aaa]  pt-1'>{props.userId}</h6>
                        <div className='text-[13px] font-medium text-[#aaa] flex gap-2'>
                            <span>{props.views}</span>
                            <li>{props.firstTime}</li>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>

    )
}

export default Card