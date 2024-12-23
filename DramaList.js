function DramaList({ language }) {
  const dramaData = {
    trending: [
      {
        id: 1,
        title: '오징어 게임',
        image: 'squid-game.jpg',
        rating: '18+'
      },
      {
        id: 2,
        title: '슬기로운 의사생활',
        image: 'hospital-playlist.jpg',
        rating: '15+'
      }
    ],
    popular: [
      // 드라마 데이터
    ]
  };

  return (
    <div className="drama-sections">
      <section className="trending-section">
        <h2>{language === 'ko' ? '지금 유행하는 드라마들' : 'Trending Now'}</h2>
        <div className="drama-grid">
          {dramaData.trending.map(drama => (
            <DramaCard key={drama.id} drama={drama} language={language} />
          ))}
        </div>
      </section>
    </div>
  );
}