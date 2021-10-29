import AppBar from '@mui/material/AppBar'
// import { styled } from '@mui/system'
import React from 'react'
import {Container, Toolbar} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Home from '@mui/icons-material/Home'
import MuiNextLink from '@components/MuiNextLink'
import {styled} from "@mui/material/styles";
import {Login} from "@mui/icons-material";

const Offset = styled('div')(({theme}) => theme.mixins.toolbar)

export const navLinks = [
  {title: `home`, path: `/`},
  {title: `about us`, path: `/about-us`},
];

const Header: React.FC = () =>
  <>
    <AppBar position='fixed'>
      <Toolbar>
        <Container
          maxWidth='lg'
          sx={{display: `flex`, justifyContent: `space-between`}}
        >
          <IconButton edge='start' aria-label='home'>
            <MuiNextLink activeClassName='active' href='/'>
              <Home
                sx={{
                  color: (theme) => theme.palette.common.white
                }}
                fontSize='large'
              />
            </MuiNextLink>
          </IconButton>
          <IconButton edge='end' aria-label='login'>
            <Login/>
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
    <Offset/>
  </>

export default Header
