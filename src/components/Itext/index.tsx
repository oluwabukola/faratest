import React from "react";

interface ITextInput {
    form: any;
    
    name: string;
    id: string;
    placeholder: string,
    type:'text'| 'number' | 'password',
    label: string | (() => React.ReactNode);
   }
   const TextInput = ({ form, name, id, label, placeholder, type }: ITextInput) => {
    return (
      <div>
        <label htmlFor={id} className="input-primary">
          {typeof label === "string" ? label : label()}
        </label>
        <input
          value={form?.values ? form?.values[name] : ""}
          onChange={form?.handleChange}
          onBlur={form?.handleBlur}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          className=""
        />
          
        {form?.errors && form?.errors[name] && (
          <p className="text-pinkish">{form?.errors[name]}</p>
        )}
      </div>
    );
   };
   
   
   export default TextInput;

   