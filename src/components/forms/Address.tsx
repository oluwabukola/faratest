import React from 'react';
import { Formik, Form, Field } from 'formik';
import SelectInput from '../Iselect';
import TextInput from '../Itext';


export const Address = () => {
  return (
  <div className=''>

      <div className='px-[63px] py-5 box-border'>
        <p className='m-0 p-0 text-[32px] font-bold text-miniblack capitalize mb-5'>Property details</p>

      <div className='flex justify-between gap-x-14 '>
        <div className='basis-1/2'>
        <Field
             name="address"
             component={({ form }:any) => {
               return (
                 <TextInput
                   form={form}
                   name="address"
                   id="address"
                   placeholder='Property Address'
                   type='text'
                   
                   label={() => (
                     <label htmlFor="address" className="input-primary">
                       search address<span className='text-pinkish'>*</span>
                     </label>
                   )}
                 />
               );
             }}
           />
     
      <Field
             name="state"
             component={({ form }: any) => {
               return (
                 <SelectInput
                   form={form}
                   name="state"
                   id="state"
                   my="State"
                   options={[
                     { label: "Oyo", value: "Oyo" },
                     { label: "Anambra", value: "Anambra" },
                     { label: "Bauchi", value: "Bauchi" },

                   ]}
                   label={() => (
                     <label htmlFor="state" className="input-primary">
                       state<span className="text-pinkish">*</span>
                     </label>
                   )}
                 />
               );
             }}
           />
        </div>
        <div className='basis-1/2'>
        <Field
             name="city"
             component={({ form }: any) => {
               return (
                 <SelectInput
                   form={form}
                   name="city"
                   id="city"
                   my="city"
                   options={[
                     { label: "Badagry", value: "Badagry" },
                     { label: "Ikeja", value: "Ikeja" },
                     { label: "Epe", value: "Epe" },

                   ]}
                   label={() => (
                     <label htmlFor="state" className="input-primary">
                       city<span className="text-pinkish">*</span>
                     </label>
                   )}
                 />
               );
             }}
           />

<Field
             name="apartment"
             component={({ form } : any) => {
               return (
                 <TextInput
                   form={form}
                   name="apartment"
                   id="apartment"
                   placeholder='1'
                   type='text'
                   
                   label={() => (
                     <label htmlFor="apartment" className="input-primary">
                       apartment number
                     </label>
                   )}
                 />
               );
             }}
           />
     
        </div>
      </div>
      </div>
      
      </div>
  )
}
