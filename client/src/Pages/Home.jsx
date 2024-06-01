import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import banner from '../public/homebanner2.jpg'
import icon from '../public/logo.png'
import servicePic from '../public/elderly-man-receiving-care-from-a-health-care-physical-therapy-nurse-photo.jpg'

function AccordionMenu({header, list}) {
  const [accordionOpen, setAccordionOpen] = useState(false)

  const handleAccordion = () => {
    setAccordionOpen(!accordionOpen)
  }

  return (
    <div className='w-full border-solid border-b border-0 p-2'>
      <div className='flex justify-between hover:cursor-pointer' onClick={handleAccordion}>
        <span className='text-3xl font-bold'>{header}</span>
        <div className='flex items-center justify-center'>
          { accordionOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512" className='fill-current text-blueTheme'>
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/>
            </svg>) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512" className='fill-current text-blueTheme'>
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
            </svg>
          )}
        </div>
      </div>
      <ul className={`text-2xl space-y-2 transition-all duration-300 ease-in-out ${accordionOpen ? 'block' : 'hidden'}`}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function Home() {
  const navigate = useNavigate()

  return (
    <div className='w-full pb-10 sm:pt-0 pt-16'>
      <div className='flex flex-row z-40 relative mb-10'>
        <div className='w-full h-96 sm:h-[500px] bg-cover bg-center bg-no-repeat relative opacity-25 lg:opacity-100' style={{backgroundImage: `url(${banner})`, backgroundPosition: 'calc(85%) top', filter: 'blur(0px)'}}>
        </div>
        <div className='w-full lg:w-1/2 h-96 sm:h-[500px] absolute'>
          <div className='h-full flex flex-col items-center justify-center z-10'>
            <span className='font-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-lightBlue text-center sm:hidden'>Divine Care Home Health LLC</span>
            <img src={icon} alt='Elderly and nurse smiling' className='h-1/2'></img>
            <div className='font-black italic text-2xl md:text-4xl text-blueTheme text-center'>
              <span>"Compassionate Care in the</span>
              <br />
              <span>Comfort of Your Home"</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col xl:flex-row justify-center items-center xl:items-start xl:space-x-8 xl:space-y-0'>
        <div className='flex flex-col w-full mb-5 xl:mb-0 sm:w-1/2'>
          <img src={servicePic} alt='Nurse taking care of elderly man'/>
        </div>
        <div className='flex flex-col w-3/4 xl:w-1/4 justify-center sm:justify-normal items-center space-y-4 pt-4 sm:pt-0'>
          <span className='text-5xl font-bold text-center'>Our Services</span>
          <p className='text-3xl font-semibold text-center'>
            At Divine Care Home Health, we offer a comprehensive range of home health care services tailored to meet the unique needs of each individual.
          </p>
          <AccordionMenu
            header={"Personal Care Assistance"}
            list={[
              <li key="1"><span className='font-semibold'>Daily Living Activities:</span> Helping with bathing, dressing, grooming, and toileting.</li>,
              <li key="2"><span className='font-semibold'>Mobility Support:</span> Assistance with walking, transferring, and positioning.</li>,
              <li key="3"><span className='font-semibold'>Nutritional Support:</span> Meal preparation and feeding assistance.</li>
            ]}
          />
          <AccordionMenu
            header={"Companionship Services"}
            list={[
              <li key="1"><span className='font-semibold'>Emotional Support:</span> Providing companionship and conversation to alleviate loneliness.</li>,
              <li key="2"><span className='font-semibold'>Recreational Activities:</span> Engaging in hobbies, games, and activities to promote mental and emotional well-being.</li>,
              <li key="3"><span className='font-semibold'>Errands and Transportation:</span> Assisting with shopping, appointments, and outings.</li>
            ]}
          />
        </div>
      </div>
      <div className='bg-blueTheme h-fit lg:h-96 my-10 flex flex-col items-center justify-center space-y-4 py-10'>
        <div className='w-3/4 text-center'>
          <p className='text-white text-3xl'>
            At Divine Care Home Health, we believe in <span className='font-bold'>providing exceptional care with a personal touch.</span>
            <br />
            <span className='font-bold'>Your well-being is our priority</span>, and we are <span className='font-bold'>here to support you every step of the way.</span>
          </p>
        </div>
        <div className='flex flex-col lg:flex-row text-3xl text-white justify-between w-1/2 space-y-12 lg:space-y-0'>
          <div className='flex flex-col items-center group hover:cursor-pointer' onClick={() => navigate('/about')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 448 512" className='fill-current group-hover:text-pinkTheme transition-colors duration-300'>
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
            </svg>
            <span className='m-4 group-hover:text-pinkTheme transition-colors duration-300 text-center'>Learn More</span>
          </div>
          <div className='flex flex-col items-center group hover:cursor-pointer' onClick={() => navigate('/contact')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 512 512" className='fill-current group-hover:text-pinkTheme transition-colors duration-300'>
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
            </svg>
            <span className='m-4 group-hover:text-pinkTheme transition-colors duration-300 text-center'>Send A Message</span>
          </div>
          
        </div>

      </div>
      <div className='w-11/12 m-auto'>
        {/*
        <div className='flex flex-col sm:flex-row justify-between h-auto sm:h-40 lg:h-52 p-0 text-pinkTheme text-xl'>
          <ul className='list-none px-4 py-2 bg-white sm:w-1/4 rounded-md shadow-lg'>
            <li className='h-3/4 items-end'>
              Quote
            </li>
            <li className='h-1/4 flex items-end justify-end'>
              - Name
            </li>
          </ul>
          <ul className='list-none px-4 py-2 bg-white sm:w-1/4 rounded-md shadow-lg'>
            <li className='h-3/4 items-end'>
              Quote
            </li>
            <li className='h-1/4 flex items-end justify-end'>
              - Name
            </li>
          </ul>
          <ul className='list-none px-4 py-2 bg-white sm:w-1/4 rounded-md shadow-lg'>
            <li className='h-3/4 items-end'>
              Quote
            </li>
            <li className='h-1/4 flex items-end justify-end'>
              - Name
            </li>
          </ul>
        </div>
        */}
      </div>
    </div>
  )
}

export default Home