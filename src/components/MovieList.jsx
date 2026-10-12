import MovieCard from './MovieCard'

function MovieList({ movies, emptyText, renderActions }) {
  if (movies.length === 0) {
    return <p>{emptyText}</p>
  }

  return (
    <ul className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}>
          {renderActions(movie)}
        </MovieCard>
      ))}
    </ul>
  )
}

export default MovieList