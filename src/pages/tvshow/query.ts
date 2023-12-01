export const fetchTvShowDetails = async (tvShowId: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQ1MDdmMGIzMDQzNmQ5OTAyYmRjNzk5YjZhMWYzNiIsInN1YiI6IjY1NWVlMGRjN2RmZGE2MDBmZTY1NjU5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YWSNNo_aVeMXSb4IM54T4vtuMfnZIAnYymLcExp4W2k",
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data; // Returning the entire TV show details
  } catch (error) {
    throw new Error('Error fetching TV show details');
  }
};
