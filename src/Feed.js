import { Divider } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
`
const CardContainer = styled.div`
`
const StyledHeading = styled.h1`
    color: black;
    margin: 3rem;
    text-align: center;
    font-size: 6vh;
    font-family: Garamond, serif;
    @media (max-width: 768px) {
    font-size: 4.5vh;
    margin: 2rem;
    }
`
const StyledText = styled.h2`
    color: black;
    margin: 2rem;
    font-style: normal;
    text-align: center;
    font-size: 2.3vh;
    font-family: Georgia, serif;
    @media (max-width: 768px) {
    font-size: 2.5vh;
    margin: 1.5rem;
    }
`
const StyledDate = styled.h3`
    color: red;
    margin: 0.5rem;
    text-align: center;
    font-size: 1rem;
    font-family: 'Courier New', monospace;
    @media (max-width: 768px) {
    font-size: 1.6vh;
    margin: 0.3rem;
    }
`

const Feed = ({heading, text, date}) => {
    return(
        <>
            <CardWrapper>
                <CardContainer>
                    <StyledHeading>{heading}</StyledHeading>
                    <StyledText>{text}</StyledText>
                    <StyledDate>{date}</StyledDate>
                </CardContainer>
            </CardWrapper>
            <Divider />
        </>
    )
}

export default Feed;