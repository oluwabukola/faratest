import React, {useState} from 'react'
import { Formik, Form, Field, FormikConfig, FormikValues } from 'formik';
import { PropertySchema } from '../Validation/propertySchema';

import Svgicons from '../Svgicons'




 interface MyFormValues {
   category: string;
 }
const Detail = () => {
  return (
    <div>
        <p className='m-0 p-0 text-[32px] font-bold text-miniblack capitalize my-5'>Property details</p>
      <FormikStepper onSubmit={async (values) => {
            
            console.log('values', values);
          }} >
      {/* initialValues={{
            category: '',
            name: '',
            beds: '',
            finance: '',
            condition: '',
          }}
          onSubmit={async (values) => {
            
            console.log('values', values);
          }} */}
          <FormikStep validationSchema={PropertySchema}>
            <div className='basis-1/2'>
          <label htmlFor="category" className='input-primary'>property category<span className='text-pinkish'>*</span></label>
          <select name="category" className=''>
          <option selected>Choose a country</option>
  
       <option value="FR">France</option>
           <option value="DE">Germany</option>
        </select>

           <label htmlFor="name" className='input-primary'>property name<span className='text-pinkish'>*</span></label>
           <select  name='name'placeholder='property name' className=''>
            <option>property</option>
            <option>name</option> 
           </select>

           <label htmlFor="beds" className='input-primary'>number of beds<span className='text-pinkish'>*</span></label>
           <select name='beds' placeholder='property name' className=''>
            <option>property</option>
            <option>name</option> 
           </select>
        
           <label htmlFor="finance" className='input-primary'>Is this a Blura finance property (Yes/No)<span className='text-pinkish'>*</span></label>
           <select name='finance' placeholder='property name' className=''>
            <option>yes</option>
            <option>no</option> 
           </select>
            </div>
            <div className='basis-1/2'>
            <label htmlFor="condition" className='input-primary'>Property Condition<span className='text-pinkish'>*</span></label>
           <select name='condition' placeholder='property type' className=''>
            <option>yes</option>
            <option>no</option> 
           </select>
           
           {/* <label htmlFor="type" className='input-primary'>Service Charge (₦)</label>
           <input type='text' placeholder='#0' className=''/>
           
           <label htmlFor="area" className='input-primary'>Description (About Property)<span className='text-pinkish'>*</span></label>
           <textarea  id='area' rows={5} cols={15}className='border border-solid border-grey2 rounded-lg '></textarea> */}
            </div>
          </FormikStep>
          {/* <div className='w-full border border-solid border-grey3'></div>
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
          <div className='basis-1/2'>
            <label className='input-primary'>description</label>
            <textarea  id='area' rows={5} cols={15}className=''></textarea>
          </div>
         </div>
         <div className='w-full border border-solid border-grey3'></div>
         <div>
          <p className='m-0 p-0  text-[32px] font-bold text-miniblack capitalize mt-5 mb-2'>Amenities<span className='text-base'>(0/7)</span></p>
          <p className='m-0 p-0 text-base font-semibold text-minigrey'>Pick at least one house amenity (what the house has to offer)<span className='text-pinkish'>*</span></p>
          <div className='flex gap-x-5'>
          <button value='swimming pool'>
            <p>swimming pool</p>
              <Svgicons action ='pool'/>
            </button>
            <button value='television set'>
              <p>television set</p>
              <Svgicons action ='television'/>
            </button>
            <button value='security'>
              <p>Security</p>
              <Svgicons action ='security'/>
            </button>
            <button value='garden'>
              <p>garden</p>
              <Svgicons action ='garden'/>
            </button>
            <button value='air conditioner'>
              <p>Air conditioner</p>
              <Svgicons action ='air'/>
            </button>
            <button value='wifi'>
              <p>wifi</p>
              <Svgicons action ='wifi'/>
            </button>
            <button value='exercise tool'>
              <p>exercise tools</p>
              <Svgicons action ='tool'/>
            </button>
            
          </div>
         </div> */}
         <FormikStep >
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
         </FormikStep>
     
      </FormikStepper>
    </div>
  )
}

export default Detail;

export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
   const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);
  console.log('chikdren', children)
  console.log('current child', currentChild)

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik {...props}
     validationSchema={currentChild.props.validationSchema}
     onSubmit={ (values, helpers) => {
      if (isLastStep()) {
         props.onSubmit(values, helpers);
         console.log(values)
         console.log('fir step', isLastStep())
        setCompleted(true);
      } else {
        console.log(values)

        console.log('last step', isLastStep())

        setStep((s) => s + 1);
      }
    }}>
       <Form autoComplete='off'>{children[step]}
      {step !==0 ? <button>back</button> : null} 
      <button  type='submit'>{isLastStep() ? 'Log data' : 'next'}</button>
      </Form>
    </Formik>
  )
}