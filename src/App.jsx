import { useState } from 'react'
import { searchMovies } from './utils/api'

function App() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')

  async function handleSearch() {
    setError('')
    try {
      const results = await searchMovies(query)
      setMovies(results)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <h1>🎬 Film İzleme Listem</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Film ara..."
      />
      <button onClick={handleSearch}>Ara</button>

      {error && <p>{error}</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App