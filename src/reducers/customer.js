import { DELETE_CUSTOMER, LIST_CUSTOMER, LIST_CUSTOMER_BY_ID } from './../constant'

const initialState = {
    customer: [],
    customers: []
}

const removeCustomerHandler = (customerState, payloadData) => {
    // perform remove operation
    return newState;
}

const listCustomerHandler = (customerState, payloadData) => {
    let newState = {
        ...customerState,
        customers: payloadData
    }
    return newState;
}

const listCustomerByIdHandler = (customerState, payloadData) => {
    let newState = {
        ...customerState,
        customer: payloadData
    }
    return newState;
}

const customerReducer = (state=initialState, action) => {
    switch(action.type){
        case LIST_CUSTOMER:
            return listCustomerHandler(state, action.payload)
        case LIST_CUSTOMER_BY_ID:
            return listCustomerByIdHandler(state, action.payload)
        case DELETE_CUSTOMER:
            return removeCustomerHandler(state, action.payload)
        default:
            return state
    }
}

export default customerReducer