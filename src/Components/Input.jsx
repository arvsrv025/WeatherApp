import React from 'react';
import { IoLocationOutline} from "react-icons/io5";
import { IoMdSearch } from 'react-icons/io';
const Inputs = () => {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-cneter space-x-4'>
            <input type='text' 
            placeholder='search...'
            className='text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize placeholder:lowercase'></input>
            <IoLocationOutline size={25} className='text-white'/>
            <IoMdSearch size={25} className='text-white'/>
            
        </div>
        <div className='flex flex-row w-1/4 utems-center justify-center'>
            <button className='text-white font-light' name='metric'>℃</button>
            <p className='text-white font-light mx-1.5 my-2'>|</p>
            <button className='text-white font-light' name='imperial'>℉</button>
        </div>
      
      
    </div>
  )
}

export default Inputs
