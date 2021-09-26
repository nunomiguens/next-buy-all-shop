# BuyAll Shop eCommerce Platform

> eCommerce platform built with Next.js, Typescript, MongoDB and MaterialUI.

This project was built for the last exercise of the course WebDesign in React Typescript FullStack FrontEnd.

- Demo Website : https://nunomiguens-buy-all-shop.tk/

## Features

- Full featured shopping cart
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Developed with

- Next.js basics for setting up project, navigating between pages and data fetching;
- Next.js for dynamic routing, SSG and SSR;
- MaterialUI framework to build responsive website using custom theme;
- React.js for decomposing components, context API and hooks;
- Next Connect package to build backend API;
- MongoDB and Mongoose to save and retrieve data like products, orders and users;
- PayPal developer api to make online payment;
- GitHub and Vercel for deploying application.

## Run it Locally

```
$ git clone https://github.com/nunomiguens/next-buy-all-shop.git
$ cd next-buy-all-shop
$ npm install --global yarn
$ yarn dev
$ Open http://localhost:3000/api/seed
$ Open http://localhost:3000
```

## Env Variables

Create a .env file in the root and add the following

```
MONGODB_URI= your mongodb uri
JWT_SECRET= somethingsecret
PAYPAL_CLIENT_ID= your paypal client id
CLOUDINARY_NAME= your cloudinary client name
CLOUDINARY_API_KEY= your cloudinary API key
CLOUDINARY_API_SECRET= your cloudinary API secret
```

## Sample data

Sample User Logins

```
email: admin@example.com (Admin)
password: 123456

email: user@example.com (Customer)
password: 123456
```

Paypal credencials

```
Paypal
email: sb-5z43tj7731790@personal.example.com
password: JMU>l7@t

Credit Card
Card Number: 4032039363912561
Expiration Date: 02/2022
CVV: 550
```
