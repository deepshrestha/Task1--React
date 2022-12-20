import React from "react";
import { errorMessage } from "./../../FormValidator";

const CustomerAdd = ({
  onHandleSubmit,
  onHandleChange,
  onHandleBlur,
  errors
}) => {
  return (
    <div className="content m-5">
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Add Customer</h3>
        </div>
        <form onSubmit={onHandleSubmit}>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="inputCustomername">Customer Name</label>
              <input
                type="text"
                name="CustomerName"
                placeholder="Customer Name"
                className="form-control"
                id="inputCustomername"
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
                id="inputZone"
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
                onChange={onHandleChange}
                onBlur={onHandleBlur}
              />
              <div className="text-danger">
                {errors.City.length > 0 && errorMessage(errors.City)}
              </div>
            </div>
            <div className="col-12 p-2">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerAdd;
