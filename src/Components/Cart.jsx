import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'


const Cart = (props) => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();



    return (
      
        <div  >
            <Navbar mode = {props.mode} toggleMode = {props.toggleMode}  />

        {items.map((item, index) => 
        {
            return (<>
                <h1 className="text-center mt-3">Booked Car </h1>

                <div className="container1">
                    <div className="card1">
                        <div><img src={item.img} key={index} alt="" srcset="" /></div>
                        <div><h2>{item.title}</h2></div>
                        <div>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>{item.specs}  </p>
                            <p>{item.rating}  </p>
                            <p>{item.price}  </p>
                        </div>
                        <div>
                           <Link to="/cont"> <button className="btn btn-success" >Confirm Test Drive</button></Link>
                        </div>

                    </div>
                    
                </div>

             


                



            </>
            )
        })}
    </div>

      


    )
}

export default Cart