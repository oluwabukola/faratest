import React from "react";

interface ISelectArea {
    form: any;
    
    name: string;
    id: string;
    rows?:number;
    cols?:number;
    label: string | (() => React.ReactNode);
   }
   const SelectArea = ({ form, rows, cols, name, id, label}: ISelectArea) => {
    return (
      <div>
        <label htmlFor={id} className="input-primary">
          {typeof label === "string" ? label : label()}
        </label>
        <textarea
          value={form?.values ? form?.values[name] : ""}
          onChange={form?.handleChange}
          onBlur={form?.handleBlur}
          id={id}
          rows={rows}
          cols={cols}
          name={name}
        >
        </textarea>
        {form?.errors && form?.errors[name] && (
          <p className="text-pinkish">{form?.errors[name]}</p>
        )}
      </div>
    );
   };
   
   
   export default SelectArea;

   