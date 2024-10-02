const movies = [];
function createMovies(movie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (movie.title && movie.description) {
        movies.push(movie);
        resolve(movie);
      } else {
        reject("Please try again");
      }
    }, 2000);
  });
}

function getMovies() {
  setTimeout(() => {
    if (movies.length > 0) {
      movies.forEach((movie) => {
        console.log(movie);
      });
    } else {
      ("Something went wrong");
    }
  }, 1000);
}
async function init() {
  try {
    await createMovies({ title: "Barbie", description: "About Barbie" });
    await createMovies({
      title: "Spiderman",
      description: "About a spiderman",
    });
    getMovies();
  } catch (err) {
    console.log(`Something went wrong`, err.message);
  }
}

init();
