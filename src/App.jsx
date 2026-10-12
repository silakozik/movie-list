import { useState } from 'react'
import { searchMovies } from './utils/api'
import { useWatchlist } from './hooks/useWatchlist'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)

  const { watchlist, addMovie, removeMovie, toggleWatched } = useWatchlist()

  async function handleSearch(query) {
    setLoading(true)
    setError('')
    try {
      const movies = await searchMovies(query)
      setResults(movies)
      setSearched(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const isInWatchlist = (id) => watchlist.some((m) => m.id === id)

  return (
    <div>
      <h1>🎬 Film İzleme Listem</h1>

      <SearchBar onSearch={handleSearch} loading={loading} />
      {error && <p>{error}</p>}

      {searched && (
        <section>
          <h2>Arama Sonuçları</h2>
          <MovieList
            movies={results}
            emptyText="Film bulunamadı."
            renderActions={(movie) => (
              <button
                onClick={() => addMovie(movie)}
                disabled={isInWatchlist(movie.id)}
              >
                {isInWatchlist(movie.id) ? 'Listede' : 'Listeye Ekle'}
              </button>
            )}
          />
        </section>
      )}

      <section>
        <h2>İzleme Listem</h2>
        <MovieList
          movies={watchlist}
          emptyText="Listen henüz boş. Bir film arayıp ekle."
          renderActions={(movie) => (
            <>
              <button onClick={() => toggleWatched(movie.id)}>
                {movie.watched ? 'İzlenmedi yap' : 'İzlendi'}
              </button>
              <button onClick={() => removeMovie(movie.id)}>Sil</button>
            </>
          )}
        />
      </section>
    </div>
  )
}

export default App