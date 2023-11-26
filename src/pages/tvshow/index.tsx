import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Header, Loader, Segment, Image } from "semantic-ui-react";
import { useQuery } from "@tanstack/react-query";
import { fetchTvShowDetails } from "./query";

export const TvShow = () => {
  const { id } = useParams<{ id?: string }>();

  // Always call useQuery, but pass the query key conditionally
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["tvshows", id],
    queryFn: () => (id ? fetchTvShowDetails(id) : Promise.resolve(null)),
    enabled: !!id,
  });
  // Use useEffect unconditionally, but check for id inside the effect
  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id, refetch]);

  if (!id) {
    return <div>Invalid TV Show ID</div>;
  }

  if (isLoading) {
    return <Loader active />;
  }

  if (error) {
    return <div>Error loading TV Show details</div>;
  }

  return (
    <div style={{ marginTop: 50 }}>
      <Segment>
        <Header>{data.title}</Header>
        <Grid columns={2} divided textAlign="left" style={{ marginTop: 20 }}>
          <Grid.Row>
            <Grid.Column width={6}></Grid.Column>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                size="medium"
                centered
              />
            </div>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};
