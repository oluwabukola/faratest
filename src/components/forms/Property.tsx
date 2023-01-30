import React, {useState} from 'react'
import { Formik, Form, Field, FormikConfig, FormikValues } from 'formik';
import { PropertySchema } from '../Validation/propertySchema';
import { AddressSchema} from '../Validation/AddressSchema';
import { PhotoSchema } from '../Validation/PhotoSchema';

import Svgicons from '../Svgicons';
import SelectInput from '../Iselect';
import SelectArea from '../Iarea';
import TextInput from '../Itext';
import { Address } from './Address';
import Detail from './Detail';

 const arr = [
  {id: 1, name:"swimming pool", icon: <Svgicons action='pool'/>},
  {id:2, name:"Television set", icon: <Svgicons action='television' />},
  {id:3, name:"security", icon: <Svgicons action='security' />},
  {id:4, name: "Garden", icon: <Svgicons action='garden' />},
  {id:5, name: "Air conditioner", icon: <Svgicons action='air' />},
  {id:6, name: "wifi", icon: <Svgicons action='wifi' />},
  {id:7, name: "Exercise tool", icon: <Svgicons action='tool' />},
 ]

 interface MyFormValues {
   category: string;
 }
const Property = () => {
  const [amenities, setAmenities] = useState<any[]>([]);
  

  const handleItemSelect =(item : any) => {
    
    if(amenities.length !== 0 && amenities.includes(item)){
     
      amenities.filter(each => each.id !== item.id)  
    }
    else{
      setAmenities(prev => [...prev,item] );

    }
   
  }
  
  return (
    <div className=''>
      <FormikStepper
       initialValues={{
         category: "",
         name: "",
         beds: "",
         finance: "",
         condition: "",
         service:"",
         about: "",
         amount: "",
         duration:'',
         recurringamount:"",
         description: "",
         state:"",
         address:"",
         city: "",
         apartment:"",
         amenities:amenities
         
       }}
       onSubmit={async (values) => {
         console.log("values", values);
       }}
>
        <FormikStep validationSchema={PropertySchema} label="First">
        <div className='px-[63px] py-5 box-border'>
        <p className='m-0 p-0 text-[32px] font-bold text-miniblack capitalize mb-5'>Property details</p>

          <div className='flex justify-between gap-x-14 '>
            <div className='basis-1/2'>
            <Field
             name="category"
             component={({ form } : any) => {
               return (
                 <SelectInput
                   form={form}
                   name="category"
                   id="category"
                   my="property category"
                   options={[
                     { label: "Tangible", value: "Tangible" },
                     { label: "Public", value: "Public" },
                     { label: "Private", value: "Private" },

                   ]}
                   label={() => (
                     <label htmlFor="category" className="input-primary">
                       property category<span className="text-pinkish">*</span>
                     </label>
                   )}
                 />
               );
             }}
           />


<Field
             name="name"
             component={({ form } :any) => {
               return (
                 <SelectInput
                   form={form}
                   name="name"
                   id="name"
                   my='Property Name'
                   options={[
                      
                     { label: "Oasis", value: "Oasis" },
                     { label: "Nem", value: "Nem" },
                     { label: "Land", value: "Land" },

                   ]}
                   label={() => (
                     <label htmlFor="name" className="input-primary">
                       property name<span className="text-pinkish">*</span>
                     </label>
                   )}
                 />
               );
             }}
           />

<Field
             name="beds"
             component={({ form } :any) => {
               return (
                 <SelectInput
                   form={form}
                   name="beds"
                   id="beds"
                   my='0'
                   options={[
                      
                     { label: "1", value: "1" },
                     { label: "2", value: "2" },
                     { label: "3", value: "3" },

                   ]}
                   label={() => (
                     <label htmlFor="beds" className="input-primary">
                       Number of beds<span className="text-pinkish">*</span>
                     </label>
                   )}
                 />
               );
             }}
           />

<Field
             name="finance"
             component={({ form }: any) => {
               return (
                 <SelectInput
                   form={form}
                   name="finance"
                   id="finance"
                   my='No'
                   options={[
                      
                     { label: "Yes", value: "Yes" },
                     { label: "No", value: "No" },
                    
                   ]}
                   label={() => (
                     <label htmlFor="finance" className="input-primary">
                       Is this a Blura finance property (Yes/No)<span className="text-pinkish">*</span>
                     </label>
                   )}
                 />
               );
             }}
           />
            </div>
            <div className='basis-1/2'>
            <Field
             name="condition"
             component={({ form }: any) => {
               return (
                 <SelectInput
                   form={form}
                   name="condition"
                   id="condition"
                   my='Poperty Type'
                   options={[
                      
                     { label: "Work space", value: "Work space" },
                     { label: "Event centre", value: "Event Center" },
                     { label: "Location", value: "Location" },
                   ]}
                   label={() => (
                     <label htmlFor="finance" className="input-primary">
                       property condition<span className="text-pinkish">*</span>
                     </label>
                   )}
                 />
               );
             }}
           />
           

           <Field
             name="service"
             component={({ form }:any) => {
               return (
                 <TextInput
                   form={form}
                   name="service"
                   id="service"
                   placeholder='#0'
                   type='text'
                   
                   label={() => (
                     <label htmlFor="service" className="input-primary">
                       service charge(#)
                     </label>
                   )}
                 />
               );
             }}
           />
          
          <Field
             name="about"
             component={({ form }: any) => {
               return (
                 <SelectArea
                   form={form}
                   name="about"
                   id="about"
                   rows={5} 
                   cols={15}
                   
                   label={() => (
                     <label htmlFor="about" className="input-primary">
                       Description(About Property)<span className='text-pinkish'>*</span>
                     </label>
                   )}
                 />
               );
             }}
           />
           
         
            </div>
          </div>
          </div>
          <div className='w-full border border-solid border-grey3'></div>
          <div className='px-[63px] py-5 box-border'>
          <p className='m-0 p-0  text-[32px] font-bold text-miniblack capitalize my-5'>Blura finace</p>

         <div className='flex justify-between gap-x-14'>
         <div className='basis-1/2'>
         <Field
             name="service"
             component={({ form }: any) => {
               return (
                 <TextInput
                   form={form}
                   name="amount"
                   id="amount"
                   placeholder='#0'
                   type='text'
                   
                   label={() => (
                     <label htmlFor="amount" className="input-primary">
                       Amount to be paid(Part Payment)<span className='text-pinkish'>*</span>
                     </label>
                   )}
                 />
               );
             }}
           />
           <Field
             name="duration"
             component={({ form }: any) => {
               return (
                 <SelectInput
                   form={form}
                   name="duration"
                   id="duration"
                   my="0"
                   options={[
                     { label: "1", value: "1" },
                     { label: "2", value: "2" },
                     { label: "3", value: "3" },
                     { label: "4", value: "4" },


                   ]}
                   label={() => (
                     <label htmlFor="duration" className="input-primary">
                       spread duration(monthly)<span className="text-pinkish">*</span>
                     </label>
                   )}
                 />
               );
             }}
           />
         
         <Field
             name="recurringamount"
             component={({ form }: any) => {
               return (
                 <TextInput
                   form={form}
                   name="recurringamount"
                   id="recurringamount"
                   placeholder="0"
                   type='text'
                   label={() => (
                     <label htmlFor="recurringamount" className="input-primary">
                       recurring amount(monthly)<span className="text-pinkish">*</span>
                     </label>
                   )}
                 />
               );
             }}
           />
          </div>
          <div className='basis-1/2 box-border'>
          
             <label htmlFor="description" className='input-primary'>Description</label>
            <textarea  id='description' name='description' className='border border-solid border-grey2 rounded-lg  h-[232px]'></textarea> 
            
          </div>
         </div>
         </div>
         <div className='w-full border border-solid border-grey3'></div>
         <div className='px-[63px] pb-5' >
          <p className='m-0 p-0  text-[32px] font-bold text-miniblack capitalize mt-5 mb-2'>Amenities<span className='text-base'>(0/7)</span></p>
          <p className='m-0 p-0 text-base font-semibold text-minigrey pb-2'>Pick at least one house amenity (what the house has to offer)<span className='text-pinkish'>*</span></p>
          <div className='flex gap-x-5' >
         { arr.map((item) => {
          return <>
          
          <button type='button'  value={item.name} onClick={() => handleItemSelect(item)} className={`btn-amenities ${amenities.includes(item) && 'btn-selected'  } `} key={item.id}>
            {item.icon}
            <p className='p-0 m-0 text-[#101010] font-normal text-sm'>{item.name}</p>
            </button>
            </>
         })
}
            
          </div> 
         </div>
        </FormikStep >
        <FormikStep  validationSchema={AddressSchema} label="second">
          <Address />
        
        </FormikStep>
        <FormikStep  validationSchema={PhotoSchema} label="third">
          <Detail />
          </FormikStep>
      </FormikStepper>
    </div>
  )
}

export default Property


export interface FormikStepProps
 extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
 label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
 }
 
 
 export function FormikStepper({
  children,
  ...props
 }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(
    children as React.ReactNode
  ) ;
  const [step, setStep] = useState(0);
  const currentChild: any = childrenArray[step];
  const [completed, setCompleted] = useState(false);
 
 const val = currentChild.props.validationSchema;

  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  

 
 
  return (
    <Formik
      {...props}
      validationSchema={val}
      onSubmit={async (values, helpers) => {
        
        
 
        if (isLastStep()) {
          props.onSubmit(values, helpers);
          console.log(values);
          console.log("fir step", isLastStep());
          setCompleted(true);
        } else {
          console.log(values);
          setStep((s) => s + 1);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          {currentChild}
          <div className='w-full flex justify-center gap-x-5 my-5'>
          {step !== 0 ? <button type="button" className='btn-back' 
           onClick={() => setStep((s) => s - 1)}>
            back</button> : null}
          <button type="submit" 
          className='btn-next'>{isLastStep() ? "Log data" : "next"}</button>
          </div>
        </Form>
      )}
    </Formik>
  );
 }
 