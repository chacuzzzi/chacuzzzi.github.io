import React from 'react'
import woman from '../public/senior-woman-talking-with-her-doctor.jpg'
import { useNavigate } from 'react-router-dom'

function Image ({image, alt}) {
    return (
        <img className='w-2/4 block mx-auto h-full object-contain sm:pl-1' src={image} alt={alt}/>
    )
}

function InformationCard({title, description, image, alt, visible}) {
    const Desc = () =>
        <div className='mx-2 my-2 flex flex-col flex-1 p-1'>
            <div className='border-solid border-x-0 border-t-0 border-b-pinkTheme mb-0 text-2xl cormorant-garamond-medium text-center'>{title}</div>
            <div className='mt-0 text-center text-xl'>{description}</div>
        </div>
    const EmptyDesc = () => <div className='mx-2 my-2 flex-1'></div>
    return visible ? <Desc/> : <EmptyDesc/>
}

function ContactButton({buttonText}) {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/contact')} class='text-xl text-center hover:border-pinkTheme hover:cursor-pointer hover:text-pinkTheme text-blueTheme w-1/6 h-10 bg-white border-solid border-blueTheme border-2 my-3'>{buttonText}</button>
    )
}

function About() {
    return (<div className=''>
        <div className='top-[100px] left-[3%] text-white border-solid border-pinkTheme w-1/5 absolute bg-blueTheme z-0'>
            <h1 className='text-center text-6xl'>About Us</h1>
            <div className='text-center cormorant-garamond-medium-italic text-2xl mb-4 mx-2 pb-1'>"Compassionate Care in the Comfort of Your Home."</div>
        </div>
        <div className='bg-white h-40'>
        </div>

        <div className='flex bg-blueTheme text-white'>
            <div className='flex'>
                <InformationCard 
                    visible={false}
                />
                <InformationCard
                    title={'Our Mission'}
                    description={'Participate as an active member of the community, in providing and continuously improving home health care services to meet the needs of the client by delivering value-driven, high-quality, and compassionate care.'}
                    alt={'mission'}
                    visible={true}
                />
                <InformationCard
                    title={'Our Vision'}
                    description={'Provide qualified attendants/caregivers who will provide services enabling our clients to remain independent as long as possible in an environment that brings each one peace and comfort.'}
                    alt={'vision'}
                    visible={true}
                />
                <InformationCard
                    className='mr-4'
                    title={'Our Promise'}
                    description={'With Divine Care Home Health, you are not just receiving care, you are gaining a dedicated partner in health and wellness. Whether you need personal care assistance or simply a compassionate companion, we are here to help. We can tailor our services to meet your specific needs.'}
                    alt={'promise'}
                    visible={true}
                />
            </div>
        </div>
        <div className='flex-col mt-6 justify-center'>
            <Image className='' image={woman}/>
            <hr className='w-2/4 h-1 rounded bg-pinkTheme border-0'/>
            <div class='flex-col text-center mb-4'>
                <div class='text-4xl'>Interested in joining the team?</div>
                <ContactButton buttonText='Contact Us'/>
            </div>
        </div>
    </div>)
}

export default About
