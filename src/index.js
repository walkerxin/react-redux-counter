import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'

function stateChanger(state, action) {
	if (state === undefined) {
		return 0
	}
	if (action.type === 'add') {
		const newState = state + (action.payload || 1)
		return newState
	} else {
		return state
	}
}
const store = createStore(stateChanger)

const render = () => ReactDOM.render(
	<React.StrictMode>
		<App value={store.getState()}
			add1={() => store.dispatch({ type: 'add', payload: 1 })}
			add2={() => store.dispatch({ type: 'add', payload: 2 })}
		/>
	</React.StrictMode>,
	document.getElementById('root')
);
render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
