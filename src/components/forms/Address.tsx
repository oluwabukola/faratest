import React from 'react';
import { Formik, Form, Field } from 'formik';

export const Address = () => {
  return (
  <div className=''>
  <Formik>
    <Form>
      <div className='px-[63px] py-5 box-border'>
    <p className='m-0 p-0 text-[32px] font-bold text-miniblack capitalize mb-5'>Property details</p>

      <div className='flex justify-between gap-x-14 '>
        <div className='basis-1/2'>
      <label htmlFor="category" className='input-primary'>property category<span className='text-pinkish'>*</span></label>
      <select id="category" className=''>
      <option selected>Choose a country</option>

   <option value="FR">France</option>
       <option value="DE">Germany</option>
    </select>
       

       <label htmlFor="name" className='input-primary'>property name<span className='text-pinkish'>*</span></label>
       <select  id='name'placeholder='property name' className=''>
        <option>property</option>
        <option>name</option> 
       </select>

       <label htmlFor="beds" className='input-primary'>number of beds<span className='text-pinkish'>*</span></label>
       <select id='beds' placeholder='property name' className=''>
        <option>property</option>
        <option>name</option> 
       </select>
    
       <label htmlFor="finance" className='input-primary'>Is this a Blura finance property (Yes/No)<span className='text-pinkish'>*</span></label>
       <select id='finance' placeholder='property name' className=''>
        <option>yes</option>
        <option>no</option> 
       </select>
        </div>
        <div className='basis-1/2'>
        <label htmlFor="type" className='input-primary'>Property Condition<span className='text-pinkish'>*</span></label>
       <select id='type' placeholder='property type' className=''>
        <option>yes</option>
        <option>no</option> 
       </select>
       
       <label htmlFor="type" className='input-primary'>Service Charge (₦)</label>
       <input type='text' placeholder='#0' className=''/>
       
       <label htmlFor="area" className='input-primary'>Description (About Property)<span className='text-pinkish'>*</span></label>
       <textarea  id='area' rows={5} cols={15}className='border border-solid border-grey2 rounded-lg '></textarea>
        </div>
      </div>
      </div>
      </Form>
      </Formik>
      </div>
  )
}
