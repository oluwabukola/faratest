import React, {useState} from 'react'
import { Formik, Form, Field, FormikConfig, FormikValues } from 'formik';
import Svgicons from '../Svgicons'

 interface MyFormValues {
   category: string;
 }
const Detail = () => {
  
  return (
    <div>
        <p className='m-0 p-0 text-[32px] font-bold text-miniblack capitalize my-5 
        flex items-baseline'>photos<span className='text-xs uppercase font-normal'>(Required)</span></p>
        <div className='w-ful flex justify-center'>
        <p className='text-xs uppercase font-normal m-0 p-0'>required</p>

          <div className='w-[370px] border border-dashed border-grey2 h-[133px]'>

          </div>

        </div>
      {/* <input  type='text' placeholder='thefrr ggdg' /> */}
    </div>
  )
}

export default Detail;

