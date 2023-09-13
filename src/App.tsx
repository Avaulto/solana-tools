import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToolCard from './tool';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

function App() {
  const apps = [{
    name: 'stake reward history',
    url: 'https://t-apy.solanahub.app',
    desc: 'fetch all your stake rewards and view the true APY you received'
  },
  {
    name: 'Devnet faucet',
    url: 'https://dev-faucet.solanahub.app/',
    desc: 'a quick solution for Solana devnet SOL and devnet NFT(SPL)'
  },
  {
    name: 'liquid stake dashboard',
    url: 'https://lst-ds-dashboard.solanahub.app',
    desc: 'Direct stake dashboard for liquid stake asset such as mSOL and bSOL'
  },
  {
    name: 'SolanaHub',
    url: 'https://www.solanahub.app',
    desc: 'The ultimate community-driven onboarding app for Solana users'
  }
  ]
  
  return (
    <div className="App">
      <div id="app-show-case">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <ToolCard tool={apps[0]} />
            </Grid>
            <Grid item xs={3}>
              <ToolCard tool={apps[1]} />
            </Grid>
            <Grid item xs={3}>
              <ToolCard tool={apps[2]} />
            </Grid>
            <Grid item xs={3}>
              <ToolCard tool={apps[3]} />
            </Grid>
          </Grid>
        </Box>
        {/* <div >

        <div className='iframe-wrapper'>
        <div className='overlay'></div>
         <iframe className='tool' src={apps[1]} ></iframe>
    </div>
        </div> */}
        {/* <iframe className='tool' src={apps[2]} ></iframe>
          <iframe className='tool' src={apps[3]} ></iframe> */}

      </div>
      <span id="love">built with Love by <a href="https://www.SolanaHub.app" target="_blank">
        <span id="logo">SolanaHub</span>
        <img src={logo} alt="avaulto logo" /></a></span>
    </div>
  );
}

export default App;
