export const fetchTvShowDetails = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`
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
