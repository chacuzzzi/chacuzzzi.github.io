import React from 'react'
import icon from '../public/logo.png'

function InformationCard({isReversed, title, description, image, alt}) {
    const Desc = () => <>
        <div className='flex flex-col justify-center'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </>
    const Image = () => <img src={image} alt={alt}/>
    return (
        <div className='flex'>
            {isReversed ? <Image/> : <Desc/>}
            {isReversed ? <Desc/> : <Image/>}
        </div>
    )
}

function About() {
    return (
        <div className='w-11/12 m-auto'>
            <h1 className='text-center'>About Us</h1>
            <div className='text-center'>"Compassionate care in the comfort of your home."</div>
            <InformationCard
                title={'Our Mission'}
                description={'Participate as an active member of the community, in providing and continguously improving home health care services to meet the needs of the client by delivering value-driven, high-quality,  and compassionate care.'}
                image={icon}
                alt={'mission'}
            />
            <InformationCard
                title={'Our Vision'}
                description={'Provide qualified Attendants/Caregivers who will provide services enabling our clients to remain independent as long as possible in an environment that brings each one peace and comfort.'}
                image={icon}
                alt={'vision'}
                isReversed={true}
            />
            <InformationCard
                title={'Our Promise'}
                description={'With Divine Care Home Health, you are not just receiving care, you are gaining a dedicated partner in health and wellness. Whether you need personal care assistance or simply a compassionate companion, we are here to help. We can tailor our services to meet your specific needs.'}
                image={icon}
                alt={'promise'}
            />
        </div>
    )
}

export default About
