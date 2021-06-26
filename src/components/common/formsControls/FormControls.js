import styles from "./FormControls.module.css"
import React from "react";

export const FormControl = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, children, ...restProps} = props;
  return (
    <FormControl {...props}><input {...input} {...restProps} /></FormControl>
  )
}

export const Input = (props) => {
  const {input, meta, children, ...restProps} = props;
  return (
    <FormControl {...props}><input {...input} {...restProps} /></FormControl>
  )
}

// export const createField = (placeholder, name, validators, component, type) => {
//   <div>
//     <Field placeholder={placeholder} name={name} component={validators} validate={component} type={type}/>
//   </div>
// }
