import React from 'react'
import woman from '../public/senior-woman-talking-with-her-doctor.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Image ({image, alt}) {
    return <img className='w-5/6 sm:w-2/4 block mx-auto' src={image} alt={alt}/>
}

function InformationCard({title, description, visible, position, cardIndex}) {
    const Desc = () =>
        // If this is the current card to show, put in first column, else shift to the right
        // Probably better way to add styling using javascript...
        <div className={(cardIndex % 3 === position ? 'col-start-1 ' : ('col-start-'+(position+1))) + 'sm:flex sm:flex-col p-2 mt-[40%] sm:mt-2 mx-2 mb-2 sm:flex-1'}>
            <div>
                <div className='border-solid border-x-0 border-t-0 border-b-pinkTheme mb-0 text-2xl cormorant-garamond-medium text-center'>{title}</div>
                <div className='mt-2 text-center text-xl'>{description}</div>
            </div>
        </div>
    const EmptyDesc = () => <div className='hidden sm:inline mx-2 my-2 sm:flex-1'></div>
    return visible ? <Desc/> : <EmptyDesc/>
}

function Button({buttonText}) {
    const navigate = useNavigate()
    return <button onClick={() => navigate('/contact')} class='text-xl text-center hover:border-pinkTheme hover:cursor-pointer hover:text-pinkTheme text-blueTheme min-w-40 sm:w-1/6 h-10 bg-white border-solid border-blueTheme border-2 my-3'>{buttonText}</button>
}

function Indicator({cardIndex, setCardIndex}) {
    const LeftArrow = () => <svg onClick={() => setCardIndex(cardIndex-1)} className='w-3 fill-white hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>

    // https://fontawesome.com/icons/angles-right?f=classic&s=solid
    const LeftAngle = () => <svg onClick={() => setCardIndex(cardIndex-1)} className='w-4 fill-white hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>

    const RightArrow = () => <svg onClick={() => setCardIndex(cardIndex+1)} className='w-3 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>

    const RightAngle = () => <svg onClick={() => setCardIndex(cardIndex+1)} className='w-4 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>

    const PinkCircle = ({position}) => <svg onClick={() => setCardIndex(position)} className='w-3 fill-pinkTheme' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
    const WhiteCircle = ({position}) => <svg onClick={() => setCardIndex(position)} className='w-3 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>

    return <>
        <div className='sm:hidden mt-0 pb-3 flex justify-center space-x-5'>
            <LeftAngle/>
            {cardIndex % 3 === 0 ? <PinkCircle position={0}/> : <WhiteCircle position={0}/>}
            {cardIndex % 3 === 1 ? <PinkCircle position={1}/> : <WhiteCircle position={1}/>}
            {cardIndex % 3 === 2 ? <PinkCircle position={2}/> : <WhiteCircle position={2}/>}
            <RightAngle/>
        </div>
    </>
}

function About() {
    const [cardIndex, setCardIndex] = useState(0)

    return <>
        <div className='z-0 py-3 px-2 left-[calc((20%-1rem)/2)] top-[100px] sm:top-[100px] sm:left-[3%] text-white border-solid border-pinkTheme w-4/5 sm:w-1/5 absolute bg-blueTheme'>
            <div className='text-center text-6xl font-bold mb-5'>About Us</div>
            <div className='text-center cormorant-garamond-medium-italic text-2xl mx-2'>"Compassionate Care in the Comfort of Your Home."</div>
        </div>
        <div className='bg-white h-40'></div>
        <div className='bg-blueTheme'>
            <div className='sm:px-5 sm:flex grid grid-flow-col auto-cols-[100%] overflow-hidden bg-blueTheme text-white'>
                <InformationCard visible={false}/>
                <InformationCard
                    title={'Our Mission'}
                    description={'Participate as an active member of the community, in providing and continuously improving home health care services to meet the needs of the client by delivering value-driven, high-quality, and compassionate care.'}
                    alt={'mission'}
                    visible={true}
                    position={0}
                    cardIndex={cardIndex}
                />
                <InformationCard
                    title={'Our Vision'}
                    description={'Provide qualified attendants/caregivers who will provide services enabling our clients to remain independent as long as possible in an environment that brings each one peace and comfort.'}
                    alt={'vision'}
                    visible={true}
                    position={1}
                    cardIndex={cardIndex}
                />
                <InformationCard
                    title={'Our Promise'}
                    description={'With Divine Care Home Health, you are not just receiving care, you are gaining a dedicated partner in health and wellness. Whether you need personal care assistance or simply a compassionate companion, we are here to help. We can tailor our services to meet your specific needs.'}
                    alt={'promise'}
                    visible={true}
                    position={2}
                    cardIndex={cardIndex}
                />
            </div>
            <Indicator cardIndex={cardIndex} setCardIndex={setCardIndex}/>
        </div>
        <div className='flex-col mt-6 justify-center'>
            <Image image={woman} alt={'woman smiling at caretaker'}/>
            <hr className='w-5/6 sm:w-2/4 h-1 rounded bg-pinkTheme border-0'/>
            <div class='flex-col text-center mb-4 mx-2'>
                <div class='text-4xl'>Interested in joining the team?</div>
                <Button buttonText='Contact Us'/>
            </div>
        </div>
    </>
}

export default About
