import React from 'react'
import './Footer.css'
import logoAlexaWeb from '../../assets/logoTransparent.png'

const Footer = (): JSX.Element => {
    return (
        <small className='footer'>
            <p>Copyright © 2023 </p>

            <a href='https://alexa-web.com'
                target='_blank'
                rel='noreferrer'
                className='footer_link'
            >
                <img src={logoAlexaWeb} alt='owner logo' className='footer_logo' width='15px' />
                <p>Alexa-Web.com</p>
            </a>
        </small>
    )
}

export default Footer