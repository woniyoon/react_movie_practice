import React from 'react';
import axios from 'axios';

class App extends React.Component {
  // data that will change should be stored in state
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async ()=> {
    const { data : { data : { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });

  }

  componentDidMount(){
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;

    return ( isLoading ? "Loading..." : "Ready");
  }
}

export default App;
