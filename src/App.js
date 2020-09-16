import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  // data that will change should be stored in state
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async ()=> {
    const { data : { data : { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });

  }

  componentDidMount(){
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return ( isLoading ? "Loading..." : movies.map( movie =>
      <Movie 
        id={movie.id} 
        year={movie.year} 
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.medium_cover_image} 
      />
    ));
  }
}

export default App;
