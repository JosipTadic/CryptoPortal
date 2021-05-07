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
`
const StyledText2 = styled.p`
    color: Black;
    margin: 2rem;
    text-align: center;
    font-size: 2.5vh;
    font-family: 'Arial', monospace;
`

const Start = () => {
    return(
        <>
            
            <Wrapper>
                <Divider />
                    <StyledText>Registrirajte se klikom na link <a href="https://bitcoin-store.hr/en/?r=wKXdTKiGcc">OVDJE</a>. Nakon registracije na stranici možete pronaći više informacija.</StyledText>
                <Divider />
                    <StyledText2>
                        Kriptovalute nisu prevara već neizbježna budućnost, postoji puno pojmova kojima se treba ovladati prije nego 
                        osoba može smatrati kako razumije način funkcioniranja kriptovaluta. Ono što je olakšavajuće je to da već sada
                        novac se može uložiti u Kriptovalute vrlo jednostavno, a procesi su opisani detaljnije na raznim stranicama.
                        Ono što je bitno napomenuti je to da Kriptovalutama je skoro nemoguće uči u trag te postoji puno načina za prevaru.
                        Iz tog razloga napomenjemo vam da se držite certficiranih i pouzdanih stranica, te da ne srljate. Također bitno je
                        posebnu pažnju posvetiti svojim walletima jer ukoliko izgubite pristup vrlo vjerojatno će i sredstva ostati
                        zaključana. Ovim putem odričemo se bilo kakve odgovornosti takvih i sličnih događaja, te vam želimo svu sreću 
                        u budućim ulaganjima!
                    </StyledText2>
                <Divider />
            </Wrapper>
            
        </>
    )
}

export default Start;