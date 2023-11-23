export const mutationLogin = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
           headers: {
             Authorization:
               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQ1MDdmMGIzMDQzNmQ5OTAyYmRjNzk5YjZhMWYzNiIsInN1YiI6IjY1NWVlMGRjN2RmZGE2MDBmZTY1NjU5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YWSNNo_aVeMXSb4IM54T4vtuMfnZIAnYymLcExp4W2k"
           },  
        }
    );

    console.log(res.json());

    return res.json();
};
