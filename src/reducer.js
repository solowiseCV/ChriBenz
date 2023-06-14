 export const initialState= {
    basket: [
    ],

 }
const reducer = ( state, action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic to add to basket
            return {
                ...state,
            basket:[...state.basket,action.item]
            }
          
        case 'REMOVE_FROM_BASKET': 
        //logic to remove from basket
        let newBasket =[...state.basket]
        const index = state.basket.findIndex((basketItem)=>
            basketItem.id === action.id
        );
            if(index >= 0){
                //item exist so remove
                newBasket.splice(index,1)
            }else{
                console.warn(`
                cant remove product (id: ${action.id}) doesnt exists..
                `)
            }
        
        return{
            ...state, basket:newBasket
        }
      
        
        default:
            return state; 

    }
 }
 export default reducer;