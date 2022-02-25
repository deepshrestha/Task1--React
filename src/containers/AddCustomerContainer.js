import React from "react";
import CustomerAdd from "../components/customer/CustomerAdd";
import { useFormValidator } from "./../FormValidator";

const AddCustomerContainer = () => {
  let initialState = {
    mode: "I",
    CustomerName: "",
    Zone: "",
    City: "",
    errors: {
      CustomerName: "",
      City: "",
    },
  };

  const { onHandleChange, onHandleSubmit, onHandleBlur, fields } =
    useFormValidator(initialState);

  const { errors } = fields;

  const onAddCustomerDataHandler = (event) => {
    event.preventDefault();
    if (onHandleSubmit(event)) {
      /* call apiHandler to save data */
      console.log(fields);
    }
  };

  return (
    <CustomerAdd
      onHandleSubmit={onAddCustomerDataHandler}
      onHandleChange={onHandleChange}
      onHandleBlur={onHandleBlur}
      errors={errors}
    />
  );
};

export default AddCustomerContainer;
