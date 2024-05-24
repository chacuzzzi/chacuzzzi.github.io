import React from 'react'
import woman from '../public/senior-woman-talking-with-her-doctor.jpg'
import { useNavigate } from 'react-router-dom'

function InformationCard({isReversed, title, description, image, alt}) {
    const Desc = () => <>
        <div className='flex flex-col content-center w-full sm:w-1/2'>
            <h2 className='m-0 text-center text-4xl sm:text-left'>{title}</h2>
            <p className='text-center text-2xl sm:text-left'>{description}</p>
        </div>
    </>
    const Image = () => <img className='w-full sm:w-2/4 sm:pl-1' src={image} alt={alt}/>
    return (
        // Default is column, switch to row after small size screen
        <div className='flex flex-col sm:flex-row sm:justify-center w-11/12 m-auto mb-10'>
            {isReversed ? <Image/> : <Desc/>}
            {isReversed ? <Desc/> : <Image/>}
        </div>
    )
}

function ContactButton({buttonText}) {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/contact')} class='p-3 text-center hover:cursor-pointer hover:text-pinkTheme text-blueTheme w-30 h-10 bg-white border-solid border-blueTheme border-2 my-3'>{buttonText}</button>
    )
}

function About() {
    return (
        <div className='w-full'>
            <h1 className='text-center text-6xl'>About Us</h1>
            <div className='w-11/12 m-auto text-center cormorant-garamond-medium-italic text-4xl mb-4 pb-1'>"Compassionate Care in the Comfort of Your Home."</div>
            <InformationCard
                title={'Our Mission'}
                description={'Participate as an active member of the community, in providing and continuously improving home health care services to meet the needs of the client by delivering value-driven, high-quality, and compassionate care.'}
                image={woman}
                alt={'mission'}
            />
            <InformationCard
                title={'Our Vision'}
                description={'Provide qualified Attendants/Caregivers who will provide services enabling our clients to remain independent as long as possible in an environment that brings each one peace and comfort.'}
                image={woman}
                alt={'vision'}
                // Doesn't look great on mobile
                // isReversed={true}
            />
            <InformationCard
                title={'Our Promise'}
                description={'With Divine Care Home Health, you are not just receiving care, you are gaining a dedicated partner in health and wellness. Whether you need personal care assistance or simply a compassionate companion, we are here to help. We can tailor our services to meet your specific needs.'}
                image={woman}
                alt={'promise'}
            />
            <div class='flex-col text-center mb-4'>
                <div class='text-4xl'>Interested in joining the team?</div>
                <ContactButton buttonText='Contact Us'/>
            </div>
        </div>
    )
}

export default About
