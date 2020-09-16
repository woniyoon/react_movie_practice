import React from 'react';

class App extends React.Component {
  // data that will change should be stored in state
  state = {
    isLoading: true,
    movies: [],
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;

    return ( isLoading ? "Loading..." : "Ready");
  }
}

export default App;
