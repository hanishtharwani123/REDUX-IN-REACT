# React Redux Dem

This project demonstrates the integration of Redux with a React application. Redux is a predictable state container for JavaScript applications, commonly used with React to manage the application state in a scalable and maintainable way.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Redux Concepts](#redux-concepts)
- [Usage](#usage)
- [Demo](#demo)
- [License](#license)

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): Comes with Node.js installation

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hanishtharwani123/REDUX-IN-REACT.git

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Project Structure

```
react-redux-demo/
|-- src/
|   |-- actions/
|   |   |-- actionTypes.js
|   |   |-- counterActions.js
|   |-- components/
|   |   |-- Counter.js
|   |-- reducers/
|   |   |-- counterReducer.js
|   |-- App.js
|   |-- index.js
|-- .gitignore
|-- package.json
|-- README.md
```

## Redux Concepts

### Actions

Actions are payloads of information that send data from your application to the Redux store. They are plain JavaScript objects and must have a `type` property that indicates the type of action being performed.

Example (`actions/counterActions.js`):

```javascript
// actionTypes.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// counterActions.js
import { INCREMENT, DECREMENT } from './actionTypes';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
```

### Reducers

Reducers specify how the application's state changes in response to actions. A reducer is a pure function that takes the previous state and an action, and returns the next state.

Example (`reducers/counterReducer.js`):

```javascript
import { INCREMENT, DECREMENT } from '../actions/actionTypes';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
```

### Store

The Redux store holds the complete state tree of your application. The only way to change the state inside it is to dispatch an action.

Example (`index.js`):

```javascript
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducers/counterReducer';
import App from './App';

const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## Usage

To use the Redux functionality in your components, you can connect them to the Redux store using the `connect` function provided by the `react-redux` library.

Example (`components/Counter.js`):

```javascript
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
```

## Demo

To run the application, use the following command:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the Redux counter demo.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
