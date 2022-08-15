import { Container, Grid } from "@mui/material";
import SignUpForm from "../../forms/SignUp"

const SignUpPage =  () => {
    return (
        <Container>
            <Grid container justifyContent='center' alignContent='center' alignItems='center' sx={{ height: '100vh' }}>
                <Grid item xs={12} sm={8}>
                    <SignUpForm />
                </Grid>
            </Grid>
        </Container>
    )
}

export default SignUpPage;
