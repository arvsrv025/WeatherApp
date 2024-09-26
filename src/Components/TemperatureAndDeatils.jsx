import React from 'react';
import { FaCircle} from "react-icons/fa";
import { FaTemperatureHigh} from "react-icons/fa";
import { WiHumidity } from 'react-icons/wi';
import { FaWind } from "react-icons/fa";
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from 'react-icons/fa';

const TemperatureAndDeatils = () => {
  return (
    <>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>Cloudy</p>
        </div>
        <div className='flex items-center justify-around tetx-white py-3'>
        <FaCircle size={50} color='orange' className='w-20'/>
        <p className='flex items-center justify-between text-2xl text-white'>34° C</p>
        <div className='flex flex-col justify-around'>
           <div className='text-[13px] text-white flex flex-row'><FaTemperatureHigh size={18} color='white'/>    Real Feel : 18° C</div> 
           <div className='text-[13px] text-white flex flex-row'><WiHumidity size={18} color='white'/>Humidity : 43%</div>
            <div className='text-[13px] text-white flex flex-row'><FaWind size={18} color='white'/>WInd : 18kmph</div>
        </div>
        </div>
        <div className='flex flex-row justify-around'>
            <p className='flex flex-row justify-center px-2 text-white'><LuSunrise size={18} color='white'/>XX:XX am</p>
            <p className='flex flex-row justify-center px-2 text-white'><LuSunset size={18} color='white'/>XX:XX pm</p>
            <p className='flex flex-row justify-center px-2 text-white'><FaLongArrowAltUp size={18} color='white'/>XX C</p>
            <p className='flex flex-row justify-center px-2 text-white'><FaLongArrowAltDown size={18} color='white'/>XX C</p>
        </div>
    </>
    
  )
}

export default TemperatureAndDeatils
