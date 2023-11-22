import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";


export const Auth = () => {
    const handleLogin = () => {};
    return (
        <Grid textAlign="center" verticalAlign="middle" style= {{ height: "100vh" }}>
            <Grid.Column style={{maxWidth: 450 }}>
                <Header as="h2" color="violet" textAlign="center">
                    Welcome! Login by registering as a Guest below.
                </Header>
                <Form size="large">
                    <Segment stacked>
                        <Button color="violet" size="large" fluid onClick={handleLogin}>
                          {" "}
                          Login 
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )

}
