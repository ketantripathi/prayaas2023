import React from 'react'
import img1 from './sponserbackground.png'
import img2 from './sponserbg.jpg'
import { Carousel } from 'flowbite-react'
export default function Home() {
    return (
        // <div>
        //     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item="">
        //             <img
        //                 src={img1}
        //                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        //                 alt="..."
        //             />
        //         </div>
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item="">
        //             <img
        //                 src={img2}
        //                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        //                 alt="..."
        //             />
        //         </div>
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item="">
        //             <img
        //                 src={img1}
        //                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        //                 alt="..."
        //             />
        //         </div>
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item="">
        //             <img
        //                 src={img2}
        //                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        //                 alt="..."
        //             />
        //         </div>
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item="">
        //             <img
        //                 src={img1}
        //                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        //                 alt="..."
        //             />
        //         </div>
        //     </div>
        //     <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        //         <button
        //             type="button"
        //             className="w-3 h-3 rounded-full"
        //             aria-current="true"
        //             aria-label="Slide 1"
        //             data-carousel-slide-to={0}
        //         />
        //         <button
        //             type="button"
        //             className="w-3 h-3 rounded-full"
        //             aria-current="false"
        //             aria-label="Slide 2"
        //             data-carousel-slide-to={1}
        //         />
        //         <button
        //             type="button"
        //             className="w-3 h-3 rounded-full"
        //             aria-current="false"
        //             aria-label="Slide 3"
        //             data-carousel-slide-to={2}
        //         />
        //         <button
        //             type="button"
        //             className="w-3 h-3 rounded-full"
        //             aria-current="false"
        //             aria-label="Slide 4"
        //             data-carousel-slide-to={3}
        //         />
        //         <button
        //             type="button"
        //             className="w-3 h-3 rounded-full"
        //             aria-current="false"
        //             aria-label="Slide 5"
        //             data-carousel-slide-to={4}
        //         />
        //     </div>
        // </div>
        <div>
            <Carousel>
                <img src={img1} alt='1'/>
                <img src={img2} alt='1'/>
            </Carousel>
        </div>
    )
}
