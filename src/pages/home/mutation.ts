export const rateMovie = async (movieId: number, rating: number) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${movieId}/rating?guest_session_id=${localStorage.getItem(
        "guest_session_id"
      )}&api_key=${import.meta.env.VITE_API_KEY} `,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          'content-type': "application/json;charset=utf-8",
        },
        body: `{"value": ${rating}}`,
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error; // Rethrow the error to be handled by the useMutation hook
  }
};


export const rateTvShow = async (tvShowId: number, rating: number) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${tvShowId}/rating?guest_session_id=${localStorage.getItem(
        "guest_session_id"
      )}&api_key=${import.meta.env.VITE_API_KEY} `,
      {
        headers: {
          accept: "application/json",
          'content-type': "application/json;charset=utf-8",
        },
        body: `{"value": ${rating}}`,
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error; // Rethrow the error to be handled by the useMutation hook
  }
};
