import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CustomerEdit from "../components/customer/CustomerEdit";
import { useFormValidator } from "./../FormValidator";
import { onFetchCustomerDataByID } from "../actions/customerAction";
import { useHttp } from "./../hooks/useHTTP";

const EditCustomerContainer = ({ match }) => {

  let initialState = {
    mode: "U",
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

  const { data } = useHttp();
  const { onHandleChange, onHandleSubmit, fields, setFields } = useFormValidator(initialState);

  const { errors } = fields;

  const { id } = match.params;

  const customerData = useSelector(state => {
    console.log(state)
    return {
      customer: state.customerReducer.customers.length > 0 
        ? state.customerReducer.customers.find(customer => customer.CustomerID === +id)
        : data?.find(customer => customer.CustomerID === +id)
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onFetchCustomerDataByID(customerData));
  }, []);

  const onEditustomerDataHandler = (e) => {
    e.preventDefault();
    if(onHandleSubmit(e)){
      // perform edit operation
    }
  };

  return (
    <CustomerEdit
      customerData={customerData.customer}
      onHandleSubmit={onEditustomerDataHandler}
      onHandleChange={onHandleChange}
      errors={errors}
    />
  );
};

export default EditCustomerContainer;
