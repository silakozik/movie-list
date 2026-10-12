const API_KEY = import.meta.env.VITE_OMDB_KEY
const BASE_URL = 'https://www.omdbapi.com/'

// OMDb'den gelen veriyi kendi film modelimize çevirir.
// Film modelimiz: { id, title, year, poster, watched }
function toMovie(item) {
  return {
    id: item.imdbID,
    title: item.Title,
    year: item.Year,
    poster: item.Poster !== 'N/A' ? item.Poster : null,
    watched: false, // izlenen filmleri işaretlemek için
  }
}

export async function searchMovies(query) {
  const url = `${BASE_URL}?apikey=${API_KEY}&type=movie&s=${encodeURIComponent(query)}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Sunucuya ulaşılamadı.')
  }

  const data = await response.json()

  // OMDb, hata durumunda da 200 döner; durumu "Response" alanından anlarız.
  if (data.Response === 'False') {
    if (data.Error === 'Movie not found!') return []
    throw new Error(data.Error)
  }

  return data.Search.map(toMovie)
}