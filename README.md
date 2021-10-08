# Resonance & Wonder Marketplace

## E-Commerce Mini-Marketplace Project

## Description

Resonance & Wonder will be a business to consumer marketplace wbsite for businesses to sell products to consumers. While the website will resemble larger marketplaces like Etsy, companies and producst must meet certain criteria from the owner in order to list their products on the website (for example, B Corps will always be immediately approved!). The website will have a sign up/login feature for customers and for businesses in a later iteration and will include full CRUD funcionality from MongoDB Realm in the first iteration and access on the front-end for companies in the 2nd iteration to add and delete products from their account. Consumers will be able to add the products added by businesses to their cart for purchase. Available payment menthods are initially unavailable, but will be limited to paypal once added and more options will be added later as the website grows.

### Project Links

- [Front end git](https://github.com/traceannwhite/resonanceandwonder-project)
- [Vercel Deployment](https://resonanceandwonder-project.vercel.app/)

### Wireframes and Architecture

- Wireframes: -[General Design](https://res.cloudinary.com/dhcagrzcb/image/upload/v1631302148/IMG_2378_2_u1f9th.heic)
- React Architecture: -[Google Drawing](https://docs.google.com/drawings/d/1xPGib09_kNm2uAtcwClSCeXAeG2lrQzk3VvaV7cN0Ck/edit?usp=sharing)

### Time/Priority Matrix

| Component                        | Priority | Estimated Time | Time Invested |
| -------------------------------- | :------: | :------------: | :-----------: |
| Build Repositories               |    H     |     15mins     |    .25hrs     |
| Add dependencies, folders, files |    H     |     15mins     |    .25hrs     |
| Set up Heroku / Deploy           |    H     |     15mins     |     .5hrs     |
| Connecting Server                |    H     |      1hrs      |     .5hrs     |
| Routes                           |    H     |      2hrs      |     2hrs      |
| Controllers                      |    H     |      2hrs      |     1hrs      |
| Seed Data                        |    H     |      2hrs      |     2hrs      |
| Set up pages                     |    H     |      3hrs      |     4hrs      |
| Authorization                    |    H     |      4hrs      |     8hrs      |
| Links                            |    H     |      2hrs      |     2hrs      |
| Header (Menu Button & Login)     |    H     |      3hrs      |     3hrs      |
| Search bar                       |    H     |      2hrs      |      INC      |
| Full CRUD for companies display  |    H     |      3hrs      |      INC      |
| Home Display                     |    H     |      3hrs      |     3hrs      |
| Products Display                 |    H     |      3hrs      |     3hrs      |
| Signup/Login form                |    H     |      3hrs      |      INC      |
| Making everything communicate    |    H     |      2hrs      |     5hrs      |
| Debugging                        |    H     |      5hrs      |     5hrs      |
| Responsiveness                   |    M     |      3hrs      |     1hrs      |
| Home Page Styling                |    M     |      3hrs      |     1hrs      |
| Individual Products Page Styling |    M     |      3hrs      |     1hrs      |
| All Products Page Styling        |    M     |      3hrs      |     1hrs      |
| User Page Styling                |    M     |      3hrs      |     1hrs      |
| Learning New Tech                |    M     |     10hrs      |     10hrs     |
| Total                            |    H     |     65hrs      |      hrs      |

| Component                   | Priority | Estimated Time | Time Invested |
| --------------------------- | :------: | :------------: | :-----------: |
| Randomize featured products |    H     |      3hrs      |      INC      |
| Add Paypal                  |    H     |      3hrs      |      INC      |
| Cart adds up total          |    H     |      3hrs      |     2hrs      |
| Stripe or Square Payment    |    H     |     10hrs      |      INC      |
| Favorites List              |    H     |      3hrs      |      INC      |
| Booking component           |    H     |      2hrs      |      INC      |
| Page for completed purchase |    H     |      2hrs      |      INC      |
| Category Products Pages     |    H     |      3hrs      |     3hrs      |
| Category Pages Styling      |    H     |      3hrs      |    1.5hrs     |
| Total                       |    H     |     25hrs      |      hrs      |

## MVP/Post-MVP

### MVP

BACKEND

- Build Repositories
- Add dependencies
- Create standard components files and folders: server.js, controllers, models, db
- Set up Heroku
- Create files for MVP databases and schema: CompanyUser, CustomerUser, Products
- Connect server
- Set up routes in server
- Build controllers / set up routes

Frontend

- Create react.js and next.js app
- Header
  - Nav Bar
    - Links
    - Search bar (if unavailable: no package available)
  - Sign-up/Login + User Profile Button (Icon)
  - Cart Button
- Footer
  - Links
  - Copyright
- Home Page
  - Hero / Tagline
  - Featured Products
- All Products Page
  - Product Cards (pulled from products created by company users)
    -Image
    -Product Name
    -Add to Cart Button
- Expanded Products Page
  - Individual product card info deatils
  - Non-functioning Book Now button
- Form Sign-up/Login page
  - Form for login (username & password) + forgot password
  - Authorization
- User Profile: Sellers account page/Customers account page
- Cart Page
- Styling each page

### Post-MVP

- User Profile Additional Functionality
  - Favorites List
- Purchase Items page (Buy Now)
  - Cart adds up items
  - Paypal, Square, Stripe... payment
- Purchase Successful Page
- Category Projects pages

## Components - Descriptions

- Detailed in MVP/Post-MVP

## Additional Libraries

- HTML
- CSS
- React
- Redux
- Next.js
- MongoDB Atlas
- MongoDB Realm
  - I am using MongoDB Realm to run queries against my MongoDB atlas cluster database, which removes the need for a server. User credentials can be managed through MongoDB Realm without risk of exposing or leaking any credentials once the roles are set.

## Problems & Resolutions

1. Data being pulled from MongoDB Realm is inside of a useEffect and I need to take the aysnc function out of the useEffect and separate them.

1. Products on page take a moment to load, I'd like to make this process more immediate since the data being fetched is not a lot of data... it shouldn't be this slow.

1. Getting a searchbar fully functional with filtering of products.
