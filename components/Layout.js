import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ description, title, children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Buy All Shop ` : 'Buy All Shop'} </title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <NextLink href='/' passHref>
            <Link underline='none' color='inherit'>
              <Typography className={classes.brand}>BuyAll Shop</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href='/cart' passHref>
              <Link color='inherit'>Cart</Link>
            </NextLink>
            <NextLink href='/login' passHref>
              <Link color='inherit'>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved - Buy All Shop</Typography>
      </footer>
    </div>
  );
}
