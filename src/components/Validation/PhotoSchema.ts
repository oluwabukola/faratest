import * as Yup from "yup";

export const PhotoSchema = Yup.object().shape({
    // address: Yup.string()
    //   .required('Field Name is required'),
    photo: Yup.string()
      .required('Field Name is required'),
    //   city: Yup.string()
    //   .required('Field Name is required'),
    //   apartment: Yup.string()
      
     
  });