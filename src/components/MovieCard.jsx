function MovieCard({ movie, children }) {
    return (
      <li>
        {movie.poster ? (
          <img src={movie.poster} alt={movie.title} width="100" />
        ) : (
          <div>Poster yok</div>
        )}
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <div>{children}</div>
      </li>
    )
  }
  
  export default MovieCard