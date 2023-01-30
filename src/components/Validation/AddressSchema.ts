import * as Yup from "yup";

export const AddressSchema = Yup.object().shape({
    address: Yup.string()
      .required('Field Name is required'),
    state: Yup.string()
      .required('Field Name is required'),
      city: Yup.string()
      .required('Field Name is required'),
      apartment: Yup.number()
      
     
  });

  
  