import React from 'react'

function Contact() {
  return (
    <div className='pt-20'>
      <h1 className='text-6xl text-center'>Contact Us</h1>
        <div className='flex flex-col items-center'>
          <div className='w-10/12'>
            <p className='mt-0 text-center text-4xl'>
              At Divine Home Health Care, we are committed to offering the best care for our clients.
              <br/>
              <br/>
              Contact us to learn more about our services and how we can assist you and your loved ones.
            </p>
          </div>
          <iframe className='m-4 max-w-full' title='form' width="640px" height="480px" src="https://forms.office.com/r/snpWBdArn0?embed=true" frameborder="0" marginwidth="1" marginheight="1" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
        </div>
    </div>
  )
}

export default Contact
