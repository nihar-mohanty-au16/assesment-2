import { useEffect, useState } from "react";
import axios from "axios";
import GetMovies from "./components/GetMovies";

function App() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(`http://localhost:5000/`);
      setMovie(res.data);
    };
    getMovies();
  });
  return (
    <div className="App">
      {movie.map((item) => {
        <GetMovies
          title={item.Movie}
          rating={item.Rating}
          date={item.ReleaseDate}
        />;
      })}
    </div>
  );
}

export default App;
