import { Divider } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import MailIcon from '@material-ui/icons/Mail';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import Link from '@material-ui/core/Link';

const ContactWrapper = styled.div`
margin-top:100px;
display: block;
`
const ContactStyledText = styled.p`
    color: Black;
    margin: 3rem;
    margin-left:2rem;
    text-align: center;
    font-size: 1.6rem;
    font-family: 'Courier New', monospace;
    @media (max-width: 768px) {
    font-size: 2.5vh;
    }
`

const Contact = () => {
    return(
        <>        
            <ContactWrapper>
                <Divider />
                    <ContactStyledText><Link href="mailto:cryptotechportal@gmail.com?subject=Hello"><MailIcon /> E-Mail: cryptotechportal@gmail.com</Link></ContactStyledText> 
                <Divider />   
                    <ContactStyledText><Link href="https://www.tiktok.com/@crypto_tech?lang=en"><TextFieldsIcon /> TikTok: crypto_tech</Link></ContactStyledText>
                <Divider />
            </ContactWrapper>      
        </>
    )
}

export default Contact;