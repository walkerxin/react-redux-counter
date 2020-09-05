import React from 'react';
import './App.css';

class App extends React.Component {
	addIfOdd() {
		console.log('here', this.props.value)
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
			你点击了<span>{this.props.value}</span>次
			<button onClick={this.props.add1}>+1</button>
			<button onClick={this.props.add2}>+2</button>
			<button onClick={() => this.addIfOdd()}>单数就 +1</button>
			<button onClick={() => this.addAfterTwoSecond()}>两秒后 +2</button>
			</div>
		);
	}
}

export default App;
