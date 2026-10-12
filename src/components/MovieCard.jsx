function MovieCard({ movie, children }) {
    return (
      <li className={`ticket ${movie.watched ? 'is-watched' : ''}`}>
        <div className="poster">
          {movie.poster ? (
            <img src={movie.poster} alt={movie.title} />
          ) : (
            <div className="poster-placeholder">Poster yok</div>
          )}
          {movie.watched && <span className="stamp">İzlendi</span>}
        </div>
        <div className="stub">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <div className="actions">{children}</div>
        </div>
      </li>
    )
  }
  
  export default MovieCard