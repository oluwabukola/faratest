import * as Yup from "yup";

export const PropertySchema = Yup.object().shape({
    category: Yup.string()
      .required('Field Name is required'),
    name: Yup.string()
      .required('Field Name is required'),
      beds: Yup.string()
      .required('Field Name is required'),
      finance: Yup.string()
      .required('Field Name is required'),
      condition: Yup.string()
      .required('Field Name is required'),
    
  });