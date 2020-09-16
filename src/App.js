import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

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

    return ( isLoading ? (
      <section className="loader">
        <span className="loader_text">
          Loading...
        </span>
      </section> ) : 
      <div className="movies">
        {movies.map( movie =>
          <Movie 
            key={movie.id} 
            id={movie.id}
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
            genres={movie.genres} 
          />
        )}
      </div>  
    );
  }
}

export default App;
