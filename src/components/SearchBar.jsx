import { useState } from 'react'

function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (query.trim()) onSearch(query.trim())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Film ara..."
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Aranıyor...' : 'Ara'}
      </button>
    </form>
  )
}

export default SearchBar