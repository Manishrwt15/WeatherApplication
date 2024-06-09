# Weather Application  link - https://weather-application-pi-six.vercel.app/
 
This is a weather application built using React with Vite, Material-UI, and vanilla CSS. It fetches weather data from the OpenWeatherMap API and displays it in a card component. It also includes a feature to handle cases where the searched location is not found.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Components](#components)
  - [SearchBox](#searchbox)
  - [Info](#info)
  - [Weather](#weather)
- [Known Issues or Limitations](#known-issues-or-limitations)

## Features
- Fetches and displays weather data from the OpenWeatherMap API.
- Displays weather information in a card format.
- Handles cases where the searched location is not found and displays an appropriate message.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Vite**: Next generation frontend tooling.
- **Material-UI**: React components for faster and easier web development.
- **Vanilla CSS**: Custom styling.
- **OpenWeatherMap API**: API to fetch weather data.

## Getting Started

### Prerequisites
- Node.js and npm installed on your local machine.

### Installation
1. Clone the repository:
    git clone https://github.com/Manishrwt15/weather-application.git
   
3. Navigate to the project directory:
    cd weather-application
   
4. Install the dependencies:
    npm install
    

### Running the Application
1. Start the development server:
    npm run dev
    
2. Open your browser and navigate to `http://localhost:3000`.

## Components

### SearchBox
- A component that includes a textarea for search input and a search button.
- Used for inputting the location to fetch weather data for.

### Info
- A component that displays the weather information in a card format.
- Shows data such as temperature, humidity, and weather conditions.
- Displays a message when the searched location is not found.

### Weather
- The main component that integrates `SearchBox` and `Info` components.
- Displays initial data and updates based on the user's search input.

## Known Issues or Limitations
- The application currently does not handle rate limiting from the OpenWeatherMap API.
- There may be a slight delay in fetching data due to network latency.
- Error handling is basic; additional improvements can be made to handle various error scenarios more gracefully.
