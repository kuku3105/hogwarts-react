import React from "react";
import "./Watch.css";

function Watch() {
  const books = [
    { title: "1. Harry Potter and the Sorcerer’s Stone", url: "https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harry-potter-sorcerers-stone.pdf" },
    { title: "2. Harry Potter and the Chamber of Secrets", url: "https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harry-potter-chamber-of-secret-3.pdf" },
    { title: "3. Harry Potter and the Prisoner of Azkaban", url: "https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harrypotter.pdf" },
    { title: "4. Harry Potter and the Goblet of Fire", url: "https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harry-potter-and-the-goblet-of-fire.pdf" },
    { title: "5. Harry Potter and the Order of the Phoenix", url: "https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/5harry-potter-and-the-order-of-the-phoenix-1.pdf" },
    { title: "6. Harry Potter and the Half-Blood Prince", url: "https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harry-potter-and-the-half-blood-prince-j.k.-rowling.pdf" },
    { title: "7. Harry Potter and the Deathly Hallows", url: "https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harry-potter-and-the-deathly-hallows-j.k.-rowling.pdf" },
    { title: "8. Harry Potter and the Cursed Child", url: "https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harry-potter-and-the-cursed-child-parts-one-and-two-pdfdrive-.pdf" },
  ];

  const movies = [
    "1. The Sorcerer’s Stone",
    "2. The Chamber of Secrets",
    "3. The Prisoner of Azkaban",
    "4. The Goblet of Fire",
    "5. The Order of the Phoenix",
    "6. The Half-Blood Prince",
    "7. The Deathly Hallows: Part 1",
    "8. The Deathly Hallows: Part 2",
  ];

  return (
    <div className="watch-page">
      <h2>📚 Read & Watch Harry Potter</h2>
      <div className="watch-container">
        <div className="watch-section">
          <h3>📖 Books (Read Online)</h3>
          <ul>
            {books.map((book, index) => (
              <li key={index}>
                <a href={book.url} target="_blank" rel="noopener noreferrer">
                  {book.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="watch-section">
          <h3>🎬 Movies (Watch Online)</h3>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                <a
                  href="https://wwv-fmovies.com/movie-details/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {movie}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Watch;
