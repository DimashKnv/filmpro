export function NewFilms() {
  let allFilms = [
    {
      Title: "Guardians of the Galaxy Vol. 2",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
      Title: "Guardians of the Galaxy Vol. 2",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
      Title: "Guardians of the Galaxy Vol. 2",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
      Title: "Guardians of the Galaxy Vol. 2",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
  ];
  return (
    <div className="newFilms">
      {allFilms.map((e) => {
        return (
          <div>
            <img src={e.Poster} alt="filmPoster" />
            <p>{e.Title}</p>
          </div>
        );
      })}
    </div>
  );
}
