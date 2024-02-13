export function FilmInfo() {
  let ratings = [
    {
      source: "Internet Movie Database",
      value: "7.6/10",
    },
    {
      source: "Rotten Tomatoes",
      value: "85%",
    },
    {
      source: "Metacritic",
      value: "67/100",
    },
  ];
  return (
    <div className="filmInfo">
      <div className="infoBox">
        <img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" alt="filmPoster" />
        <div className="descript">
          <h3>HarryPotter</h3>
          <p>Runtime:140min</p>
          <p>Year:2020</p>
          <p>Director:JamesGunn</p>
          <p>Actors:BradPitt</p>
          <p>Plot:Lorem21321312312</p>
          <p>Genre:Horror</p>
        </div>
      </div>
      <div className="ratingBox">
        {ratings.map((rate) => {
          return (
            <div>
              <h3>{rate.source}</h3>
              <p>{rate.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
