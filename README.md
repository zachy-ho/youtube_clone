# youtube_clone

A YouTube clone made with ReactJS.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learnings

1. Arrow functions in JSX do not have their own 'this', whereas a normal function does. So if we wish to use normal function syntax, we need to bind the function with the class where the function is defined, otherwise 'this' in the function won't be referring to the class.
   **tldr**: Normal functions - bind ; Arrow functions - no bind.

- Normal function example

```
constrctor(props) {
  ...
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.setState(state => ({
    isToggleOn: !state.isToggleOn
  }));
}
```

- Arrow function example (without binding)

```
handleChange = event => {
this.setState({ searchTerm: event.target.value });
};
```

2. Events

- When we implement something like a Search Bar or something that changes, we would usually have a function called onChange. The way we capture the 'changed' item is by calling **event.target.value**

```
handleChange = event => {
this.setState({ searchTerm: event.target.value });
};
```

3. Structuring

- The practice below allows efficient and clean code with variables. Introduced in ES6 I believe (I may be wrong).

```
const { searchTerm } = this.state;
const { onFormSubmit } = this.props;
```

4. Async/Await

- Stops execution of the code until something is fetched.

```
handleSubmit = async searchTerm => {
		const response = await youtube.get('search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: 'AIzaSyBIcOnnRqzrc4KVC-1_2AXpEn60ZW0dSM0',
				q: searchTerm
			}
		});

		console.log(response);
	};
```

5. React.Fragment

- Used when we wish for a component to return a list of children. Instead of using `<div></div>` to put everything under one parent (which may not be proper/intended HTML), we use `<React.Fragment>`
- Examples and reference: https://reactjs.org/docs/fragments.html

6. Template literals

- String literals allowing embedded expressions.
- Placeholders: `${expression}`

7. Rendering the whole application in the root of our directory (html page with ID=root)

- `ReactDOM.render(<App/>, document.querySelector('#root'));` in index.js

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
