import { Divider } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
margin-top:155px;
`
const StyledText = styled.p`
    color: Black;
    margin: 3rem;
    text-align: center;
    font-size: 3vh;
    font-family: 'Arial', monospace;
    @media (max-width: 768px) {
    font-size: 2.8vh;
    margin: 0.5rem;
  }
`
const StyledText2 = styled.p`
    color: Black;
    margin: 2rem;
    text-align: center;
    font-size: 2.5vh;
    font-family: 'Arial', monospace;
    @media (max-width: 768px) {
    font-size: 2.3vh;
    margin: 1.5rem;
  }
`

const Start = () => {
    return(
        <>
            
            <Wrapper>
                <Divider />
                    <StyledText>Register by clicking on the link <a href="https://bitcoin-store.hr/en/?r=wKXdTKiGcc">HERE</a>. After registering on the site you can find more information.</StyledText>
                <Divider />
                    <StyledText2>
                        Cryptocurrencies are not a scam but an inevitable future, there are a lot of concepts that need to be mastered before
                         a person may feel that he understands the way cryptocurrencies work. What is relieving is that yes now
                         money can be invested in cryptocurrencies very easily, and the processes are described in more detail on various sites.
                         What is important to note is that Cryptocurrencies are almost impossible to trace and there are many ways to cheat.
                         For this reason, we remind you to stick to certified and reliable sites, and not to rush. It also matters
                         pay special attention to your wallets because if you lose access it is very likely that the funds will remain
                         locked. We hereby disclaim any responsibility for such and similar events, and wish you all the best of luck
                         in future investments!
                    </StyledText2>
                <Divider />
            </Wrapper>
            
        </>
    )
}

export default Start;