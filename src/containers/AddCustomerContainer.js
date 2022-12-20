import React from "react";
import CustomerAdd from "../components/customer/CustomerAdd";
import { useFormValidator } from "./../FormValidator";

const AddCustomerContainer = () => {
  let initialState = {
    mode: "I",
    CustomerID: "",
    CustomerName: "",
    City: "",
    Zone: "",
    errors: {
      CustomerID: "",
      CustomerName: "",
      City: "",
      Zone: "",
    },
  };

  const { onHandleChange, onHandleSubmit, onHandleBlur, fields } = useFormValidator(initialState);

  const { errors } = fields;

  const onAddCustomerDataHandler = (event) => {
    event.preventDefault();
    if (onHandleSubmit(event)) {
      // perform add operation
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
