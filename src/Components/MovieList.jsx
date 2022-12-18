import Hero from "./Hero";
import SearchedMovies from "./SearchMovies";

const MovieList = () => {
  return (
    <div>
      <nav className="nav ">
        <header className=" h-12 lg:h-14 p-5 lg:ml-14 border-2 border-white flex justify-center items-center">
          <h1 className="text-white">MyTestApp</h1>
        </header>
      </nav>
      <Hero />
      <SearchedMovies />
    </div>
  );
};

export default MovieList;
