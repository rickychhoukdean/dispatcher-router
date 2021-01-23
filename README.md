# Dispatcher Router

React Redux application used for dispatchers to create, read, update and delete movements and view possible routes emintatingfrom these movements.

Read more about features [here](./FEATURES.md)

# Basic Features    
1. Dispatchers are able to create, update and delete movements. Movements will be checked for validity (does not already exist and start and end points are different) upon creation and updating.
2. Dispatcher is able to toggle between different views. 
    The sidebar will either show a list of all available movements or the optimized routes to do these movements. 
        Hovering over movements in the list will highlight them on the movement map.
    The map can be toggled between a view of all movements or the optimized route.
3.

# Demo

# Setup Guide

1. `git clone https://github.com/rickychhoukdean/dispatcher-router.git`
2. `cd`
3. `npm i`
4. `npm run start`
5. The website should be now running on http://localhost:3000/ or whichever port is open
6. You can also view the deployed application at https://dispatcher-router.netlify.app


# Dependencies

    "@fortawesome/fontawesome-svg-core": "^1.2.25",
    "@fortawesome/free-solid-svg-icons": "^5.11.2",
    "@fortawesome/react-fontawesome": "^0.1.5",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "bootstrap": "^4.5.3",
    "node-sass": "^4.14.1",
    "react": "^17.0.1",
    "react-bootstrap": "^1.4.3",
    "react-dom": "^17.0.1",
    "react-redux": "^7.2.2",
    "react-scripts": "4.0.1",
    "redux": "^4.0.5",
    "web-vitals": "^0.2.4"
