import React from 'react';
import './App.css';
import { connect } from 'react-redux'


class App extends React.Component {
	addIfOdd() {
		if (this.props.value % 2 !== 0) {
			this.props.add1()
		}
	}
	addAfterTwoSecond() {
		setTimeout(() => this.props.add2(), 2000)
	}
	render() {
		return (
			<div className="App">
			你点击了<span>{this.props.n}</span>次
			<button onClick={this.props.add1}>+1</button>
			<button onClick={this.props.add2}>+2</button>
			<button onClick={() => this.addIfOdd()}>单数就 +1</button>
			<button onClick={() => this.addAfterTwoSecond()}>两秒后 +2</button>
			</div>
		);
	}
}

// return partial state
const mapStateToProps = (state) => {
	return {
		n: state
	}
}

// as a Function
const mapDispatchToProps = dispatch => {
	return {
		add1: () => dispatch({ type: 'add', payload: 1 }),
		add2: () => dispatch({ type: 'add', payload: 2 })
	}
}

// mapDispatchToProps as an Object
// const mapDispatchToProps = {
// 	add1: () => ({ type: 'add', payload: 1 }),
// 	add2: () => ({ type: 'add', payload: 2 })
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
