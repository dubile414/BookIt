import React from 'react'

import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import { Link, useHistory } from "react-router-dom";
import Bmwlo from "./Bmwlo.png";
import merclo from "./merclo.png";
import audilo from "./audilo.png";

const Company = (props) => {

  let history = useHistory()

  // const chnageBmw = () => {
  //   history.push('/bmw')
  // }


  return (
    <>
      <Navbar mode={props.mode} toggleMode={props.toggleMode} />
      <div className='d-flex align-self-center justify-content-center text-bold my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}  ><h2>Select Company</h2></div>
      <div id='ph' className='d-flex mx-auto  my-3   align-self-center justify-content-center'>

        <Card style={{ width: '18rem', backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} className='mx-auto' >
          <Card.Img variant="top" src={Bmwlo} />
          <Card.Body>
            <Card.Title>BMW</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button onClick={chnageBmw} variant="primary">Select</Button> */}
            <Link to="/show" className='btn btn-primary ' >Select</Link>
          </Card.Body>
        </Card>

        {/* card-1  */}
        {/* https://source.unsplash.com/400x400/?mercedes */}
        <Card className='mx-auto' style={{ width: '18rem', backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}>
          <Card.Img variant="top" src={merclo} />
          <Card.Body>
            <Card.Title>Mercedes</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Select</Button>
          </Card.Body>
        </Card>

        {/* card-2 */}
        <Card className='mx-auto' style={{ width: '18rem', backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}>
          <Card.Img variant="top" src={audilo} />
          <Card.Body>
            <Card.Title>Audi</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Select</Button>
          </Card.Body>
        </Card>
      </div>

      <br /><br />


    </>
  )
}

export default Company