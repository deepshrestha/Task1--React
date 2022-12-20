import React from "react";
import { useHistory } from "react-router-dom";
import { errorMessage } from "./../../FormValidator";

const CustomerEdit = ({
  customerData,
  onHandleSubmit,
  onHandleChange,
  onHandleBlur,
  errors
}) => {
  const history = useHistory();

  const onCancelButton = () => {
    history.push({
      pathname: "/customer/list"
    });
  };
  return (
    <>
      {customerData && (
        <div className="content m-5">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Edit Customer</h3>
            </div>
            <form onSubmit={onHandleSubmit}>
              <div className="card-body">
                <input
                  type="hidden"
                  name="CustomerID"
                  value={customerData.CustomerID}
                  readOnly={true}
                />
                <div className="form-group">
                  <label htmlFor="inputCustomername">Customer Name</label>
                  <input
                    type="text"
                    name="CustomerName"
                    placeholder="Customer Name"
                    className="form-control"
                    defaultValue={customerData.CustomerName}
                    onChange={onHandleChange}
                    onBlur={onHandleBlur}
                  />
                  <div className="text-danger">
                    {errors.CustomerName.length > 0 &&
                      errorMessage(errors.CustomerName)}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputZone">Zone</label>
                  <input
                    type="text"
                    name="Zone"
                    placeholder="Zone"
                    className="form-control"
                    defaultValue={customerData.Zone}
                    onChange={onHandleChange}
                    onBlur={onHandleBlur}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputCity">City</label>
                  <input
                    type="text"
                    name="City"
                    placeholder="City"
                    className="form-control"
                    id="inputCity"
                    defaultValue={customerData.City}
                    onChange={onHandleChange}
                    onBlur={onHandleBlur}
                  />
                  <div className="text-danger">
                    {errors.City.length > 0 && errorMessage(errors.City)}
                  </div>
                </div>
                <div className="col-12 p-2">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger m-2"
                    onClick={onCancelButton}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerEdit;
