import React from 'react'

export const Navigation = () => {
  return (
    
    <nav className='bg-white border-solid border-b-[1.5px] border-greyish w-full box-border
     px-16
    py-8 flex items-center text-sm font-bold text-grey-blue'>
        <ul className='list-none flex items-center justify-start gap-x-12 uppercase'>
            <li className='flex gap-x-3 items-center text-pinkish'>
                <span className='bg-pinkish w-8 h-8 rounded-full flex items-center justify-center text-white'>1</span>
                <div><p className='p-0 m-0'>property</p>
                <p className='p-0 m-0'>details</p></div>
            </li>
            <li className='flex gap-x-3 items-center w-[103px] border-solid border border-[#D3D3D3]'></li>
            <li className='flex gap-x-3 items-center text-grey2 '>
                <span className='bg-white  w-8 h-8 rounded-full text-grey2 border-2 border-solid border-grey2 flex items-center justify-center'>2</span>
                <div >
                    <p className='p-0 m-0 '>address</p>
                <p className='p-0 m-0'>details</p>
                </div></li>
            <li className='flex gap-x-3 items-center w-[103px] border-solid border border-[#D3D3D3]'></li>
            <li className='flex gap-x-3 items-center text-grey2'>
            <span className='bg-white  w-8 h-8 rounded-full text-grey2 border-2 border-solid border-grey2 flex items-center justify-center'>3</span>
                photos</li>

        </ul>
    </nav>
  )
}
