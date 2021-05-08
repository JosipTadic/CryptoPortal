import { Divider } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import MailIcon from '@material-ui/icons/Mail';
import TextFieldsIcon from '@material-ui/icons/TextFields';

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
const ContactStyledLink = styled.p`
    cursor: default;
    pointer-events: none;        
    text-decoration: none;
`

const Contact = () => {
    return(
        <>        
            <ContactWrapper>
                <Divider />
                    <ContactStyledText><ContactStyledLink href="mailto:hrvatskacrypto@gmail.com?subject=Hello"><MailIcon /> E-Mail: HrvatskaCrypto@gmail.com</ContactStyledLink></ContactStyledText> 
                <Divider />   
                    <ContactStyledText><ContactStyledLink href="https://www.tiktok.com/@cryptohrvatska?lang=en"><TextFieldsIcon /> TikTok: CryptoHrvatska</ContactStyledLink></ContactStyledText>
                <Divider />
            </ContactWrapper>      
        </>
    )
}

export default Contact;