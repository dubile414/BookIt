import React from 'react'
import Navbar from './Navbar'

import Bmw from './Bmw'
import Data from './Data'

const ShowBmw = (props) => {

    

  return (
   <>
           <Navbar mode = {props.mode} toggleMode = {props.toggleMode}  />
            <h1 className='text-center mt-3' >BMW</h1>

           
        
            <section >
                <div className="row justify-content-center">
                    {Data.productData.map((item, index) => {
                        return (
                            <Bmw
                                img={item.img}
                                rating={item.rating}
                                title={item.title}
                                specs={item.specs}
                                price={item.price}
                                item={item}
                                key={index}
                            />
                        )
                    }
                    )}

                </div>

            </section>
            </>
    
  )
}

export default ShowBmw