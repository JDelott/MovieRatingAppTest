export const mutationLogin = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQ1MDdmMGIzMDQzNmQ5OTAyYmRjNzk5YjZhMWYzNiIsInN1YiI6IjY1NWVlMGRjN2RmZGE2MDBmZTY1NjU5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YWSNNo_aVeMXSb4IM54T4vtuMfnZIAnYymLcExp4W2k",
        },
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
