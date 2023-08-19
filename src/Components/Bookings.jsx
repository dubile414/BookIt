import React from 'react'
import Navbar from './Navbar'
import Bmw from './Bmw'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'

const Bookings = (props) => {
  console.log(props.fname)
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
  if (isEmpty) return <h1 className='text-center' >No Bookings <Link to="/company"> Go To Company</Link> </h1>


  return (
    <>

<Navbar mode={props.mode} toggleMode={props.toggleMode} />
    <div>
      

      <div className="contact">
        <div className="contact-map">
          {items.map((item, index) => {
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

                  <div>
                    <button className="btn btn-danger" onClick={()=>removeItem(item.id)} >Remove</button>
                  </div>


                </div>

              </div>








            </>
            )
          })}
        </div>
        <div className="contact-form">
          <h1>Congratulations 🎉🎉✨</h1>

          <div>
            <h3> {props.fname} {props.lname} your car is book for test drive </h3>
            <p>and will be delivered to you soon at your address {props.address}</p>
          </div>



        </div>

      </div>

    </div>
    </>
  )
}

export default Bookings