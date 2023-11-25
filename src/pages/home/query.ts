export const fetchMovies = async () => {
  
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQ1MDdmMGIzMDQzNmQ5OTAyYmRjNzk5YjZhMWYzNiIsInN1YiI6IjY1NWVlMGRjN2RmZGE2MDBmZTY1NjU5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YWSNNo_aVeMXSb4IM54T4vtuMfnZIAnYymLcExp4W2k",
        },
      }
    );
    return res.json()
  };

export const fetchTvShows = async () => {
  
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQ1MDdmMGIzMDQzNmQ5OTAyYmRjNzk5YjZhMWYzNiIsInN1YiI6IjY1NWVlMGRjN2RmZGE2MDBmZTY1NjU5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YWSNNo_aVeMXSb4IM54T4vtuMfnZIAnYymLcExp4W2k",
        },
      }
    );
    return res.json()
  };
