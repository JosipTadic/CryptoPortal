import React from 'react';
import { AppBar, Tabs, Divider } from '@material-ui/core';
import styled from 'styled-components';
import Tab from '@material-ui/core/Tab';
import { Link as RouterLink } from 'react-router-dom';

const StyledTab = styled(Tab)({
  background: 'linear-gradient(135deg, #b2efff 5%, #aaa5ff 95%)',
});

const NavBarWrapper = styled.div`
    width: 100%;
    position: fixed;
    text-align: center;
    background-color: black;
`

const NavTab = () => {
  return (
    <NavBarWrapper>
        <AppBar>
          <Tabs color="transparent" elevation={0} variant="fullWidth" textColor="secondary" centered>
            <StyledTab component={RouterLink} to="/news" label="News"/>
            <Divider orientation="vertical" flexItem />
            <StyledTab component={RouterLink} to="/start" label="How to start"/>
            <Divider orientation="vertical" flexItem />
            <StyledTab component={RouterLink} to="/contact" label="Contact"/>
          </Tabs>
        </AppBar>
    </NavBarWrapper>
  );
}

export default NavTab;