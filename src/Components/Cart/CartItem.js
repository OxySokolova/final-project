import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
    
    const CartItem = ({cartItem}) => {
    //console.log(cartItem);

    const dishes = dataDishes.find(item => item.id === cartItem.dishId)
    //console.log(dishes);

    const dispatch = useDispatch();

    return (  
    <div>
        <p>{dishes.name}</p>
        <p>{cartItem.quantity} portion(s)</p>
        <p>Price: ${dishes.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItem: cartItem.id}))}>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png " alt="icon"/>
        </span>
    </div>)
}
export default CartItem;