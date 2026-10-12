function Stats({ watchlist }) {
    const total = watchlist.length
    const watched = watchlist.filter((m) => m.watched).length
    const toWatch = total - watched
    const percent = total === 0 ? 0 : Math.round((watched / total) * 100)
  
    return (
      <div className="progress">
        <p className="progress-text">
          <strong>{watched}</strong> / {total} film izlendi
          {total > 0 && `, ${toWatch} film sırada`}
        </p>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="progress-fill" style={{ width: `${percent}%` }} />
        </div>
      </div>
    )
  }
  
  export default Stats