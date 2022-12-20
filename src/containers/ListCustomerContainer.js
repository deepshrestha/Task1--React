import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onFetchCustomerData } from "./../actions/customerAction";
import CustomerList from "./../components/customer/CustomerList";
import { useHttp } from "./../hooks/useHTTP";

const ListCustomerContainer = () => {

  const { data } = useHttp();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onFetchCustomerData(data))
  }, [data]);

  const onDeleteCustomerDataHandler = (e, id) => {
    // perform delete operation
    e.preventDefault();
    return true;
  };

  return (
    <CustomerList
      data={data}
      onDeleteCustomerDataHandler={onDeleteCustomerDataHandler}
    />
  );
};

export default ListCustomerContainer;
