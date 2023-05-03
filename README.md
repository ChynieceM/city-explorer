**Author**: Chyniece Matthews
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
This is a simple web application that allows users to enter a city name and displays the corresponding location on a map along with the latitude and longitude coordinates. The problem domain could be geolocation or mapping services.

The application uses the LocationIQ API to fetch the location data and display it on a map. It includes a form with an input field for the user to enter the city name, a submit button to call the API, and a section to display the location data.

The application is a simple user-friendly interface for displaying location data and can be useful travel, finding a business location or to explore.

## Getting Started
To build and run this app on your own machine:

1. Install Node.js: Download the latest version of Node.js that matches your system and follow the instructions.

2. Create a new React app: Open a terminal or command prompt and run `npx create-react-app my-app` to create a new React app.
    - Replace "my-app" with the name of your project.

3. Install the required packages: Navigate to the root directory of your project and run `npm install axios react-bootstrap` in your terminal or command prompt to install the required packages.

4. Copy the code: Copy the code from this repo and paste it into the App.js file in your project.

5. Obtain an API key: Obtain an API key from the LocationIQ website by creating a new account.

6. Update the code: Replace the API key from this repo in the code with your own API key obtained from LocationIQ.

7. .env File: add a .env file to the repo and add the API key with a unique name. add `.env` to your `.gitignore` file. Use `npm start` in your terminal to lauch the application. 

## Architecture
This application is built using the React and also uses the following libraries:

axios: A library for making HTTP requests from the browser. In the app, it's used to fetch data from the LocationIQ API.

react-bootstrap: A set of React components that implement the Bootstrap CSS framework. It is used to style the form and the card components in the app. 

The user interface is designed using HTML, CSS, and Bootstrap classes. This app consists of a form with an input field for the user to enter a city name, a submit button to trigger the API call, and a section to display the location data.

The application's state is managed with useState using 3 variables:

myCity: Stores the value entered by the user in the input field.
displayCity: Stores the location data retrieved from the API.
displayMap: Determines whether the map should be displayed or not.
The app fetches the location data from the LocationIQ API using axios. When the user clicks the submit button in the form the API call is triggered. If the API call fails or if the user enters an invalid city name the user is alerted with an error message 

The retrieved location data is displayed in a form with the city name, latitude, and longitude. If the API call is successful, the section also displays a map of the city using the staticmap endpoint given by the LocationIQ API.

## Change Log
05-03-2023 1:00pm App fully functional 
05-02-2023 4:59pm
added template
console.log
added try catch
added display
added usesate

## Credit and Collaborations
`https://www.w3schools.com/jsref/met_win_alert.asp`
`https://react-bootstrap.github.io/components/navbar/`
`https://www.udacity.com/blog/2021/05/javascript-booleans.html`

## Features
Name of feature: Locations: As a user of City Explorer, I want to enter the name of a location so that I can see the exact latitude and longitude of that location.

Estimate of time needed to complete: 3 hours

Start time: 1:40pm 

Finish time: 5:40pm

Actual time needed to complete: 4 hours


Name of feature: Map: As a user, I want to see a map of the city so that I can see the layout of the area I want to explore.

Estimate of time needed to complete: 1 hours

Start time: 10:10pm 

Finish time: 1:40pm

Actual time needed to complete: 2 hours


Name of feature: Errors: As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner.

Estimate of time needed to complete: 1 hours

Start time: 10:00pm 

Finish time: 11:20pm

Actual time needed to complete: 1 hour