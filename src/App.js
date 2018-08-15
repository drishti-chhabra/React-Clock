import React, { Component } from 'react';



function GuestGreeting(props) {
  return <h1>Please sign in.</h1>;
}
function UserGreeting(props) {
  return null;
}
function Greeting(props) {
 const isToggle=props.isToggle;
  if (isToggle) {
    return <UserGreeting />;
  }
  else
  {
  return <GuestGreeting />;
}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state={date:new Date(),isToggle:true}

    this.handleClick=this.handleClick.bind(this);

  }
  componentDidMount(){
  	this.timerId=setInterval(
  		()=> this.tick(),1000
  		);

  }
  componentWillUnmount(){
  	clearInterval(this.timerId);
  }

 handleClick(){
 	this.setState(prevState =>({
 		isToggle:!prevState.isToggle
 	 	}
 	 	)
 	);
 
 }
tick()

{
	this.setState({date:new Date()});
}
render() {
    return(
    	<div>
    	<h1> CURRENT TIME IS {this.state.date.toLocaleTimeString()}</h1>
    	
    	<button onClick={this.handleClick}>{this.state.isToggle?'Logged In':'Sign in'} </button>
    	<Greeting isToggle={this.state.isToggle} />
    	</div>
    	);
  }
}

export default App;