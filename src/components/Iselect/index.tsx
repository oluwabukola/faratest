import React from "react";

interface ISelectInput {
    form: any;
    options: { label: string; value: string }[];
    name: string;
    id: string;
    my: string
    label: string | (() => React.ReactNode);
   }
   const SelectInput = ({ form, options, name, id, label, my }: ISelectInput) => {
    return (
      <div>
        <label htmlFor={id} className="input-primary">
          {typeof label === "string" ? label : label()}
        </label>
        <select
          value={form?.values ? form?.values[name] : ""}
          onChange={form?.handleChange}
          onBlur={form?.handleBlur}
          id={id}
          name={name}
          className=""
        >
          <option>{my}</option>
          {options.map((option) => (
            <option value={option?.value} key={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
        {form?.errors && form?.errors[name] && (
          <p className="text-pinkish">{form?.errors[name]}</p>
        )}
      </div>
    );
   };
   
   
   export default SelectInput;

   