import React, { useEffect, useState } from "react";
import CustomerList from "./../components/customer/CustomerList";

const ListCustomerContainer = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    onGetCustomerDataHandler();
  }, []);

  const onGetCustomerDataHandler = () => {

    /* call apiHandler to fetch data */
    let data = [
      {
        CustomerID: 1,
        CustomerName: "Deep Shrestha",
        City: "Lalitpur",
        Zone: "Bagmati",
      },
      {
        CustomerID: 2,
        CustomerName: "Deepak Shrestha",
        City: "Kathmandu",
        Zone: "Bagmati",
      },
    ];
    setCustomers(data);
  };

  const onDeleteCustomerDataHandler = (e, id) => {
    e.preventDefault();
    /* call apiHandler function to delete data*/
    return true;
  };

  return (
    <CustomerList
      data={customers}
      onDeleteCustomerDataHandler={onDeleteCustomerDataHandler}
    />
  );
};

export default ListCustomerContainer;
