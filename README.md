# House's HeatMap

This project show locations of houses and through of weight can show the people quantity inside of the house.
I used in this project.
  - NodeJs to create the api
  - TDD
  - knex to create migrates to controll of tables
  - ReactJS
  - Cypress

# Why I create it?

1- In backend project I used nodejs, because I wanted the javascript on the backend and frontend.
2- I wanted to use the knex to create a migrations to relationals databases and it's a good lib.
3- I used TDD, becase it help us to see and bild a good codes
4- To frontend I create a basic create-react-app and separate my page in two panels. I used the react-google-maps api to facilitate and save time in the construction of the screen.
5- I used hooks and somethings of redux.

# New features and improvements!

  - Create more unit tests using Jest to reactjs
  - Use the Storybook to show the components
  - Refactory the backend to create interfaces and to apply the SOLID principles
  - Hide the password on backend project and create an autodeploy passing tests, peharps to use the Travis for example
  - Get the geolocation to redirect the map to current position of user
  - To separate the components to be resusable


### Installation

Is necessary to install the nodejs and npm
In this project was used the:
node v12.19.0
npm v6.14.8

## Backend

Install the dependencies and devDependencies and start the server.
Before that, do the git clone of repository and open the folder

```sh
$ cd backend
$ npm install
$ npm start
$ npm test
```

This projec was create in Linux environment, so for production environments add the windows environment and alter the package.json.

### Frontend

Install the dependencies and devDependencies and start the project.
Create a .env file and add the follows parameters:
REACT_APP_GOOGLE_API_KEY=`your google maps api key`
REACT_APP_API_HOST=http://localhost:3001/houses

```sh
$ cd frontend
$ npm install
$ npm start
$ npm run cypress:open
```
