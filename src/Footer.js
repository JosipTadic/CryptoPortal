import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center; 
`
const FooterText = styled.p`
`

const Footer = ({accept, setToTrue}) => {
    return(
        accept ? null
        :
        <>
            <FooterWrapper>
                <FooterText>We are using Google Analytics services, by using this site you agree to the terms.
                <Button onClick={setToTrue} variant="outlined">OK!</Button></FooterText>   
            </FooterWrapper>
        </>
    )
}

export default Footer;