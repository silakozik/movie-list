const KEY = 'movie-watchlist'

export function loadWatchlist() {
    try {
        const raw = localStorage.getItem(KEY)
        return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
}

export function saveWatchlist(list) {
    try {
        localStorage.setItem(KEY, JSON.stringify(list))
    } catch {
      // Depolama doluysa veya kapalıysa uygulama yine de çalışmaya devam eder
    }
}