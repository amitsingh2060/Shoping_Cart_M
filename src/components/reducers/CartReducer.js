
const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_ITEM ="REMOVE_ITEM"
const SUB_QUANTITY = "SUB_QUANTITY"
const ADD_QUANTITY = "ADD_QUANTITY"

const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:"https://cdn.chv.me/images/thumbnails/Refurbished-Apple-iPhone-6-UeovpXsn.jpg.thumb_400x400.jpg"},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1VuhX7ZU_WfoXRX3g-Ctccg-QadcA0sh1lAiXyV_mxIT-jrtsA&s"},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img:"https://jshopping.in/images/detailed/287/Wallet-Bag-Case-Cover-For-iPhone-SE-Phone-Case-Apple-iPhone-5s-Cover-Flip-Leather-Luxury_294q-bs.jpg"}
        // {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:"https://jshopping.in/images/detailed/287/Wallet-Bag-Case-Cover-For-iPhone-SE-Phone-Case-Apple-iPhone-5s-Cover-Flip-Leather-Luxury_294q-bs.jpg"},
        // {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img:"https://jshopping.in/images/detailed/287/Wallet-Bag-Case-Cover-For-iPhone-SE-Phone-Case-Apple-iPhone-5s-Cover-Flip-Leather-Luxury_294q-bs.jpg"},
        // {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img:"https://jshopping.in/images/detailed/287/Wallet-Bag-Case-Cover-For-iPhone-SE-Phone-Case-Apple-iPhone-5s-Cover-Flip-Leather-Luxury_294q-bs.jpg"}
    ],

    addedItems:[],
    total: 0

}

const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
    return state
}

export default cartReducer