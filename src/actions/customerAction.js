import { DELETE_CUSTOMER, LIST_CUSTOMER, LIST_CUSTOMER_BY_ID } from './../constant'

export const onFetchCustomerData = (result) => {
    return {
        type: LIST_CUSTOMER,
        payload: result
    }
}

export const onFetchCustomerDataByID = (result) => {
    return {
        type: LIST_CUSTOMER_BY_ID,
        payload: result
    }
}

export const onEditCustomerDataByID = (result) => {
    return {
        type: LIST_CUSTOMER_BY_ID,
        payload: result
    }
}


export const onDeleteCustomerDataByID = (result) => (
    {
        type: DELETE_CUSTOMER,
        payload: result
    }
)