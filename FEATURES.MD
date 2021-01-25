# Additional Features

## Testing and Continuous Integration
1. There are unit tests for the helper functions you can check via `npm run test`. It is using React Testing Library.
2. I've set up the app with CircleCI and Netlify. I've always wanted to learn more about continuous integration and thought this was the perfect chance to ensure the app was deployed only when my tasks passed and gave me confidence when making additional changes.

## Expanding Movement Model with cities
The dispatcher is also able to add cities to the movements when creating and updating. These cities do not affect validation.

## Route Optimization
The route created will always have the least total distance. 

The algorithm works by breaking down the problem to "which available point is the closest". The general idea is to work with two arrays, one visited nodes array and one unvisited nodes array.

1. given an array of movements (unvisited node array with only starting points) and a given starting point we will find the next closest point (by euclidian distance) to it by iterating through each unvisited node. 
2. If the closest available node is a starting point then add that point to the visited nodes array and replace that starting point with its endpoint. If the closest available point is an endpoint add it to the visited nodes array and remove it from the unvisited nodes array. 
3. Continue this process until there are no more available points and return the visited nodes array.

We will do this process for each starting point and then return the route with the smallest distance.

With this method, it is also possible to find the shortest possible distance given a certain starting point but it is currently not implemented in the app.

## Deployment
The website is deployed at https://dispatcher-router.netlify.app/
