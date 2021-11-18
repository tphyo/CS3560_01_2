import Axios from 'axios';

import { ORDER_SET_TYPE, 
        CATEGORY_LIST_REQUEST,
        CATEGORY_LIST_FAIL, 
        CATEGORY_LIST_SUCCESS, 
        PRODUCT_LIST_REQUEST,
        PRODUCT_LIST_SUCCESS, 
        PRODUCT_LIST_FAIL, 
        ORDER_ADD_ITEM, 
        ORDER_REMOVE_ITEM, 
        ORDER_CLEAR,
        ORDER_SET_PAYMENT_TYPE,
        ORDER_CREATE_REQUEST,
        ORDER_CREATE_FAIL, 
        ORDER_CREATE_SUCCESS,
        ORDER_LIST_REQUEST,
        ORDER_LIST_SUCCESS,
        ORDER_LIST_FAIL,
        SCREEN_SET_WIDTH} from "./constants"

export const setOderType = (dispatch, orderType) => {
    return dispatch({
        type: ORDER_SET_TYPE,
        payload: orderType,
    });
};

// Get list of categories from the server
export const listCategories = async (dispatch) => {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    try {
        const { data } = await Axios.get('/api/categories');
        return dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        return dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.message,
        });
    }
};

// Get list of products from the server
export const listProducts = async (dispatch, categoryName = '') => {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    try {
        const { data } = await Axios.get(`/api/products?category=${categoryName}`);
        return dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
        });
    } catch(error) {
        return dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.message,
        });
    }
};

// Add an item to the order list
export const addToOrder = async (dispatch, item) => {
    return dispatch({
        type: ORDER_ADD_ITEM,
        payload: item,
    });
}

// Remove an item from the order
export const removeFromOrder = async (dispatch, item) => {
    return dispatch({
        type: ORDER_REMOVE_ITEM,
        payload: item,
    });
}

// Clear the order list
export const clearOrder = async (dispatch) => {
    return dispatch({
        type: ORDER_CLEAR,
    });
};

// Set the payment type
export const setPaymentType = async (dispatch, paymentType) => {
    return dispatch({
        type: ORDER_SET_PAYMENT_TYPE,
        payload: paymentType,
    });
}


// Create an order and send it to the server
export const createOrder = async (dispatch, order) => {
    dispatch({ type: ORDER_CREATE_REQUEST });
    try {
        const { data } = await Axios.post('/api/orders', order);
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data,
        });
        dispatch({
            type: ORDER_CLEAR,
        });
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.message,
        });
    }
}

// Get list of orders from the server
export const listOrders = async (dispatch) => {
    dispatch({ type: SCREEN_SET_WIDTH })
    dispatch({ type: ORDER_LIST_REQUEST });
    try {
        const { data } = await Axios.get(`/api/orders`);
        return dispatch({
            type: ORDER_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        return dispatch({
            type: ORDER_LIST_FAIL,
            payload: error.message,
        });
    }
}