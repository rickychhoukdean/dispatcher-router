# Dispatcher Router

React Redux SPA for dispatchers to create, update and delete shipments and view optimized driving routes for these shipments.

## Basic Features    
1. Dispatchers are able to create movements. Each movement will have a start (lat,long), end and description.
2. Dispatchers are able to update movements. 
3. Movements will be checked for validity (does not already exist and start and end points are different) upon creation and updating.
4. Dispatchers are able to delete movements.
5. Dispatchers be shown a list of all available movements or the optimized route to take for these movements in the sidebar. 
6. The dispactchers will be shown a map of all avaialble movements or the optimized route depending on the current view.
7. The dispatcher is able to make a clear distinction between the list of movements and their representation on the map either by looking at the label on the map or hovering inside the list item.

Read about additional features [here](./FEATURES.md)

## Demo



## Setup Guide

1. `git clone https://github.com/rickychhoukdean/dispatcher-router.git`
2. `cd`
3. `npm i`
4. `npm run start`
5. The website should be now running on http://localhost:3000/
6. You can also view the deployed application at https://dispatcher-router.netlify.app/


## Dependencies

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
