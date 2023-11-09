import React,{useState} from 'react'
import { Carousel,Alert } from 'flowbite-react';
import './carousel.css'
import img1 from './sponserbackground.png'
import img2 from './sponserbg.jpg'
export default function HomeCarousel(props) {
  // return (
  //   <div className="flex-col justify-center">
  //      <Alert color="info">
  //       <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
  //      </Alert>
  //     <Carousel>
  //       <img src="./" alt="..." />
  //       <img src={img1} alt="..." />
  //       <img src={img2} alt="..." />
  //       <img src={img1} alt="..." />
  //       <img src={img2} alt="..." />
  //     </Carousel>
  //   </div>
  // )
  const images = [ img1,img2,img1,img2,img1,img2]
  const [mystyle, setmystyle] = useState({width:'99%', height: '100rem'});
  return (
    <div className='flex justify-center'>
        <img style={mystyle} src={images[props.count]} alt="" />
    </div>
  )
}
