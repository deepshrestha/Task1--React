import React from "react";
import { useHistory } from "react-router-dom";

const CustomerList = ({ data, onDeleteCustomerDataHandler }) => {
  const history = useHistory();

  const onEditCustomerDataHandler = (id) => {
    history.push(`/customer/edit/${id}`);
  };
  return (
    <div className="content m-5">
      <React.Fragment>
        {data && (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" width="10%">Sno</th>
                <th scope="col">Customer Name</th>
                <th scope="col">City</th>
                <th scope="col">Zone</th>
                <th scope="col" width="15%">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map(customer => {
                return (
                  <tr key={customer.CustomerID}>
                    <td>{customer.CustomerID}</td>
                    <td>{customer.CustomerName}</td>
                    <td>{customer.City}</td>
                    <td>{customer.Zone}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          onEditCustomerDataHandler(customer.CustomerID)
                        }
                      >
                        <i className="fa fa-edit"></i>
                      </button>
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={e =>
                          onDeleteCustomerDataHandler(e, customer.CustomerID)
                        }
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </React.Fragment>
    </div>
  );
};

export default CustomerList;
