import React from 'react' 

const Comments = (props) => {
    return (
        <div className='flex py-4'>
            <img src={props.img} className='w-[40px] h-[40px] rounded-full' alt="" />
            <div className=''>
                <div className='flex px-2 gap-2'>
                    <p className='text-[#fff]'>{props.user}</p>
                    <span className='text-[#A1A1A1]'>{props.time}</span>
                </div> 
                <p className='text-white pt-1 px-2'>{props.desc}</p>
            </div>
        </div>
    )
}

export default Comments