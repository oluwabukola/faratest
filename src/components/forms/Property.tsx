import React from 'react'
import { Formik, Form, Field } from 'formik';
import Svgicons from '../Svgicons'



 interface MyFormValues {
   category: string;
 }
const Property = () => {
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
          <div className='w-full border border-solid border-grey3'></div>
          <div className='px-[63px] py-5 box-border'>
          <p className='m-0 p-0  text-[32px] font-bold text-miniblack capitalize my-5'>Blura finace</p>

         <div className='flex justify-between gap-x-14'>
         <div className='basis-1/2'>
         <label htmlFor="amount" className='input-primary'>Amount to be paid (Part Payment)<span className='text-pinkish'>*</span></label>
         <input type='text' placeholder='#0' className=''/>

         <label htmlFor="duration" className='input-primary'>Spread Duration (monthly)<span className='text-pinkish'>*</span></label>
           <select id='duration' placeholder='property type' className=''>
            <option>1</option>
            <option>2</option> 
           </select>

           
           <label htmlFor="month" className='input-primary'>Recurring Amount (monthly)<span className='text-pinkish'>*</span></label>
           <input type='text' placeholder='#0' className='border border-solid border-grey2 rounded-lg '/>
          </div>
          <div className='basis-1/2 box-border'>
            <label className='input-primary'>description</label>
            <textarea  id='area' className='h-[232px]'></textarea>
          </div>
         </div>
         </div>
         <div className='w-full border border-solid border-grey3'></div>
         <div className='px-[63px] pb-5'>
          <p className='m-0 p-0  text-[32px] font-bold text-miniblack capitalize mt-5 mb-2'>Amenities<span className='text-base'>(0/7)</span></p>
          <p className='m-0 p-0 text-base font-semibold text-minigrey pb-2'>Pick at least one house amenity (what the house has to offer)<span className='text-pinkish'>*</span></p>
          <div className='flex gap-x-5'>
          <button type='button' value='swimming pool' className='btn-amenities'>
            <Svgicons action ='pool'/>
            <p className='p-0 m-0 text-[#101010] font-normal text-sm'>swimming pool</p>
              
            </button>
            <button value='television set' className='btn-amenities'>
            <Svgicons action ='television'/>
              <p className='p-0 m-0 text-[#101010] font-normal text-sm'>television set</p>
            </button>
            <button value='security' className='btn-amenities'>
            <Svgicons action ='security'/>
              <p className='p-0 m-0 text-[#101010] font-normal text-sm'>Security</p>
            </button>
            <button value='garden'className='btn-amenities'>
            <Svgicons action ='garden'/>
              <p className='p-0 m-0 text-[#101010] font-normal text-sm'>garden</p>
            
            </button>
            <button value='air conditioner' className='btn-amenities'>
            <Svgicons action ='air'/>
              <p className='p-0 m-0 text-[#101010] font-normal text-sm'>Air conditioner</p>
            </button>
            <button value='wifi' className='btn-amenities'>
            <Svgicons action ='wifi'/>
              <p className='p-0 m-0 text-[#101010] font-normal text-sm'>wifi</p>
            </button>
            <button value='exercise tool' className='btn-amenities'>
            <Svgicons action ='tool'/>
              <p className='p-0 m-0 text-[#101010] font-normal text-sm'>exercise tools</p>
            </button>
          </div>
         </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Property