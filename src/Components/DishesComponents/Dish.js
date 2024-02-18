
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) =>{
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    return (
        <div>
            <img src={`./${dish.img}.jpg`} alt='food'/>
            <h1>{dish.name}</h1>
            <p>${dish.price}</p>
            <ChangeQuantity quantity = {quantity} setQuantity={setQuantity}/>
            <button onClick={()=>{dispatch(addItemToCart({dish, quantity}))}}>Add to cart</button>
        </div>
    )
}
export default Dish;