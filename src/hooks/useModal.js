import { useState } from 'react';
import { useFormValidator, errorMessage } from "easy-react-form-validator";

export const useModal = (modalState) => {
  const [visible, setVisible] = useState(false);

  const { onHandleChange, onHandleSubmit, onHandleBlur, onHandleFileUpload, setFields, fields } =
    useFormValidator(modalState); 
  
  const toggle = () => {
    setVisible(!visible);
    setFields(modalState);
  }

  return {
    toggle, 
    visible,
    onHandleChange, 
    onHandleSubmit, 
    onHandleBlur, 
    onHandleFileUpload,
    errorMessage,
    fields,
  }
};