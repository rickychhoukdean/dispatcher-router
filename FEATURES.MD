# Additional Features

## Testing and Continuous Integration
1. There are unit tests for the helper functions you can check via `npm run test`. It is using React Testing Library.
2. I've set up th app with CircleCI and Netlify. I've always wanted to learn more about continuous integration and thought this was the perfect chance to ensure the app was deployed only when my tasks passsed and gave me confidence when making additinal changes.

## Route Optimization
The route is created it will always have the least total distance. 

The algorithm works by breaking down the problem to "which available point is the closest".

1. The idea of the algorithm is given an array of movements and a given starting point we will find the next closest point (by eudcludian distance) to it by iterating through each available point. 
2. If the closest available point is a starting point the add that point to the route and replace that starting point with the end point. If the closest avaialble point is an end point remove it from the array. 
3. We continue this process until there are no more availabe points.

We will do this processs for each starting point and then return the route with the smallest distance.

With this method it is also possibe to find the shortest possible distance given a certain starting point but it is currently not implemented in the app.

## Deployment

The website is deployed at https://dispatcher-router.netlify.app/

## Responsive Design

The app is mobile friendly with the use of the bootstrap grid system.

## Modular design

By using Redux as the state management system and breaking down the app into three main components: movements, route and uiState it is very easy to make additional changes.
