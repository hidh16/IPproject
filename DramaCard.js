function DramaCard({ drama, language }) {
  return (
    <div className="drama-card">
      <img src={drama.image} alt={drama.title} />
      <div className="drama-info">
        <h3>{drama.title}</h3>
        <span className="rating">{drama.rating}</span>
      </div>
    </div>
  );
}