import {useSelector} from 'react-redux';
import {removeToCart} from '../Services/Actions/Actions'
import { useDispatch } from 'react-redux';


export default function Cart(props) {
     const cartData = useSelector((state)=>state.cardItems)
  const dispatch = useDispatch()


  const amount = cartData.length && cartData.map(e=>e.cartData.price*e.cartData.quantity).reduce((prev,next)=>{return(prev+next)})
  
  
  return (
    <div className={`absolute -mt-96  bg-[#F8e0a6] z-30  w-[816px] ${props.close ?"-translate-x-[67px]":"translate-x-full"} ease-in-out duration-700`} >
 
     
      <h1 className="flex items-center justify-center text-[#583101] text-2xl  font-[Playfair]">CART</h1>


{cartData.length == 0 ?<h1 className="flex text-9xl justify-center text-[#ebc08c] ">
          Empty Cart
        </h1>:(
     <div>
        {cartData.map((element,index)=>{
          return(
            <div className='p-1'>
        <div className="flex items-center justify-start border-2 bg-[#583101] border-[#583101]" key={index} >
          <img src={element.cartData.image} className="w-28 p-4"/>
          <h1 className="p-4 text-xl font-[Playfail] text-[#F8e0a6] ">{element.cartData.name}</h1>
          <p className="pt-6 text-base font-[Playfail] text-[#F8e0a6]">({element.cartData.type})</p>
          <p className="pt-6 text-xl flex ml-16 font-[Playfail] text-[#F8e0a6]">{element.cartData.quantity} * Rooms</p>
          <h1 className="p-4 text-3xl font-[Playfail] ml-auto mr-11 text-white">{element.cartData.price*element.cartData.quantity}</h1>
          <img src="garbage.png" className='h-8 mr-5' onClick={()=>{dispatch(removeToCart(element.cartData.id))}}/>
        </div>
        </div>
          )})} 
      </div>
      ) }

      <div>
        <div className="border-2 w-full items-center flex border-solid border-black mt-10 p-4 bg-[#583101]">
          <h1 className="text-4xl font-[Playfair] font-semibold p-5 text-[#F8e0a6]">₹ {amount}</h1>
          <h1 className="text-2xl mt-9 text-[#F8e0a6] font-[Poppins]">Total Payable Amount</h1>
          <a className="bg-[#F8e0a6] flex items-center p-3 h-fit rounded-md ml-auto mr-6">
            <h1 className="text-base font-[Playfair]  text-[#583101]">Proceed To PAY</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
