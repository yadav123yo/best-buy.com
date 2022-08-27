import * as types from './actionTypes'

const initState={
    tvdata:[],
    phone:[],
    laptop:[],
    cart:[],
    error:'',
    loading:false
}

 export const productReducer=(state=initState,action)=>{
    const {type ,payload}= action;
    switch(type){
        case types.PHONE_DATA_REQUEST:
            return{
                ...state,
                error:'',
                loading:true             
            }
            case types.PHONE_DATA_SUCCESS:
            return{
                ...state,
                phone:payload,
                error:'',
                loading:false            
            }
            case types.PHONE_DATA_FAILURE:
            return{
                ...state,
                error:payload,
                loading:false             
            }
            case types.LAPTOP_DATA_REQUEST:
            return{
                ...state,
                error:'',
                loading:true             
            }
            case types.LAPTOP_DATA_SUCCESS:
            return{
                ...state,
                laptop:payload,
                error:'',
                loading:false            
            }
            case types.LAPTOP_DATA_FAILURE:
            return{
                ...state,
                error:payload,
                loading:false             
            }
            case types.TV_DATA_REQUEST:
                return{
                    ...state,
                    error:'',
                    loading:true             
                }
                case types.TV_DATA_SUCCESS:
                return{
                    ...state,
                    tvdata:payload,
                    error:'',
                    loading:false            
                }
                case types.TV_DATA_FAILURE:
                return{
                    ...state,
                    error:payload,
                    loading:false             
                }
                case types.ADD_PRODUCT_CART_REQUEST: {
                    return {
                        ...state,
                        loading: true,
                        error: ''
                    }
                }
                case types.ADD_PRODUCT_CART_SUCCESS: {
                    return {
                        ...state,
                        loading: false,
                        cart: [...state.cart, payload],
                        error: ''
                    }
                }
                case types.ADD_PRODUCT_CART_FAILURE: {
                    return {
                        ...state,
                        loading: false,
                        error: payload
                    }
                }
                case types.GET_PRODUCT_CART_REQUEST: {
                    return {
                        ...state,
                        loading: true,
                        error: ''
                    }
                }
                case types.GET_PRODUCT_CART_SUCCESS: {
                    return {
                        ...state,
                        loading: false,
                        cart: [...payload],
                        error: ''
                    }
                }
                case types.GET_PRODUCT_CART_FAILURE: {
                    return {
                        ...state,
                        loading: false,
                        error: payload
                    }
                }
            default:
                return state;
    }
}