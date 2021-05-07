import { Divider } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import MailIcon from '@material-ui/icons/Mail';
import TextFieldsIcon from '@material-ui/icons/TextFields';

const ContactWrapper = styled.div`
margin-top:100px;
`
const ContactStyledText = styled.p`
    color: Black;
    margin: 3rem;
    margin-left:2rem;
    text-align: center;
    font-size: 2.5vh;
    font-family: 'Courier New', monospace;
`

const Contact = () => {
    return(
        <>        
            <ContactWrapper>
                <Divider />
                <ContactStyledText><MailIcon />  E-Mail: HrvatskaCrypto@gmail.com  <MailIcon /></ContactStyledText> 
                <Divider />   
                    <ContactStyledText><TextFieldsIcon />    TikTok: CryptoHrvatska    <TextFieldsIcon /></ContactStyledText>
                <Divider />
            </ContactWrapper>      
        </>
    )
}

export default Contact;