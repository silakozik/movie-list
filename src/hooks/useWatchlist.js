import { useState, useEffect } from 'react'
import { loadWatchlist, saveWatchlist } from '../utils/storage'

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState(loadWatchlist)

  // Liste her değiştiğinde LocalStorage'a kaydediliyor
  useEffect(() => {
    saveWatchlist(watchlist)
  }, [watchlist])

  function addMovie(movie) {
    setWatchlist((prev) =>
      prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
    )
  }

  function removeMovie(id) {
    setWatchlist((prev) => prev.filter((m) => m.id !== id))
  }

  function toggleWatched(id) {
    setWatchlist((prev) =>
      prev.map((m) => (m.id === id ? { ...m, watched: !m.watched } : m))
    )
  }

  return { watchlist, addMovie, removeMovie, toggleWatched }
}