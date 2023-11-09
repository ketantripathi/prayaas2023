import React, { Component } from "react";

export default class TimeTrial extends Component {
  render() {
    return (
      <div>
        <ol className='border-l-5 m-10 border-yellow-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t'>
          {/* <!--First item--> */}
          <li>
            <div className='flex-start flex items-center pt-2 md:block md:pt-0'>
            <div className='relative left-1/2 -ml-3 w-6 h-6 border-2 bg-white border-blue-500 rounded-full dark:bg-neutral-900 md:-mt-[5px] md:ml-0 md:mr-0'></div>
              {/* <p className='mt-2 text-sm text-neutral-500 dark:text-neutral-300'>
                01.07.2021
              </p> */}
              <br/>
            </div>
            <div className='ml-4 mt-2 pb-5 md:ml-0'>
              <h4 className='mb-1.5 text-xl font-semibold'>Title of section 1</h4>
              <p className='mb-3 text-neutral-500 dark:text-neutral-300'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p>
            </div>
          </li>

          {/* <!--Second item--> */}
          <li>
            <div className='flex-start flex items-center pt-2 md:block md:pt-0'>
            <div className='relative left-1/2 -ml-3 w-6 h-6 border-2 bg-white border-blue-500 rounded-full dark:bg-neutral-900 md:-mt-[5px] md:ml-0 md:mr-0'></div>
              {/* <p className='mt-2 text-sm text-neutral-500 dark:text-neutral-900'>
                13.09.2021
              </p> */}
              <br/>
            </div>
            <div className='ml-4 mt-2 pb-5 md:ml-0'>
              <h4 className='mb-1.5 text-xl font-semibold'>Title of section 2</h4>
              <p className='mb-3 text-neutral-500 dark:text-neutral-300'>
                Libero expedita explicabo eius fugiat quia aspernatur autem
                laudantium error architecto recusandae natus sapiente sit nam
                eaque, consectetur porro molestiae ipsam an deleniti.
              </p>
            </div>
          </li>

          {/* <!--Third item--> */}
          <li>
            <div className='flex-start flex items-center pt-2 md:block md:pt-0'>
              <div className='relative left-1/2 -ml-3 w-6 h-6 border-2 bg-white border-blue-500 rounded-full dark:bg-neutral-900 md:-mt-[5px] md:ml-0 md:mr-0'></div>
              {/* <p className='mt-2 text-sm text-neutral-500 dark:text-neutral-300'>
                25.11.2021
              </p> */}
              <br/>
            </div>
            <div className='ml-4 mt-2 pb-5 md:ml-0'>
              <h4 className='mb-1.5 text-xl font-semibold'>Title of section 3</h4>
              <p className='mb-3 text-neutral-500 dark:text-neutral-300'>
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
            </div>
          </li>
        </ol>
      </div>
    );
  }
}
