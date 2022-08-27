import  Axios  from 'axios';
import * as types from './actionTypes';

export const fetchDataRequest=(payload)=>({
    type:types.PHONE_DATA_REQUEST,
    payload
})


export const fetchDataSuccess=(payload)=>({
    type:types.PHONE_DATA_SUCCESS,
    payload
})

export const fetchDataFailure=(payload)=>({
    type:types.PHONE_DATA_FAILURE,
    payload
})

export const fetchData=(payload)=>{
    return (dispatch)=>{
        dispatch(fetchDataRequest());
        Axios.get(`https://bestbuy-server.herokuapp.com/api/phone`,{
            params:{
                ...payload
            }
        })
        .then((r)=>dispatch(fetchDataSuccess(r.data)))
        .catch(err=>dispatch(fetchDataFailure(err.data)))
    }
}

export const fetchlaptopDataRequest=(payload)=>({
    type:types.LAPTOP_DATA_REQUEST,
    payload
})


export const fetchlaptopDataSuccess=(payload)=>({
    type:types.LAPTOP_DATA_SUCCESS,
    payload
})

export const fetchlaptopDataFailure=(payload)=>({
    type:types.LAPTOP_DATA_FAILURE,
    payload
})

export const fetchLaptopData=(payload)=>{
    return (dispatch)=>{
        dispatch(fetchlaptopDataRequest());
        Axios.get('https://bestbuy-server.herokuapp.com/api/laptop',{
            params:{
                ...payload
            }
        })
        .then((r)=>dispatch(fetchlaptopDataSuccess(r.data)))
        .catch(err=>dispatch(fetchlaptopDataFailure(err.data)))
    }
}

export const fetchTVDataRequest=(payload)=>({
    type:types.TV_DATA_REQUEST,
    payload
})


export const fetchTVDataSuccess=(payload)=>({
    type:types.TV_DATA_SUCCESS,
    payload
})

export const fetchTVDataFailure=(payload)=>({
    type:types.TV_DATA_FAILURE,
    payload
})

export const fetchTVData=(payload)=>{
    return (dispatch)=>{
        dispatch(fetchTVDataRequest());
        Axios.get('https://bestbuy-server.herokuapp.com/api/tvdata',{
            params:{
                ...payload
            }
        })
        .then((r)=>dispatch(fetchTVDataSuccess(r.data)))
        .catch(err=>dispatch(fetchTVDataFailure(err.data)))
    }
}


export const addProductCartRequest=(payload)=>({
    type:types.ADD_PRODUCT_CART_REQUEST,
    payload
})
export const addProductCartSuccess=(payload)=>({
    type:types.ADD_PRODUCT_CART_SUCCESS,
    payload
})
export const addProductCartFailure=(payload)=>({
    type:types.ADD_PRODUCT_CART_FAILURE,
    payload
})
export const addProductCart=(payload)=>(dispatch)=>{
    console.log("cartDetails:",payload);
    dispatch(addProductCartRequest())
    Axios.post('https://bestbuy-server.herokuapp.com/api/cart',payload)
    .then(r=>dispatch(addProductCartSuccess(r.data)))
    .catch(e=>dispatch(addProductCartFailure(e.data)))
}

export const getProductCartRequest=(payload)=>({
    type:types.GET_PRODUCT_CART_REQUEST,
    payload
})
export const getProductCartSuccess=(payload)=>({
    type:types.GET_PRODUCT_CART_SUCCESS,
    payload
})
export const getProductCartFailure=(payload)=>({
    type:types.GET_PRODUCT_CART_FAILURE,
    payload
})
export const getProductCart=(payload)=>(dispatch)=>{
    
    dispatch(getProductCartRequest())
    Axios.get('https://bestbuy-server.herokuapp.com/api/cart',payload)
    .then(r=>dispatch(getProductCartSuccess(r.data)))
    .catch(e=>dispatch(getProductCartFailure(e.data)))
}


