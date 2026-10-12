import MovieCard from './MovieCard'

function MovieList({ movies, emptyText, renderActions }) {
  if (movies.length === 0) {
    return <p>{emptyText}</p>
  }

  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}>
          {renderActions(movie)}
        </MovieCard>
      ))}
    </ul>
  )
}

export default MovieList