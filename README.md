# Search Character Ricky and Morty

![Ricky and Morty coming out of a green portal](src/images/empty.png){:height="700px" width="200px"}

This project is a simple search app for the Ricky and Morty show characters. The data source is the [Ricky and Morty API](https://rickandmortyapi.com) 
and it makes use of the graphql endpoint to get data from.

Unfortunately, I didn't have much time to dedicate to the project this past week and some details are still to take care of and that's why there is no end-to-end or integration tests 
and there are only a few unit tests that were performed more to show testing skills than to really test the application.

Of course, if I had time I would use some Test Driven approach like TDD, but since I knew beforehand that I wouldn't have much time
to dedicate to this project at first I decided not to write tests concomitantly with app components. 

<em>"Done is better than perfect"</em>

I might come back letter to create tests and work on some application details.

I tried to keep things as simple as possible so I didn't include any data management tool, 
I just made use of a centralized component with almost all logic and processing functionalities
so it could work as a single source of truth for the rest of the app.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.