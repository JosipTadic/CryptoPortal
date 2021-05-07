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
`
const StyledText = styled.h2`
    color: black;
    margin: 2rem;
    font-style: normal;
    text-align: center;
    font-size: 3vh;
    font-family: Georgia, serif;
`
const StyledDate = styled.h3`
    color: red;
    margin: 0.5rem;
    text-align: center;
    font-size: 1rem;
    font-family: 'Courier New', monospace;
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