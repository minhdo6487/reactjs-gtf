import * as types from './../constants/action_types'


export const getAllProductList = () => {
    return {
        type: types.LIST_ALL
    }
};

export const addProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product: product
    }
};

export const updateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product: product
    }
};

export const deleteProduct = (product) => {
    return {
        type: types.DELETE_PRODUCT,
        product: product
    }
};

export const onToggle = (is_display) => {
    return {
        type: types.ON_TOGGLE_SIDE_BAR,
        is_display
    }
};

// try redux observable
export function fetchData () {
  return {
    type: types.FETCHING_DATA
  }
}

export function getDataSuccess (data) {
    return {
        type: types.FETCHING_DATA_SUCCESS,
        data
    }
}

export function fetchSpecific (id) {
    return {
        type: "FETCHING_SPECIFIC",
        id: id
    }
}

export function fetchSpecificSuccess (payload) {
    return {
        type: "FETCHING_SPECIFIC_PRODUCT",
        payload
    }
}

export function auth (payload) {
    return {
        type: "AUTHENTICATION",
        payload
    }
}

export function fetchFailure (err) {
    return {
        type: types.FETCHING_DATA_FAILURE,
        err: err.response
    }
}