
const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_ITEM ="REMOVE_ITEM"
const SUB_QUANTITY = "SUB_QUANTITY"
const ADD_QUANTITY = "ADD_QUANTITY"

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
         id 
        }
    }

export const removeItem= (id)=>{
        return{
            type:REMOVE_ITEM,
             id 
            }
        }

export const subtractQuantity= (id)=>{
            return{
                type:SUB_QUANTITY,
                 id 
                }
            }

export const addQuantity= (id)=>{
                return{
                    type:ADD_QUANTITY,
                     id 
                    }
                }