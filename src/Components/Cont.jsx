import React, { useState } from 'react'
import Navbar from './Navbar'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'



const Cont = (props) => {

  const change1 = (e) =>{
    
    props.setFname(e.target.value)
    
    console.log(props.fname)

  }


  const change2 = (e) =>{
    props.setLname(e.target.value)

  }


  const change3 = (e) =>{

    props.setAddress(e.target.value)

  }


  const booked = () =>{
    alert("Booked go to bookings")
  }
  





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

  const [value, setValue] = useState()

  return (
    <div className='body'>
      <Navbar mode={props.mode} toggleMode={props.toggleMode} />
      <div className="contact">
        <div className="contact-map">
        {items.map((item, index) => 
        {
            return (<>
        

                <div className="container1 ">
                    <div className="card1 mt-3 pt-4">
                        <div><img src={item.img} key={index} alt="" srcset="" /></div>
                        <div><h2>{item.title}</h2></div>
                        <div>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>{item.specs}  </p>
                            <p>{item.rating}  </p>
                            <p>{item.price}  </p>
                        </div>
                       

                    </div>
                    
                </div>

             


                



            </>
            )
        })}
        </div>
        <div className="contact-form">
          <h1>Only one more step to go.......</h1>
          <form >

            <input value={props.fname} onChange={change1} className='contact-form-txt' type="text"  placeholder='Enter Name' />
            <input value={props.lname} onChange={change2} className='contact-form-txt' type="text" placeholder='Enter last Name' />
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              />

              <textarea value={props.address} onChange={change3}  placeholder='Address'  className='contact-form-txtarea' ></textarea>
              <Link to="/booked" onClick={booked} className='btn btn-primary' >Submit</Link>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Cont