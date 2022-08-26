import { Container, Grid } from "@mui/material";
import SignInForm from "../../forms/SignIn/SignInForm";

const SignInPage = () => {
    return (
        <Container>
            <Grid container justifyContent='center' alignContent='center' alignItems='center' sx={{ height: '100vh' }}>
                <Grid item xs={12} sm={8}>
                    <SignInForm />
                </Grid>
            </Grid>
        </Container>
    )
}

export default SignInPage;
