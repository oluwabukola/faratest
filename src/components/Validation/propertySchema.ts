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
      service: Yup.number(),
      about: Yup.string()
      .required('Field Name is required'),
      amount: Yup.string()
      .required('Field Name is required'),
      duration: Yup.string()
      .required('Field Name is required'),
      recurringamount: Yup.number()
      .required('Field Name is required'),
      description: Yup.string(),
      // amenities: Yup.array().required('At least one amenity must be selected')
  });